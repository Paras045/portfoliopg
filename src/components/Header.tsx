
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import IntroductionModal from "./IntroductionModal";
import ThemeToggle from "./ThemeToggle";

const navigationItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [introModalOpen, setIntroModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleOpenIntroModal = () => {
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    // Open introduction modal
    setIntroModalOpen(true);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12",
        scrolled
          ? "py-4 backdrop-blur-header bg-background/70 dark:bg-background/60 border-b border-border"
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-medium tracking-tight relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-foreground after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center"
        >
          Paras Gunjavate
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-foreground after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center",
                location.pathname === item.path && "after:scale-x-100"
              )}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Theme Toggle Button */}
          <ThemeToggle />
          
          {/* Introduction Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-2 bg-primary/5 hover:bg-primary/10 transition-colors"
            onClick={handleOpenIntroModal}
          >
            <User className="h-4 w-4" />
            <span className="text-sm font-medium">Introduction</span>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-primary/5 hover:bg-primary/10 transition-colors"
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 dark:bg-background/90 backdrop-blur-header border-b border-border p-6 md:hidden animate-fade-down">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "text-sm font-medium py-2 px-4 rounded-md transition-colors",
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Introduction Button */}
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2 justify-start"
                onClick={handleOpenIntroModal}
              >
                <User className="h-4 w-4" />
                <span className="text-sm font-medium">Introduction</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
      
      {/* Introduction Modal */}
      <IntroductionModal 
        isOpen={introModalOpen} 
        onClose={() => setIntroModalOpen(false)} 
      />
    </header>
  );
};

export default Header;
