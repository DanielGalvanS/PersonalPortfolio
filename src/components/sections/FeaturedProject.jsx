import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Sparkles, Brain, Smartphone, Award } from "lucide-react";

export default function FeaturedProject() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const mockupsRef = useRef(null);

  // Añadir un glow sutil que se adapte al tema
  const glowColor = "rgba(236, 72, 153, 0.15)"; // pink con transparencia

  const { scrollYProgress } = useScroll({
    target: mockupsRef,
    offset: ["start center", "end center"]
  });

  // Control de transición entre mockups (más suave)
  const mockup1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0]);
  const mockup1Scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const mockup1Y = useTransform(scrollYProgress, [0, 0.5], [0, -30]);

  const mockup2Opacity = useTransform(scrollYProgress, [0.4, 0.6, 1], [0, 1, 1]);
  const mockup2Scale = useTransform(scrollYProgress, [0.4, 0.6], [1.05, 1]);
  const mockup2Y = useTransform(scrollYProgress, [0.4, 0.6], [30, 0]);

  const features = [
    {
      icon: Brain,
      title: t("featuredProject.feature1.title"),
      description: t("featuredProject.feature1.description"),
    },
    {
      icon: Sparkles,
      title: t("featuredProject.feature2.title"),
      description: t("featuredProject.feature2.description"),
    },
    {
      icon: Smartphone,
      title: t("featuredProject.feature3.title"),
      description: t("featuredProject.feature3.description"),
    },
  ];

  return (
    <section ref={containerRef} className="relative bg-background py-20 md:py-32">
      {/* Contenedor con altura para scroll */}
      <div>
        {/* Contenido sticky */}
        <div className="sticky top-20 md:top-24 pb-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center">

              {/* Columna izquierda - Texto */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    <Award className="w-4 h-4" />
                    <span>{t("featuredProject.badge")}</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                    Horno 3
                  </h2>

                  <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                    {t("featuredProject.subtitle")}
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("featuredProject.description")}
                  </p>
                </motion.div>

                {/* Features */}
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {["SwiftUI", "Core ML", "GPT-4", "Supabase", "Next.js"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Columna derecha - Mockups */}
              <div ref={mockupsRef} className="relative h-[500px] md:h-[600px] flex items-center justify-center mt-8 lg:mt-0">

                {/* Glow de fondo adaptativo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-[300px] h-[300px] rounded-full blur-[120px] opacity-40"
                    style={{
                      background: `radial-gradient(circle, ${glowColor}, transparent)`
                    }}
                  />
                </div>

                {/* Mockup 1 - Splash Screen */}
                <motion.div
                  style={{
                    opacity: mockup1Opacity,
                    scale: mockup1Scale,
                    y: mockup1Y
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative">
                    {/* Sombra adaptativa al tema */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 rounded-[40px]" />
                    <img
                      src="/horno3-splash.JPG"
                      alt="Horno 3 Splash Screen"
                      className="h-[400px] md:h-[500px] lg:h-[550px] w-auto rounded-[30px] md:rounded-[40px] shadow-2xl dark:shadow-pink-500/10 transition-shadow duration-300"
                      style={{
                        filter: "contrast(1.05) saturate(1.1)"
                      }}
                    />
                  </div>
                </motion.div>

                {/* Mockup 2 - Home Screen */}
                <motion.div
                  style={{
                    opacity: mockup2Opacity,
                    scale: mockup2Scale,
                    y: mockup2Y
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative">
                    {/* Sombra adaptativa al tema */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 rounded-[40px]" />
                    <img
                      src="/horno3-home.JPG"
                      alt="Horno 3 Home Screen"
                      className="h-[400px] md:h-[500px] lg:h-[550px] w-auto rounded-[30px] md:rounded-[40px] shadow-2xl dark:shadow-pink-500/10 transition-shadow duration-300"
                      style={{
                        filter: "contrast(1.05) saturate(1.1)"
                      }}
                    />
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
