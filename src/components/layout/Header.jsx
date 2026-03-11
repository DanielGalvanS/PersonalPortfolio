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
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Daniel Resume.pdf';
    link.download = 'Daniel Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-12">
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors font-mono"
          >
            DG
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors font-medium"
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
              <button
                onClick={() => setIsAboutOpen(true)}
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors font-medium ml-4"
              >
                About
              </button>
            </div>

            <div className="flex items-center gap-4 pl-6 border-l border-border">
              {/* CV toggle*/}
              <button
                className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-foreground hover:text-primary transition-colors ml-2"
                onClick={downloadCV}
              >
                <Download className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`cv-${i18n.language}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('nav.downloadCV', { defaultValue: 'CV' })}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button & Options */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground transition-colors ml-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-8 border-t border-border mt-4 animate-fade-in bg-background h-screen">
            <div className="flex flex-col gap-6 items-center border-b border-border pb-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-2xl font-serif italic text-muted-foreground hover:text-foreground transition-colors"
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
              <button
                onClick={() => { setIsMobileMenuOpen(false); setIsAboutOpen(true); }}
                className="text-2xl font-serif italic text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
            </div>

            <div className="flex justify-center mt-8">
              <button
                className="group flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                onClick={downloadCV}
              >
                <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                <span>{t('nav.downloadCV', { defaultValue: 'Download CV' })}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* About Drawer */}
      <AnimatePresence>
        {isAboutOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAboutOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[90%] md:w-[450px] lg:w-[500px] h-full bg-background border-l border-border z-[101] flex flex-col p-8 lg:p-12 overflow-y-auto"
            >
              {/* Top bar */}
              <div className="flex justify-between items-center mb-12 shrink-0">
                <img src="/daniel-optimized.webp" alt="Daniel" className="w-12 h-12 rounded-full grayscale object-cover" />
                <button
                  onClick={() => setIsAboutOpen(false)}
                  className="px-6 py-2 rounded-full border border-border text-sm font-sans hover:bg-foreground/5 transition-colors"
                >
                  Close
                </button>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-8 text-foreground mt-8">
                <h2 className="text-2xl md:text-3xl font-sans leading-[1.3] text-foreground/90">
                  {t("about.greeting", { defaultValue: "Hola, soy ingeniero de software basado en México." })}
                </h2>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Estudiante de Ingeniería en Tecnologías Computacionales en el Tec de Monterrey con experiencia en desarrollo full stack. Me apasiona crear soluciones innovadoras que impactan positivamente en las organizaciones. Busco la convergencia entre diseño funcional y arquitectura robusta.
                </p>

                <div className="mt-8 border-t border-border/10 pt-8">
                  <h3 className="text-xl font-sans mb-4 text-foreground/80">
                    {t("about.experienceTitle", { defaultValue: "Experiencia Destacada" })}
                  </h3>
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Me especializo en crear sistemas robustos y eficientes. He trabajado en proyectos complejos desarrollando arquitecturas y soluciones con AWS, React, Python y .NET.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Siempre dispuesto a aprender algo nuevo e implementarlo en la realidad para resolver problemas reales. Fuera del código me gusta el hiking, viajar y explorar nuevas ideas.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
