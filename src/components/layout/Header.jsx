import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constants/data";
import Button from "@/components/ui/Button";
import { useTranslation } from 'react-i18next';

const HoverImageLink = ({ text, imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <span
      className="relative inline-block font-medium text-foreground underline decoration-border/50 underline-offset-4 cursor-crosshair hover:text-primary transition-colors duration-300 mx-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {text}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed z-[500] pointer-events-none rounded-xl overflow-hidden shadow-2xl border border-white/10"
            style={{
              left: mousePos.x + 20,
              top: mousePos.y - 100,
              width: "200px",
              height: "200px"
            }}
          >
            <img src={imageSrc} alt={text} className="w-full h-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProfileImgOpen, setIsProfileImgOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const { t, i18n } = useTranslation();



  // Watch for overlay open/close via data attribute
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsOverlayOpen(document.documentElement.hasAttribute('data-overlay'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-overlay'] });
    return () => observer.disconnect();
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

  const glassStyle = isOverlayOpen
    ? "rounded-full bg-white/60 backdrop-blur-2xl border border-white/30 shadow-sm"
    : "rounded-full border border-transparent";

  return (
    <header
      className="fixed top-0 left-0 w-full z-[300] py-4 pointer-events-none"
    >
      <nav className="container-custom pointer-events-auto">
        <div className="flex items-center justify-between h-12">
          <button
            onClick={() => scrollToSection("home")}
            className={cn(
              "text-lg font-semibold hover:text-foreground transition-all duration-300 font-mono px-4 py-2",
              isOverlayOpen ? "text-foreground/80" : "text-foreground",
              glassStyle
            )}
          >
            DG
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            {/* Nav links group */}
            <div className={cn(
              "flex items-center gap-1 px-2 py-1.5 transition-all duration-300",
              glassStyle
            )}>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors font-medium px-3 py-1.5 rounded-full hover:bg-white/40"
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
                className="text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors font-medium px-3 py-1.5 rounded-full hover:bg-white/40"
              >
                About
              </button>
            </div>

            {/* CV button */}
            <button
              className={cn(
                "group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-foreground/70 hover:text-foreground transition-all duration-300 px-4 py-2.5",
                glassStyle
              )}
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
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[400] pointer-events-auto"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[90%] md:w-[450px] lg:w-[500px] h-full bg-background border-l border-border z-[401] flex flex-col p-8 lg:p-12 overflow-y-auto pointer-events-auto"
            >
              <div className="flex justify-between items-center mb-12 shrink-0">
                <div className="w-12 h-12 relative flex-shrink-0 cursor-pointer" onClick={() => setIsProfileImgOpen(true)}>
                  <img
                    src="/About/A2.jpeg"
                    alt="Daniel"
                    draggable="false"
                    className="w-full h-full rounded-full object-cover object-bottom hover:scale-105 transition-transform"
                  />
                </div>
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
                  {t("about.greeting", { defaultValue: "Hi, I'm a software engineer based in the beautiful city of Monterrey, México." })}
                </h2>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Computer Science student at Tecnológico de Monterrey with experience in full stack development. I'm passionate about building innovative solutions that make a real impact. I strive to bridge functional design with robust architecture.
                </p>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Outside of coding, one of the things I enjoy most about life is <HoverImageLink text="music" imageSrc="/About/A4.jpeg" />. I love the concept of how several individual parts, when put together, create something beautiful. I also enjoy <HoverImageLink text="hiking" imageSrc="/About/A6.jpeg" />, <HoverImageLink text="traveling" imageSrc="/About/A1.jpeg" />, and exploring new ideas.
                </p>

                <div className="mt-8 border-t border-border/10 pt-8">
                  <h3 className="text-xl font-sans mb-4 text-foreground/80">
                    {t("about.experienceTitle", { defaultValue: "Key Experience" })}
                  </h3>
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Most recently, I worked as a Software Engineer Intern at <strong className="font-semibold text-foreground/90">The Home Depot</strong>, engineering production modules for a Store Management System serving 140+ locations using C#/.NET, React, and SQL Server.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Passionate about building innovative products, I won <strong className="font-semibold text-foreground/90">1st place in the Kia Motors Innovation Challenge</strong>. My experience spans across full-stack web development and native mobile apps using React Native and Swift, building scalable cloud architectures and integrating AI capabilities to create complete user experiences.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Full Screen Profile Image Viewer */}
      <AnimatePresence>
        {isProfileImgOpen && (
          <div className="fixed inset-0 z-[500] flex items-center justify-center pointer-events-auto cursor-default">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={() => setIsProfileImgOpen(false)}
            />
            <button
              onClick={() => setIsProfileImgOpen(false)}
              className="absolute top-6 right-6 lg:top-10 lg:right-10 px-6 py-2 rounded-full border border-white/20 text-sm font-sans text-white hover:bg-white/10 transition-colors z-10"
            >
              Close
            </button>
            <motion.img
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              src="/About/A2.jpeg"
              alt="Daniel Details"
              draggable="false"
              className="w-[80vw] sm:w-[50vw] md:w-[40vw] max-w-[450px] aspect-square object-cover object-bottom rounded-full shadow-2xl cursor-default border-4 border-background/20 relative z-10 m-0"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking the image itself
            />
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
