// @flow strict

import BlogCard from "../components/homepage/blog/blog-card";
import { fetchBlogs } from "@/utils/fetch-blogs";

// Prerendered at build time, like the homepage, and sharing the same fetch so
// both pages show the same list. See utils/fetch-blogs.js for why the request
// has to run in Node rather than the browser.
async function page() {
  const blogs = await fetchBlogs();

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center max-w-full">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blog
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          blogs.map((blog, i) => (
            blog?.cover_image && <BlogCard blog={blog} key={i} />
          ))
        }
      </div>
    </div>
  );
}

export default page;