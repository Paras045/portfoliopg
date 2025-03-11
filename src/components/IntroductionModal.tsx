
import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

interface IntroductionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const IntroductionModal = ({ isOpen, onClose }: IntroductionModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative z-50 w-full max-w-5xl max-h-[90vh] overflow-auto bg-card shadow-lg rounded-xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-card/80 backdrop-blur-sm border-b border-border/50">
              <h2 className="text-xl font-bold">Introduction</h2>
              <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 mb-6">
                    <img 
                      src="/lovable-uploads/60f04428-3a13-4400-8c9e-716bddf25da5.png" 
                      alt="Paras Gunjavate" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold mb-1">Paras Gunjavate</h2>
                  <p className="text-muted-foreground mb-4">Computer Engineering Student</p>
                </div>
                
                <div className="md:col-span-2">
                  <div className="bg-muted/30 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4">About Me</h3>
                    <p className="text-muted-foreground mb-6">
                      B.Tech student in Computer Engineering with a passion for creating elegant solutions through innovative technology.
                      Currently focused on developing web applications and exploring artificial intelligence.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Education</h4>
                        <ul className="space-y-3">
                          <li className="text-sm">
                            <span className="font-medium block">B.Tech in Computer Engineering</span>
                            <span className="text-muted-foreground">2nd Year - Present</span>
                          </li>
                          <li className="text-sm">
                            <span className="font-medium block">Diploma in Computer Engineering</span>
                            <span className="text-muted-foreground">Completed</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-3">Skills</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {["React", "TypeScript", "Node.js", "TailwindCSS", "Python", "Git"].map((tech) => (
                            <div 
                              key={tech} 
                              className="py-1 px-3 bg-primary/10 rounded-md text-xs font-medium text-foreground"
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <Mail className="h-5 w-5 mt-1 mr-3 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Email</p>
                            <a
                              href="mailto:parasgunjavate522@gmail.com"
                              className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                              parasgunjavate522@gmail.com
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Phone className="h-5 w-5 mt-1 mr-3 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Phone</p>
                            <a
                              href="tel:+919356610087"
                              className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                              +91 9356610087
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 mt-1 mr-3 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Location</p>
                            <p className="text-muted-foreground">Maharashtra, India</p>
                          </div>
                        </div>
                        
                        <div>
                          <p className="font-medium mb-3">Social Media</p>
                          <div className="flex space-x-4">
                            <a
                              href="https://github.com/Paras045"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                              aria-label="GitHub"
                            >
                              <Github className="h-5 w-5" />
                            </a>
                            <a
                              href="https://www.linkedin.com/in/paras-gunjavate-692176219"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                              aria-label="LinkedIn"
                            >
                              <Linkedin className="h-5 w-5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default IntroductionModal;
