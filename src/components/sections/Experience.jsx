import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "../ui/Card";
import Badge from "../ui/Badge";
import { experience } from "@/constants/data";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Experiencia Profesional
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mi trayectoria profesional y logros destacados
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />

            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`hidden md:block absolute top-6 ${
                    index % 2 === 0 ? "right-0" : "left-0"
                  } transform ${
                    index % 2 === 0 ? "translate-x-1/2" : "-translate-x-1/2"
                  } w-4 h-4 rounded-full bg-primary border-4 border-background`}
                />

                <Card className="hover:shadow-lg transition-all">
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
                          Logros destacados:
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
                        <Badge key={tech} variant="secondary">
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
