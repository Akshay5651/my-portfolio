import { personalData } from "@/utils/data/personal-data";

// dev.to's CDN caches this endpoint per *compression variant*, not per URL.
// Measured on one machine, same second, with a unique query string each time:
//
//   Accept-Encoding: gzip/br  -> 3 posts, Age: 1637
//   Accept-Encoding: identity -> 5 posts, Age: 227
//
// So the query string is not part of the cache key and no amount of
// cache-busting helps; asking for an uncompressed response is what gets a
// fresh copy. A browser cannot do this — Accept-Encoding is a forbidden
// header name — which is why the blog list is fetched here, at build time,
// in Node.
export async function fetchBlogs() {
  const res = await fetch(
    `https://dev.to/api/articles?username=${personalData.devUsername}&per_page=30`,
    { headers: { "accept-encoding": "identity" } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  // Only posts with a cover image render as cards, so anything without one is
  // dropped. Newest first.
  return data
    .filter((item) => item?.cover_image)
    .sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
}
