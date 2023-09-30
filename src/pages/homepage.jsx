import React from "react";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import Hero from "../components/landing/Hero";
import About from "../components/landing/about";
import Blogs from "../components/landing/Blogs";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Blogs />
      <Footer />
    </div>
  );
}
