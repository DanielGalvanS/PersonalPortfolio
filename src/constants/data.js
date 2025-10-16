export const navLinks = [
  { id: "home", label: "Inicio" },
  { id: "about", label: "Sobre Mí" },
  { id: "experience", label: "Experiencia" },
  { id: "projects", label: "Proyectos" },
  { id: "skills", label: "Habilidades" },
  { id: "contact", label: "Contacto" },
];

export const personalInfo = {
  name: "Daniel Galván",
  title: "Software Engineer & Full Stack Developer",
  location: "Monterrey, Nuevo León, México",
  email: "dggalvans@gmail.com",
  phone: "+52 81 2200 6817",
  whatsapp: "+528122006817",
  bio: "Estudiante de Ingenieria en Tecnologías Computacionales en el Tec de Monterrey con experiencia en desarrollo full stack. Apasionado por crear soluciones innovadoras que impactan positivamente en las organizaciones.",
  avatar: "/avatar.jpg",
  education: {
    institution: "Tecnológico de Monterrey",
    degree: "B.S. in Computer Science",
    dates: "Ago 2022 – Dic 2026",
    gpa: "3.7/4.0"
  }
};

export const socialLinks = {
  github: "https://github.com/danielgalvans",
  linkedin: "https://www.linkedin.com/in/danielgalvans/",
  twitter: "",
  portfolio: "",
};

export const experience = [
  {
    id: 1,
    company: "The Home Depot",
    position: "Software Engineer Intern",
    period: "Ene 2025 - Presente",
    location: "Monterrey, N.L.",
    description: "Contribución al Store Management System (SMS), mejorando la integración entre sistemas POS y módulos web internos.",
    achievements: [
      "Lideré el desarrollo de un sistema de registro de instalaciones que automatizó más de 300 flujos de trabajo mensuales, mejorando la precisión y reduciendo el tiempo de entrada manual en un 100%",
      "Desarrollé y desplegué múltiples funcionalidades frontend y backend, colaborando con product owners para definir requisitos, escribir APIs eficientes e implementar UIs responsivas",
      "Optimicé operaciones de base de datos, diseñé flujos UX en Figma y realicé sesiones UAT antes del despliegue nacional",
      "Entregué actualizaciones del sistema basadas en sprints bajo Agile/Scrum, gestionando procesos CI/CD en Azure DevOps y Git",
    ],
    technologies: ["C#", ".NET", "React", "SQL Server", "Azure DevOps", "Figma"],
  },
  {
    id: 2,
    company: "Tecnológico de Monterrey",
    position: "On Campus Intern – Media Analytics",
    period: "Ago 2024 - Feb 2025",
    location: "Monterrey, N.L.",
    description: "Monitoreo y análisis del desempeño en redes sociales de la universidad.",
    achievements: [
      "Monitoreé el desempeño de redes sociales con Brandwatch y Sprinklr, desarrollando estrategias que aumentaron el engagement y el crecimiento de seguidores",
      "Produje reportes analíticos mensuales sobre tendencias digitales, sentimiento de marca y posicionamiento competitivo",
    ],
    technologies: ["Brandwatch", "Sprinklr", "Data Analysis", "Social Media"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Kia Life – Onboarding App",
    description: "Plataforma de onboarding de tres meses para Kia Motors con tareas por fases, verificación dual entre empleados y administradores, y notificaciones automatizadas. Incluye entorno gamificado con Unity que recompensa a empleados con artículos virtuales y leaderboard. 🏆 Ganador 1er lugar KMX Young Innovator Award",
    image: "/KIA.JPG",
    technologies: ["React.js", "Node.js", "SQL Server", "AWS", "Unity"],
    liveUrl: "",
    githubUrl: "https://github.com/DanielGalvanS/KiaLife-app",
    galleryUrl: "https://drive.google.com/drive/folders/1IA5h13OoS4fTzscZtBAZAoHngo7uCBms?usp=sharing", 
    featured: true,
    category: "Full Stack",
    award: "1er Lugar KMX Young Innovator Award",
    period: "Ago 2024 – Oct 2024"
  },
  {
    id: 2,
    title: "Horno 3 – Interactive Museum App",
    description: "Guía de museo impulsada por IA usando Core ML + GPT-4 para generación de contenido en tiempo real y reconocimiento de secciones. Backend seguro con Supabase, autenticación JWT, APIs RESTful y sincronización en tiempo real entre plataformas web y móviles. Experiencia iOS interactiva con modo offline, tours personalizados y dashboards de analytics.",
    image: "/FigmaFundidora.png",
    technologies: ["SwiftUI", "Core ML", "GPT-4", "Supabase", "Next.js"],
    liveUrl: "",
    githubUrl: "https://github.com/DanielGalvanS/DevOS",
    galleryUrl: "https://www.canva.com/design/DAG1KF3KdNo/Ubnd-dugkdrFGfM-IsPi4A/edit?utm_content=DAG1KF3KdNo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", 
    featured: true,
    category: "Full Stack",
    period: "Abr 2025 – Jun 2025"
  },
  {
    id: 3,
    title: "SecuBank – IoT Security System",
    description: "Sistema IoT que integra sensores RFID y de movimiento para asegurar bóvedas bancarias con validación de acceso multinivel. Desarrollo de APIs backend e infraestructura de datos para alertas en tiempo real y autenticación de usuarios.",
    image: "", 
    technologies: ["Arduino", "MySQL", "REST API"],
    liveUrl: "",
    githubUrl: "", // Sin GitHub
    galleryUrl: "",
    featured: false,
    category: "Backend",
    period: "Abr 2024 – Jun 2024"
  },
];

export const skills = {
  frontend: [
    { name: "React", level: 90, icon: "react_dark" },
    { name: "JavaScript", level: 90, icon: "javascript" },
    { name: "HTML/CSS", level: 95, icon: "html5" },
    { name: "Tailwind CSS", level: 85, icon: "tailwindcss" },
    { name: "Next.js", level: 85, icon: "nextjs_icon_dark" },
    { name: "Swift", level: 75, icon: "swift" },
  ],
  backend: [
    { name: ".NET", level: 85, icon: "dotnet" },
    { name: "Node.js", level: 85, icon: "nodejs" },
    { name: "Express", level: 85, icon: "expressjs_dark" },
    { name: "Python", level: 80, icon: "python" },
    { name: "C++", level: 75, icon: "c-plusplus" },
    { name: "SQL Server", level: 85, icon: "sql-server" },
    { name: "MySQL", level: 80, icon: "mysql-icon-dark" },
    { name: "PostgreSQL", level: 80, icon: "postgresql" },
  ],
  tools: [
    { name: "Git", level: 90, icon: "git" },
    { name: "Azure", level: 85, icon: "azure" },
    { name: "AWS", level: 75, icon: "aws_dark" },
    { name: "Docker", level: 75, icon: "docker" },
    { name: "Figma", level: 80, icon: "figma" },
    { name: "GitHub", level: 90, icon: "github_dark" },
  ],
};

