"use client";

import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import Certifications from "./components/homepage/certifications";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

// The blog list arrives already fetched, filtered and sorted from the server
// component in page.js, which runs at build time. It used to be fetched here
// in a useEffect, but the browser always gets dev.to's stale compressed cache
// variant and cannot ask for an uncompressed one. See utils/fetch-blogs.js.
export default function HomeClient({ blogs = [] }) {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  );
}
