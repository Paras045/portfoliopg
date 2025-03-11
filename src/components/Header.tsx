
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigationItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12",
        scrolled
          ? "py-4 backdrop-blur-header bg-background/70 border-b border-border"
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
          
          {/* Introduction Section */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="text-sm font-medium">Introduction</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72 p-4">
              <div className="flex items-center gap-4 mb-3">
                <img 
                  src="/lovable-uploads/60f04428-3a13-4400-8c9e-716bddf25da5.png"
                  alt="Paras Gunjavate" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium">Paras Gunjavate</h4>
                  <p className="text-sm text-muted-foreground">Computer Engineering Student</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground mb-3">
                B.Tech student in Computer Engineering with a passion for creating elegant solutions through innovative technology.
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <DropdownMenuItem asChild>
                  <a 
                    href="mailto:parasgunjavate522@gmail.com"
                    className="flex items-center gap-2"
                  >
                    <span>parasgunjavate522@gmail.com</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="tel:9356610087"
                    className="flex items-center gap-2"
                  >
                    <span>9356610087</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="https://github.com/Paras045"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <span>GitHub</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="https://www.linkedin.com/in/paras-gunjavate-692176219"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <span>LinkedIn</span>
                  </a>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-header border-b border-border p-6 md:hidden animate-fade-down">
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
              
              {/* Mobile Introduction Section */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-4 mb-3">
                  <img 
                    src="/lovable-uploads/60f04428-3a13-4400-8c9e-716bddf25da5.png"
                    alt="Paras Gunjavate" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">Paras Gunjavate</h4>
                    <p className="text-xs text-muted-foreground">Computer Engineering Student</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  B.Tech student in Computer Engineering passionate about creating innovative solutions.
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <a 
                    href="mailto:parasgunjavate522@gmail.com"
                    className="text-sm py-1"
                  >
                    parasgunjavate522@gmail.com
                  </a>
                  <a 
                    href="tel:9356610087"
                    className="text-sm py-1"
                  >
                    9356610087
                  </a>
                  <div className="flex gap-4 mt-2">
                    <a 
                      href="https://github.com/Paras045"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm"
                    >
                      GitHub
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/paras-gunjavate-692176219"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
