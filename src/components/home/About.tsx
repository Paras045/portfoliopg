
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, GraduationCap, Layers } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary text-primary-foreground mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Paras Gunjavate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Computer Engineering student with a passion for innovative technology and elegant solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Card className="h-full overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-primary/10 p-3 mr-4">
                    <GraduationCap className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">B.Tech in Computer Engineering</p>
                    <p className="text-sm text-muted-foreground">2nd Year - Present</p>
                  </li>
                  <li>
                    <p className="font-medium">Diploma in Computer Engineering</p>
                    <p className="text-sm text-muted-foreground">Completed</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="h-full overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-primary/10 p-3 mr-4">
                    <Code className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Skills</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-28 text-sm">Front-end</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-foreground w-[90%]"></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-28 text-sm">Back-end</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-foreground w-[85%]"></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-28 text-sm">UI/UX Design</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-foreground w-[75%]"></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-28 text-sm">AI/ML</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-foreground w-[70%]"></div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="h-full overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-primary/10 p-3 mr-4">
                    <Layers className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Technologies</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {["React", "TypeScript", "Node.js", "TailwindCSS", "Python", "Supabase", "Next.js", "Git"].map((tech, index) => (
                    <div 
                      key={tech} 
                      className="py-2 px-3 bg-background rounded-md text-sm font-medium text-foreground border border-border/50"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
