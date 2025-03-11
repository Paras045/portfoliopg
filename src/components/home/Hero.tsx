
import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12 clip-path-hero bg-gradient-to-b from-background to-muted">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary text-primary-foreground mb-4">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight text-balance">
            Building digital experiences with precision and purpose.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 text-balance">
            Computer Engineering student passionate about creating intuitive, 
            elegant solutions that solve real-world problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToProjects}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium mb-2 text-muted-foreground">
              Explore
            </span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
