import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { projects } from "@/constants/data";
import { ExternalLink, Github, Filter } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [filter, setFilter] = useState("all");

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Una selección de proyectos en los que he trabajado
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
                {category === "all" ? "Todos" : category}
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
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-purple-500/20 overflow-hidden">
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge variant="default">Destacado</Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                    {/* Pendiente */}
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary hover:scale-110 transition-transform"
                        aria-label="Ver demo"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary hover:scale-110 transition-transform"
                        aria-label="Ver código"
                      >
                        <Github className="w-6 h-6" />
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
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo en vivo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                      >
                        <Github className="w-4 h-4" />
                        Ver código
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
              No hay proyectos en esta categoría.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
