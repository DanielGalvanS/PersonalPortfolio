import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constants/data";
import Button from "@/components/ui/Button";
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Daniel_CV.pdf';
    link.download = 'Daniel_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-5xl rounded-[2rem]",
        isScrolled || isMobileMenuOpen
          ? "bg-bento/70 dark:bg-bento-dark/70 backdrop-blur-lg border border-bento-border/50 dark:border-bento-darkBorder/50 shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="px-6 py-2">
        <div className="flex items-center justify-between h-12">
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors font-mono"
          >
            DG
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${link.id}-${i18n.language}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t(`nav.${link.id}`)}
                  </motion.span>
                </AnimatePresence>
              </button>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="ml-2 px-2 py-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md hover:bg-accent"
              aria-label="Toggle language"
              title={i18n.language === "es" ? "Switch to English" : "Cambiar a Español"}
            >
              {i18n.language === "es" ? "EN" : "ES"}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-1 p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* CV toggle*/}
            <Button variant="default" className="ml-4 rounded-full" onClick={downloadCV}>
              <span><Download className="w-4 h-4"/></span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`cv-${i18n.language}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {t('nav.downloadCV')}
                </motion.span>
              </AnimatePresence>
            </Button>
          </div>

          {/* Mobile Menu Button & Options (Reordered for visual balance) */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors border border-border rounded-md"
              aria-label="Toggle language"
            >
              {i18n.language === "es" ? "EN" : "ES"}
            </button>
            <button
              onClick={toggleTheme}
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors text-left rounded-md"
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`mobile-${link.id}-${i18n.language}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t(`nav.${link.id}`)}
                    </motion.span>
                  </AnimatePresence>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
