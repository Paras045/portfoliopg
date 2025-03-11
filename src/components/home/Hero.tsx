
import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12 clip-path-hero bg-gradient-to-b from-background to-muted">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left md:w-3/5 mb-12 md:mb-0"
        >
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary text-primary-foreground mb-4">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight text-balance">
            Building digital experiences with precision and purpose.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto md:mx-0 mb-12 text-balance">
            Computer Engineering student passionate about creating intuitive, 
            elegant solutions that solve real-world problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:w-2/5 flex justify-center"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-primary/20">
            <img 
              src="/lovable-uploads/60f04428-3a13-4400-8c9e-716bddf25da5.png" 
              alt="Paras Gunjavate" 
              className="w-full h-full object-cover"
            />
          </div>
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
