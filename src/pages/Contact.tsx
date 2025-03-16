
import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Insert the message into our Supabase database
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          }
        ]);
        
      if (error) throw error;
      
      // Reset the form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Show success message
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary text-primary-foreground mb-4">
              Contact
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to connect? Feel free to reach out.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/20">
                  <img 
                    src="/lovable-uploads/60f04428-3a13-4400-8c9e-716bddf25da5.png" 
                    alt="Paras Gunjavate" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>
                <div className="space-y-6">
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
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mt-1 mr-3 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">
                        Maharashtra, India
                      </p>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-primary/5 border-primary/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-primary/5 border-primary/10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-primary/5 border-primary/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-primary/5 border-primary/10 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full py-6 bg-foreground text-background hover:bg-foreground/90 transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
