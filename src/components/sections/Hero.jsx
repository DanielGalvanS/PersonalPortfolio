import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clapperboard, ExternalLink, Github, Images, X } from "lucide-react";
import { personalInfo, projects } from "@/constants/data";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const wrapperRef = useRef(null);
  const hasScrolledUp = useRef(false);
  const imgRefs = useRef([]);

  useEffect(() => {
    if (selectedProject) {
      hasScrolledUp.current = false;
      setIsGalleryOpen(false);
      setActiveImg(0);
      document.documentElement.setAttribute('data-overlay', 'true');
      if (wrapperRef.current) wrapperRef.current.scrollTop = 0;
    } else {
      document.documentElement.removeAttribute('data-overlay');
      setIsGalleryOpen(false);
    }
  }, [selectedProject]);

  // Escape key closes gallery
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") { setIsGalleryOpen(false); setIsVideoModalOpen(false); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // IntersectionObserver: update active thumbnail as user scrolls gallery
  useEffect(() => {
    if (!isGalleryOpen || !selectedProject?.gallery) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.idx);
            setActiveImg(idx);
          }
        });
      },
      { threshold: 0.4 }
    );

    imgRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, [isGalleryOpen, selectedProject]);


  const handleScroll = () => {
    const el = wrapperRef.current;
    if (!el || isGalleryOpen) return;
    const spacerHeight = window.innerHeight * 0.5;

    if (el.scrollTop > spacerHeight * 0.5) hasScrolledUp.current = true;

    if (hasScrolledUp.current && el.scrollTop < spacerHeight * 0.2) {
      setSelectedProject(null);
      hasScrolledUp.current = false;
    }
  };

  const scrollToImg = (idx) => {
    const el = imgRefs.current[idx];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative h-full w-full flex flex-col lg:flex-row overflow-hidden bg-background">

      {/* LEFT PANEL */}
      <div className="relative w-full lg:w-[60%] h-[50vh] lg:h-full border-b lg:border-b-0 lg:border-r border-border/10 overflow-hidden bg-background">
        <motion.div
          className="absolute inset-0 w-full h-full flex flex-col justify-between p-6 lg:p-12 z-10 overflow-hidden bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full z-10 select-none mt-12 lg:mt-24">
            <h1 className="text-[16vw] lg:text-[9vw] font-serif leading-[0.85] tracking-tighter text-foreground uppercase">
              DANIEL
            </h1>
            <h1 className="text-[16vw] lg:text-[9vw] font-serif leading-[0.85] tracking-tighter text-foreground uppercase ml-12 lg:ml-32">
              GALVÁN
            </h1>
          </div>
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
          {projects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => { setSelectedProject(project); setSelectedIndex(idx); }}
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

      {/* PROJECT OVERLAY */}
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
              <div
                ref={wrapperRef}
                onScroll={handleScroll}
                className="w-full h-full overflow-y-scroll"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div className="w-full" style={{ height: "50vh" }} />
                <motion.div
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative bg-neutral-950 shadow-[0_-8px_40px_rgba(0,0,0,0.4)] min-h-screen"
                >
                  <div className="px-6 lg:px-16 pt-20 pb-32 w-full">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16 lg:mb-24">
                      <div className="flex-1 max-w-2xl">
                        <p className="text-sm font-mono text-neutral-500 mb-8">
                          <span className="text-white">{String(selectedIndex + 1).padStart(2, '0')}</span>
                          <span> / {String(projects.length).padStart(2, '0')}</span>
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif tracking-tight text-white leading-[1.1] mb-12">
                          {selectedProject.title}
                        </h1>
                        <div className="flex flex-wrap gap-x-16 gap-y-4">
                          <div>
                            <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1">Project</p>
                            <p className="text-sm font-sans text-white">{selectedProject.title.split(" – ")[0]}</p>
                          </div>
                          {selectedProject.role && (
                            <div>
                              <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1">Role</p>
                              <p className="text-sm font-sans text-white">{selectedProject.role}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-row lg:flex-col flex-wrap gap-2 lg:items-end lg:pt-16">
                        {selectedProject.technologies.map((tech) => (
                          <span key={tech} className="px-4 py-1.5 text-[11px] font-mono uppercase tracking-wider border border-white/20 rounded-full text-white">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {Array.isArray(selectedProject.image) ? (
                      <div className="w-full aspect-[16/9] grid grid-cols-2 gap-4 mb-20">
                        {selectedProject.image.map((imgSrc, idx) => (
                          <div key={idx} className="w-full h-full overflow-hidden bg-white/5 rounded-sm">
                            <img
                              src={imgSrc}
                              alt={`${selectedProject.title} ${idx + 1}`}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="w-full aspect-[16/9] overflow-hidden bg-white/5 rounded-sm mb-20">
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div className="max-w-5xl mx-auto">
                      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-12">
                        <div className="lg:w-3/5">
                          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-4">Overview</p>
                          <p className="text-base lg:text-lg text-neutral-300 leading-relaxed">
                            {selectedProject.description}
                          </p>
                        </div>
                        <div className="lg:w-2/5 flex flex-col gap-4">
                          <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1">Links</p>
                          <div className="flex gap-3 flex-wrap">
                            {selectedProject.githubUrl && (
                              <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest border border-white/20 text-neutral-300 px-5 py-2.5 rounded-full hover:bg-white hover:text-neutral-950 transition-all">
                                <Github className="w-3.5 h-3.5" /> GitHub
                              </a>
                            )}
                            {selectedProject.galleryUrl && (
                              <a href={selectedProject.galleryUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest border border-white/20 text-neutral-300 px-5 py-2.5 rounded-full hover:bg-white hover:text-neutral-950 transition-all">
                                <ExternalLink className="w-3.5 h-3.5" /> Live
                              </a>
                            )}
                            {selectedProject.gallery?.length > 0 && (
                              <button
                                onClick={() => selectedProject.galleryLabel ? setIsVideoModalOpen(true) : setIsGalleryOpen(true)}
                                className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest border border-white/20 text-neutral-300 px-5 py-2.5 rounded-full hover:bg-white hover:text-neutral-950 transition-all"
                              >
                                {selectedProject.galleryLabel
                                  ? <Clapperboard className="w-3.5 h-3.5" />
                                  : <Images className="w-3.5 h-3.5" />
                                }
                                {selectedProject.galleryLabel || "Gallery"}
                              </button>
                            )}
                          </div>
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

      {/* GALLERY PAGE */}
      {createPortal(
        <AnimatePresence>
          {isGalleryOpen && selectedProject?.gallery && (
            <motion.div
              key="gallery-page"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed inset-0 z-[350] bg-neutral-950 flex"
            >
              {/* MAIN SCROLL AREA */}
              <div
                className="flex-1 overflow-y-auto"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {/* Header */}
                <div className="sticky top-0 z-10 bg-neutral-950/90 backdrop-blur-sm border-b border-white/10 px-8 lg:px-14 py-5 flex items-center justify-between">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                    {selectedProject.title.split(" – ")[0]} — Gallery
                  </p>
                  <button
                    onClick={() => setIsGalleryOpen(false)}
                    className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white hover:border-white/50 transition-all"
                  >
                    <X className="w-3 h-3" /> Close
                  </button>
                </div>

                {/* Grid — foto izquierda, info derecha */}
                <div className="py-12 flex flex-col divide-y divide-white/[0.06]">
                  {selectedProject.gallery.map((item, i) => (
                    <div
                      key={i}
                      ref={(el) => (imgRefs.current[i] = el)}
                      data-idx={i}
                      className="flex flex-row items-stretch py-0"
                    >
                      {/* Foto o Video */}
                      <div className="flex-1 flex items-center justify-center px-8 lg:px-14 py-16 bg-neutral-950">
                        {item.type === 'youtube' ? (
                          <div className="w-full max-w-4xl aspect-video rounded-sm overflow-hidden shadow-2xl">
                            <iframe 
                              width="100%" 
                              height="100%" 
                              src={item.src} 
                              title={item.caption}
                              frameBorder="0" 
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowFullScreen
                            ></iframe>
                          </div>
                        ) : (
                          <img
                            src={item.src}
                            alt={item.caption}
                            className="max-h-[75vh] max-w-full w-auto h-auto rounded-sm"
                          />
                        )}
                      </div>

                      {/* Info lateral */}
                      <div className="w-[180px] lg:w-[220px] shrink-0 border-l border-white/[0.06] flex flex-col justify-between px-6 py-10">
                        <div>
                          <p className="text-[10px] font-mono tracking-[0.2em] mb-3">
                            <motion.span
                              animate={{ color: activeImg === i ? "#ffffff" : "#404040" }}
                              transition={{ duration: 0.3 }}
                            >
                              {String(i + 1).padStart(2, '0')}
                            </motion.span>
                            <span className="text-neutral-700"> / {String(selectedProject.gallery.length).padStart(2, '0')}</span>
                          </p>
                          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 leading-relaxed">
                            {item.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* VIDEO MODAL */}
      {createPortal(
        <AnimatePresence>
          {isVideoModalOpen && selectedProject?.gallery?.[0]?.type === 'youtube' && (
            <motion.div
              key="video-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[400] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
              onClick={() => setIsVideoModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-4xl aspect-video rounded-sm overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedProject.gallery[0].src}
                  title={selectedProject.gallery[0].caption}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="absolute top-3 right-3 flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/20 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white hover:border-white/50 transition-all"
                >
                  <X className="w-3 h-3" /> Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </section>
  );
}
