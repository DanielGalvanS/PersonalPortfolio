import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "../ui/Card";
import Badge from "../ui/Badge";
import { cn } from "@/lib/utils";
import { experience as experienceTech } from "@/constants/data";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const experienceJobs = t('experience.jobs', { returnObjects: true });

  // Combinar datos traducidos con tecnologías de data.js
  const experience = experienceJobs.map((job, index) => ({
    ...job,
    technologies: experienceTech[index]?.technologies || [],
    id: index + 1,
  }));

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Bento Grid layout instead of timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={cn(
                  "col-span-1",
                  index === 0 && "md:col-span-2" // First item spans full width
                )}
              >
                <Card className="h-full flex flex-col bg-bento/40 dark:bg-bento-dark/40 border-bento-border dark:border-bento-darkBorder hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">
                            {job.position}
                          </h3>
                          <p className="text-primary font-semibold">
                            {job.company}
                          </p>
                        </div>
                        <Briefcase className="w-6 h-6 text-primary flex-shrink-0" />
                      </div>

                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">
                      {job.description}
                    </p>

                    {/* Achievements */}
                    {job.achievements && job.achievements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2">
                          {t('experience.achievements')}
                        </h4>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-primary mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-background/50 backdrop-blur-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
