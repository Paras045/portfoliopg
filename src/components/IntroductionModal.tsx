
import React from "react";
import { X, Github, Linkedin, Mail, Phone, MapPin, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

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
            className="relative z-50 w-full max-w-5xl max-h-[90vh] overflow-auto bg-gradient-to-br from-card/90 to-card/50 shadow-lg rounded-2xl border border-border/50"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 backdrop-blur-sm bg-background/50 border-b border-border/50">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-yellow-500" />
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                  Introduction
                </h2>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-destructive/10">
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="relative mx-auto">
                    <div className="w-40 h-40 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 transition-transform hover:scale-105">
                      <img 
                        src="/lovable-uploads/60f04428-3a13-4400-8c9e-716bddf25da5.png" 
                        alt="Paras Gunjavate" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Available for Work
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mt-4">Paras Gunjavate</h2>
                    <p className="text-muted-foreground">Computer Engineering Student</p>
                  </div>
                </div>
                
                <div className="md:col-span-2 space-y-8">
                  <div className="bg-muted/30 rounded-xl p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      About Me
                      <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      B.Tech student in Computer Engineering with a passion for creating elegant solutions through innovative technology.
                      Currently focused on developing web applications and exploring artificial intelligence.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-muted/30 rounded-xl p-6 backdrop-blur-sm">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        Education
                        <div className="h-px flex-1 bg-border" />
                      </h4>
                      <ul className="space-y-4">
                        <li>
                          <div className="font-medium">B.Tech in Computer Engineering</div>
                          <div className="text-sm text-muted-foreground">2nd Year - Present</div>
                        </li>
                        <li>
                          <div className="font-medium">Diploma in Computer Engineering</div>
                          <div className="text-sm text-muted-foreground">Completed</div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted/30 rounded-xl p-6 backdrop-blur-sm">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        Skills
                        <div className="h-px flex-1 bg-border" />
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {["React", "TypeScript", "Node.js", "TailwindCSS", "Python", "Git"].map((skill) => (
                          <div 
                            key={skill}
                            className="py-1.5 px-3 bg-primary/10 rounded-md text-sm font-medium text-primary-foreground/90 hover:bg-primary/20 transition-colors"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/30 rounded-xl p-6 backdrop-blur-sm">
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                      Contact Information
                      <div className="h-px flex-1 bg-border" />
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <a
                          href="mailto:parasgunjavate522@gmail.com"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors"
                        >
                          <Mail className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Email</p>
                            <p className="text-sm text-muted-foreground">parasgunjavate522@gmail.com</p>
                          </div>
                        </a>
                        
                        <a
                          href="tel:+919356610087"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors"
                        >
                          <Phone className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Phone</p>
                            <p className="text-sm text-muted-foreground">+91 9356610087</p>
                          </div>
                        </a>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3">
                          <MapPin className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Location</p>
                            <p className="text-sm text-muted-foreground">Maharashtra, India</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 p-3">
                          <a
                            href="https://github.com/Paras045"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                            aria-label="GitHub"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                          <a
                            href="https://www.linkedin.com/in/paras-gunjavate-692176219"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
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
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default IntroductionModal;
