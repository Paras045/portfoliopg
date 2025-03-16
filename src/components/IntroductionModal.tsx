
import React, { useEffect, useRef } from "react";
import { X, Github, Linkedin, Mail, Phone, MapPin, Star, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface IntroductionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const IntroductionModal = ({ isOpen, onClose }: IntroductionModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Add keyboard event listener to close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      
      // Set focus to the modal
      if (modalRef.current) {
        modalRef.current.focus();
      }
      
      // Scroll to top of the modal
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto pt-10 pb-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ 
              type: "spring", 
              damping: 20, 
              stiffness: 300,
              duration: 0.4 
            }}
            className="relative z-50 w-full max-w-5xl max-h-[90vh] my-6 mx-auto overflow-auto bg-gradient-to-br from-card/90 to-card/50 shadow-lg rounded-2xl border border-border/50"
            tabIndex={-1}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 backdrop-blur-sm bg-background/50 border-b border-border/50">
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 text-yellow-500" />
                </motion.div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                  Introduction
                </h2>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onClose} 
                className="rounded-full hover:bg-destructive/10 transition-all duration-300 hover:scale-105"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <motion.div 
                    className="relative mx-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <div className="w-40 h-40 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 transition-transform">
                      <img 
                        src="/lovable-uploads/60f04428-3a13-4400-8c9e-716bddf25da5.png" 
                        alt="Paras Gunjavate" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <motion.div 
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium"
                      initial={{ y: 5, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Available for Work
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold mt-4">Paras Gunjavate</h2>
                    <p className="text-muted-foreground">Computer Engineering Student</p>
                  </motion.div>
                </div>
                
                <div className="md:col-span-2 space-y-8">
                  <motion.div 
                    className="bg-muted/30 rounded-xl p-6 backdrop-blur-sm border border-primary/10 shadow-sm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      About Me
                      <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      B.Tech student in Computer Engineering with a passion for creating elegant solutions through innovative technology.
                      Currently focused on developing web applications and exploring artificial intelligence.
                    </p>
                  </motion.div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div 
                      className="bg-muted/30 rounded-xl p-6 backdrop-blur-sm border border-primary/10 shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
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
                    </motion.div>
                    
                    <motion.div 
                      className="bg-muted/30 rounded-xl p-6 backdrop-blur-sm border border-primary/10 shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        Skills
                        <div className="h-px flex-1 bg-border" />
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {["React", "TypeScript", "Node.js", "TailwindCSS", "Python", "Git"].map((skill, index) => (
                          <motion.div 
                            key={skill}
                            className="py-1.5 px-3 bg-primary/10 rounded-md text-sm font-medium text-primary-foreground/90 hover:bg-primary/20 transition-colors"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="bg-muted/30 rounded-xl p-6 backdrop-blur-sm border border-primary/10 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                      Contact Information
                      <div className="h-px flex-1 bg-border" />
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <motion.a
                          href="mailto:parasgunjavate522@gmail.com"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors"
                          whileHover={{ scale: 1.02, x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <Mail className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Email</p>
                            <p className="text-sm text-muted-foreground">parasgunjavate522@gmail.com</p>
                          </div>
                        </motion.a>
                        
                        <motion.a
                          href="tel:+919356610087"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors"
                          whileHover={{ scale: 1.02, x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <Phone className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Phone</p>
                            <p className="text-sm text-muted-foreground">+91 9356610087</p>
                          </div>
                        </motion.a>
                      </div>
                      
                      <div className="space-y-4">
                        <motion.div 
                          className="flex items-center gap-3 p-3"
                          whileHover={{ scale: 1.02 }}
                        >
                          <MapPin className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Location</p>
                            <p className="text-sm text-muted-foreground">Maharashtra, India</p>
                          </div>
                        </motion.div>
                        
                        <div className="flex items-center gap-4 p-3">
                          <motion.a
                            href="https://github.com/Paras045"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                            aria-label="GitHub"
                            whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <Github className="h-5 w-5" />
                          </motion.a>
                          <motion.a
                            href="https://www.linkedin.com/in/paras-gunjavate-692176219"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                            aria-label="LinkedIn"
                            whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <Linkedin className="h-5 w-5" />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
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
