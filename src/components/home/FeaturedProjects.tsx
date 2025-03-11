
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: "e-commerce",
    title: "E-commerce Website",
    description: "A modern e-commerce platform with secure checkout and payment integration.",
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1024",
    tags: ["React", "TypeScript", "Supabase", "TailwindCSS"],
  },
  {
    id: "farming-ai",
    title: "Farming with AI",
    description: "AI-powered platform providing insights for improved farming efficiency.",
    image: "https://images.unsplash.com/photo-1562051036-e0eea191d42f?q=80&w=1024",
    tags: ["Python", "TensorFlow", "React", "Node.js"],
  },
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary text-primary-foreground mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work showcasing innovative solutions and technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all h-full flex flex-col">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-all hover:scale-105 duration-700"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">
                    {project.description}
                  </p>
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center text-sm font-medium hover:underline"
                  >
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center py-2 px-4 border border-foreground rounded-md text-sm font-medium transition-all hover:bg-foreground hover:text-background"
            >
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
