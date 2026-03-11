import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";

const FeaturedProject = lazy(() => import("@/components/sections/FeaturedProject"));
const About = lazy(() => import("@/components/sections/About"));
const Experience = lazy(() => import("@/components/sections/Experience"));
const Projects = lazy(() => import("@/components/sections/Projects"));
const Skills = lazy(() => import("@/components/sections/Skills"));
const Contact = lazy(() => import("@/components/sections/Contact"));
import { Analytics } from "@vercel/analytics/react";

function App() {
  const { i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={i18n.language}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Hero />
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div></div>}>
            <FeaturedProject />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </Suspense>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
