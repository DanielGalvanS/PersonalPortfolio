import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { projects as projectsData } from "@/constants/data";
import { ExternalLink, Github, Filter, Images, Shield } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const [filter, setFilter] = useState("all");

  const projectsList = t('projects.list', { returnObjects: true });

  // Combinar datos traducidos con información técnica de data.js
  const projects = projectsData.map((project, index) => ({
    ...project,
    title: projectsList[index]?.title || project.title,
    description: projectsList[index]?.description || project.description,
  }));

  const categories = ["all", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-accent/50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('projects.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {t('projects.subtitle')}
          </p>

          {/* Filter Buttons */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category)}
                className="capitalize"
              >
                {category === "all" ? t('projects.all') : category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all group">
                {/* Project Image */}
                <div className={`relative h-48 overflow-hidden ${
                  project.image
                    ? 'bg-gradient-to-br from-primary/20 to-purple-500/20'
                    : 'bg-gradient-to-br from-slate-900/90 to-slate-700/90 dark:from-slate-800 dark:to-slate-950'
                }`}>
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge variant="default">{t('projects.featured')}</Badge>
                    </div>
                  )}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Shield className="w-24 h-24 text-foreground/20" strokeWidth={1} />
                    </div>
                  )}
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition-transform"
                        aria-label="Ver repositorio"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    )}
                    {project.galleryUrl && (
                      <a
                        href={project.galleryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition-transform"
                        aria-label="Ver galería de fotos"
                      >
                        <Images className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                      >
                        <Github className="w-4 h-4" />
                        {t('projects.repository')}
                      </a>
                    )}
                    {project.galleryUrl && (
                      <a
                        href={project.galleryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                      >
                        <Images className="w-4 h-4" />
                        {t('projects.gallery')}
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {t('projects.noProjects')}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
