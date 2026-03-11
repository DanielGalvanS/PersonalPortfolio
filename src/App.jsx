import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import CustomCursor from "@/components/ui/CustomCursor";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const { i18n } = useTranslation();

  return (
    <div className="h-screen w-screen overflow-hidden bg-background text-foreground transition-colors duration-300 flex flex-col justify-between">
      <CustomCursor />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={i18n.language}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-grow flex flex-col relative"
        >
          <Hero />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
