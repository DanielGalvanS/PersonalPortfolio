import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "../ui/Card";
import { FlowingLogos } from "../ui/flowing-logos";
import { skills } from "@/constants/data";
import { useTranslation } from 'react-i18next';

const SkillBar = ({ skill, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={`https://svgl.app/library/${skill.icon}.svg`}
            alt={skill.name}
            className="w-5 h-5"
          />
          <span className="font-medium text-sm">{skill.name}</span>
        </div>
        <span className="text-xs text-muted-foreground font-medium">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState("frontend");

  const tabs = [
    { id: "frontend", label: t('skills.frontend') },
    { id: "backend", label: t('skills.backend') },
    { id: "tools", label: t('skills.tools') },
  ];

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex gap-2 p-1 bg-muted rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {skills[activeTab].map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">
                {t('skills.alwaysLearning')}
              </h3>
              <p className="text-muted-foreground">
                {t('skills.alwaysLearningDesc')}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tech Stack Overview - Flowing Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 w-full overflow-x-hidden"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            {t('skills.techStack')}
          </h3>
          <FlowingLogos
            data={Object.values(skills)
              .flat()
              .map((skill) => ({
                name: skill.name,
                image: `https://svgl.app/library/${skill.icon}.svg`,
              }))}
            className="mt-6 w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
