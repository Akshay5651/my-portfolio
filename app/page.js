"use client";

import { useEffect, useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import Certifications from "./components/homepage/certifications";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        // per_page is deliberate, not cosmetic: dev.to's CDN caches the bare
        // `?username=` URL aggressively (seen serving an hour-stale response
        // with Age: 3480), so a new post would not appear here for a long time
        // no matter how often the page was refreshed. The extra param gives a
        // different cache key, and no-store keeps the browser from adding its
        // own layer on top.
        const res = await fetch(
          `https://dev.to/api/articles?username=${personalData.devUsername}&per_page=30`,
          { cache: "no-store" }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        // Only posts with a cover image render as cards, so anything without
        // one is dropped here. Newest first — sorting by title meant a new
        // post could land anywhere in the list.
        const filtered = data
          .filter((item) => item?.cover_image)
          .sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

        setBlogs(filtered);
      } catch (err) {
        console.error(err);
        setError("Unable to fetch blogs at the moment. Please try again later.");
      }
    };

    getData();
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      {error ? (
        <p className="text-red-500 text-center mt-4">{error}</p>
      ) : (
        <Blog blogs={blogs} />
      )}
      <ContactSection />
    </>
  );
}
