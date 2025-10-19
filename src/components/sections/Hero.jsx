import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Button from "../ui/Button";
import { personalInfo, socialLinks } from "@/constants/data";
import { useTranslation } from 'react-i18next';
import Typeanimation from '@/components/ui/typeanimation';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t("hero.whatsappMessage"));
    window.open(`https://wa.me/${personalInfo.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding pt-24"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-primary font-medium mb-2">{t("hero.greeting")}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                {personalInfo.name}
              </h1>
              
              <Typeanimation
                words={['Software Engineer', 'Full Stack Developer', 'React Developer', 'UI/UX Designer', 'Mobile Developer']}
                typingSpeed="slow"
                deletingSpeed="slow"
                pauseDuration={2000}
                gradientColors="linear-gradient(to right, #ec4899, #a855f7, #6366f1)"
                className="text-3xl md:text-5xl font-extrabold"
              />
              
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-xl"
            >
              {t("hero.bio")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="gap-2"
              >
                {t("hero.viewProjects")}
                <ArrowDown className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <Mail className="w-4 h-4" />
                {t("hero.contactMe")}
              </Button>
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                size="lg"
                className="gap-2 bg-green-500 text-white hover:bg-green-600 border-green-500"
              >
                <MessageCircle className="w-4 h-4" />
                {t("hero.whatsapp")}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="relative w-[400px] h-[400px] -mt-28">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl" />
              <div className="relative w-full rounded-full overflow-hidden border-4 border-border bg-accent flex items-center justify-center">
              <img
                src="/daniel.webp"
                loading="eager"      
                fetchpriority="high"   
                decoding="async"       
              />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-1 w-20 h-20 bg-secondary rounded-lg flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
              >
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center"
                  aria-label="GitHub"
                >
                  <Github className="w-8 h-8" />
                </a>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-48 -left-1 w-20 h-20 bg-secondary rounded-lg flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
              >
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
