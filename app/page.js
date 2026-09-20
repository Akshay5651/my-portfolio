import { fetchBlogs } from "@/utils/fetch-blogs";
import HomeClient from "./home-client";

// Server component: runs at build time, so the dev.to request can set
// accept-encoding and get a fresh response. Everything interactive lives in
// HomeClient. Publishing a new post therefore shows up on the next deploy
// rather than on the next page load.
export default async function Home() {
  let blogs = [];

  try {
    blogs = await fetchBlogs();
  } catch (err) {
    // A dev.to outage should cost the blog section, not the whole page.
    console.error("Could not fetch blogs at build time:", err);
  }

  return <HomeClient blogs={blogs} />;
}
