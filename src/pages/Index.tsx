
import React from "react";
import PageTransition from "@/components/PageTransition";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Hero />
        <About />
        <FeaturedProjects />
        <ContactSection />
      </div>
    </PageTransition>
  );
};

export default Index;
