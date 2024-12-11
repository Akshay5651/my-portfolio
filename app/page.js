"use client";

import { useEffect, useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
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
        const res = await fetch(
          `https://dev.to/api/articles?username=${personalData.devUsername}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        // Filter and sort deterministically
        const filtered = data
          .filter((item) => item?.cover_image)
          .sort((a, b) => a.title.localeCompare(b.title)); // Alphabetical sort

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
      {error ? (
        <p className="text-red-500 text-center mt-4">{error}</p>
      ) : (
        <Blog blogs={blogs} />
      )}
      <ContactSection />
    </>
  );
}
