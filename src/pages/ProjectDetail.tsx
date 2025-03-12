
import React from "react";
import { useParams, Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  tags: string[];
  features: { title: string; description: string }[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projectsData: ProjectData[] = [
  {
    id: "e-commerce",
    title: "E-commerce Website",
    description: "A modern e-commerce platform with secure checkout and payment integration.",
    longDescription: "A comprehensive e-commerce solution that allows users to browse products, add items to cart, and complete purchases securely. The platform includes features like user authentication, product search, secure payment processing, and order tracking.",
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1024",
    gallery: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1024",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1024",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1024"
    ],
    tags: ["React", "TypeScript", "Supabase", "TailwindCSS"],
    features: [
      {
        title: "Product Listings",
        description: "Browse a wide range of products with detailed descriptions and high-quality images."
      },
      {
        title: "Shopping Cart",
        description: "Add products to your cart, update quantities, and see real-time price calculations."
      },
      {
        title: "Secure Checkout",
        description: "Complete your purchase with our secure payment processing system."
      },
      {
        title: "User Accounts",
        description: "Create an account to save your shipping information and track order history."
      }
    ],
    technologies: ["React", "TypeScript", "Supabase", "TailwindCSS", "Stripe", "React Query"],
    liveUrl: "https://buytrix.lovable.app/",
    githubUrl: "https://github.com"
  },
  {
    id: "farming-ai",
    title: "Farming with AI",
    description: "AI-powered platform providing insights for improved farming efficiency.",
    longDescription: "An innovative platform that leverages artificial intelligence to help farmers optimize their crop yields, reduce resource usage, and make data-driven decisions. The system analyzes various factors like soil conditions, weather patterns, and crop history to provide personalized recommendations.",
    image: "https://images.unsplash.com/photo-1562051036-e0eea191d42f?q=80&w=1024",
    gallery: [
      "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=1024",
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1024",
      "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=1024"
    ],
    tags: ["Python", "TensorFlow", "React", "Node.js"],
    features: [
      {
        title: "AI-Powered Insights",
        description: "Get personalized recommendations based on soil, weather, and crop data."
      },
      {
        title: "Weather Forecasting",
        description: "Access accurate weather predictions to plan your farming activities."
      },
      {
        title: "Soil Analysis",
        description: "Monitor soil health and receive suggestions for improvement."
      },
      {
        title: "Crop Management",
        description: "Track crop growth, predict yields, and identify potential issues early."
      }
    ],
    technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB", "OpenWeather API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "A minimalist portfolio website showcasing my projects and skills.",
    longDescription: "A clean, responsive portfolio website designed to showcase my work, skills, and experience. The site features a minimalist design inspired by Apple's design philosophy, with smooth animations and transitions for an engaging user experience.",
    image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?q=80&w=1024",
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1024",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1024",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1024"
    ],
    tags: ["React", "TailwindCSS", "Framer Motion"],
    features: [
      {
        title: "Responsive Design",
        description: "The website adapts seamlessly to all devices, from mobile to desktop."
      },
      {
        title: "Project Showcase",
        description: "A gallery of my work with detailed project information and links."
      },
      {
        title: "Smooth Animations",
        description: "Engaging animations and transitions enhance the user experience."
      },
      {
        title: "Contact Form",
        description: "A simple way for visitors to get in touch with me."
      }
    ],
    technologies: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Vite"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: "task-manager",
    title: "Task Manager",
    description: "A productivity application to manage tasks and projects.",
    longDescription: "A comprehensive task management application that helps users organize their work, track progress, and collaborate with team members. The app includes features like task creation, project grouping, priority setting, due dates, and team collaboration.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1024",
    gallery: [
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1024",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1024",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1024"
    ],
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    features: [
      {
        title: "Task Organization",
        description: "Create, categorize, and prioritize tasks for better organization."
      },
      {
        title: "Progress Tracking",
        description: "Monitor progress with status updates and completion percentages."
      },
      {
        title: "Team Collaboration",
        description: "Assign tasks to team members and collaborate on projects."
      },
      {
        title: "Notifications",
        description: "Get reminders for upcoming deadlines and task updates."
      }
    ],
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
];

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-blue-500 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen pb-24">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-12 md:pb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                  {project.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                  {project.description}
                </p>
              </motion.div>
            </div>
          </div>
          <div className="absolute top-6 left-6">
            <Link to="/projects">
              <Button variant="outline" size="icon" className="bg-background/50 backdrop-blur-sm hover:bg-background/70">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 px-6 md:px-12 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Overview</h2>
                <p className="text-muted-foreground mb-8">
                  {project.longDescription}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.features.map((feature, index) => (
                    <Card key={index} className="border border-border/50 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="border border-border/50 rounded-lg p-6 bg-card/50 backdrop-blur-sm sticky top-24">
                  <h2 className="text-xl font-bold mb-6">Project Details</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-primary/70 text-primary-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {(project.liveUrl || project.githubUrl) && (
                    <div className="space-y-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full py-2 px-4 border border-foreground rounded-md text-sm font-medium transition-all hover:bg-foreground hover:text-background"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" /> View Live
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full py-2 px-4 bg-foreground text-background rounded-md text-sm font-medium transition-all hover:bg-foreground/90"
                        >
                          <Github className="mr-2 h-4 w-4" /> View Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Gallery</h2>
              <p className="text-muted-foreground">
                Visual highlights from the {project.title} project.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="rounded-lg overflow-hidden aspect-video"
                >
                  <img
                    src={image}
                    alt={`${project.title} gallery ${index + 1}`}
                    className="w-full h-full object-cover object-center transition-all hover:scale-105 duration-700"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;
