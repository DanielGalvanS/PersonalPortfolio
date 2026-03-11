import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ExternalLink, Github } from "lucide-react";
import { personalInfo, projects } from "@/constants/data";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const wrapperRef = useRef(null);
  const hasScrolledUp = useRef(false);

  // Reset state when overlay opens
  useEffect(() => {
    if (selectedProject) {
      hasScrolledUp.current = false;
      if (wrapperRef.current) {
        wrapperRef.current.scrollTop = 0;
      }
    }
  }, [selectedProject]);

  const handleScroll = () => {
    const el = wrapperRef.current;
    if (!el) return;
    const spacerHeight = window.innerHeight * 0.5;

    // Once user has scrolled up significantly (panel covers >50% of screen), arm the dismiss
    if (el.scrollTop > spacerHeight * 0.5) {
      hasScrolledUp.current = true;
    }

    // Only dismiss if user was scrolled up and then scrolled back down past threshold
    if (hasScrolledUp.current && el.scrollTop < spacerHeight * 0.2) {
      setSelectedProject(null);
      hasScrolledUp.current = false;
    }
  };

  return (
    <section className="relative h-full w-full flex flex-col lg:flex-row overflow-hidden bg-background">

      {/* LEFT PANEL – always shows name / portrait / bio */}
      <div className="relative w-full lg:w-[60%] h-[50vh] lg:h-full border-b lg:border-b-0 lg:border-r border-border/10 overflow-hidden bg-background">
        <motion.div
          className="absolute inset-0 w-full h-full flex flex-col justify-between p-6 lg:p-12 z-10 overflow-hidden bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Top: Header / Name */}
          <div className="w-full z-10 select-none mt-12 lg:mt-24">
            <h1 className="text-[16vw] lg:text-[9vw] font-serif leading-[0.85] tracking-tighter text-foreground uppercase">
              DANIEL
            </h1>
            <h1 className="text-[16vw] lg:text-[9vw] font-serif leading-[0.85] tracking-tighter text-foreground uppercase ml-12 lg:ml-32">
              GALVÁN
            </h1>
          </div>

          {/* Bottom: Portrait & Bio */}
          <div className="w-full flex items-end justify-start gap-8 lg:gap-16 mt-auto z-20 pb-4 lg:pb-0">
            <img
              src="/daniel-optimized.webp"
              alt="Daniel Galván"
              className="w-[140px] lg:w-[220px] h-auto object-contain grayscale pointer-events-none drop-shadow-2xl"
            />
            <div className="text-left max-w-[240px] lg:max-w-[320px]">
              <p className="text-[10px] lg:text-xs font-bold tracking-widest uppercase mb-2 text-foreground">
                {t("hero.greeting")} {personalInfo.title}
              </p>
              <p className="text-[10px] lg:text-xs text-muted-foreground/90 leading-relaxed">
                {t("hero.bio")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT PANEL – Project List */}
      <div className="relative w-full lg:w-[40%] h-[50vh] lg:h-full flex flex-col justify-center px-6 lg:px-16 bg-background z-20 overflow-y-auto">
        <div className="mb-8 lg:mb-16">
          <h2 className="text-[10px] lg:text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground/60 mb-2">
            Work Index
          </h2>
          <h3 className="text-base lg:text-xl font-bold uppercase tracking-widest text-foreground">
            Selected Projects
          </h3>
        </div>

        <div className="flex flex-col w-full border-t border-border/10">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative flex items-center justify-between py-6 lg:py-8 cursor-pointer overflow-hidden"
            >
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-border/60 z-0"></span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground transition-all duration-500 ease-out group-hover:w-full z-10"></span>

              <div className="relative z-10 flex flex-col items-start transition-all duration-300 group-hover:translate-x-4">
                <span className="text-xl lg:text-2xl font-sans tracking-tight text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  {project.title.split(" – ")[0]}
                </span>
              </div>

              <div className="relative z-10 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECT OVERLAY — scrollable full-page with spacer */}
      {createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              key="project-overlay"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed inset-0 z-[200]"
            >
              {/* Scrollable wrapper: spacer + content = free Y scroll */}
              <div
                ref={wrapperRef}
                onScroll={handleScroll}
                className="w-full h-full overflow-y-scroll no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {/* Transparent spacer: 50vh — panel appears at mid-screen */}
                <div className="w-full" style={{ height: "50vh" }} />

                {/* Project content panel */}
                <motion.div
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative bg-background rounded-t-2xl shadow-[0_-8px_40px_rgba(0,0,0,0.15)] min-h-screen"
                >
                  {/* Close bar */}
                  <div className="sticky top-0 w-full px-6 lg:px-16 py-5 flex items-center justify-between z-50 bg-background/95 backdrop-blur-sm border-b border-border/10 rounded-t-2xl">
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      {selectedProject.title.split(" – ")[0]}
                    </span>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X className="w-4 h-4" /> Close
                    </button>
                  </div>

                  {/* Content */}
                  <div className="px-6 lg:px-24 pt-12 pb-32 max-w-5xl mx-auto">

                    {/* Hero image */}
                    <div className="w-full aspect-[16/9] overflow-hidden mb-16 bg-foreground/5">
                      <img
                        src={selectedProject.image || "/FigmaFundidora.png"}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Meta row */}
                    <div className="flex flex-wrap gap-x-12 gap-y-4 mb-12 pb-12 border-b border-border/10">
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Project</p>
                        <p className="text-sm font-sans text-foreground">{selectedProject.title.split(" – ")[0]}</p>
                      </div>
                      {selectedProject.role && (
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Role</p>
                          <p className="text-sm font-sans text-foreground">{selectedProject.role}</p>
                        </div>
                      )}
                      {selectedProject.year && (
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Year</p>
                          <p className="text-sm font-sans text-foreground">{selectedProject.year}</p>
                        </div>
                      )}
                    </div>

                    {/* Title + Description */}
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                      <div className="lg:w-1/2">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-[1.1] mb-8">
                          {selectedProject.title}
                        </h1>
                        <div className="flex gap-4 flex-wrap">
                          {selectedProject.githubUrl && (
                            <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest border border-border/30 px-4 py-2 hover:bg-foreground hover:text-background transition-all">
                              <Github className="w-3.5 h-3.5" /> GitHub
                            </a>
                          )}
                          {selectedProject.galleryUrl && (
                            <a href={selectedProject.galleryUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest border border-border/30 px-4 py-2 hover:bg-foreground hover:text-background transition-all">
                              <ExternalLink className="w-3.5 h-3.5" /> Live
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="lg:w-1/2 flex flex-col gap-8">
                        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                          {selectedProject.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 text-xs font-mono uppercase bg-foreground/5 border border-border/20 text-muted-foreground">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </section>
  );
}
