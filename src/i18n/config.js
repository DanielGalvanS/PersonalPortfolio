import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      nav: {
        home: "Inicio",
        about: "Sobre Mí",
        experience: "Experiencia",
        projects: "Proyectos",
        skills: "Habilidades",
        contact: "Contacto",
        downloadCV: "Descargar CV",
      },
      hero: {
        greeting: "Hola, soy",
        title: "Software Engineer & Full Stack Developer",
        bio: "Estudiante de Ingenieria en Tecnologías Computacionales en el Tec de Monterrey con experiencia en desarrollo full stack. Apasionado por crear soluciones innovadoras que impactan positivamente en las organizaciones.",
        viewProjects: "Ver Proyectos",
        contactMe: "Contáctame",
        whatsapp: "WhatsApp",
        whatsappMessage: "Hola! Me gustaría hablar sobre un proyecto.",
      },
      about: {
        title: "Sobre Mí",
        subtitle: "Conoce más sobre mi trayectoria y lo que puedo ofrecer",
        whyChooseMe: "¿Por qué elegirme?",
        servicesTitle: "Servicios que Ofrezco",
        description: [
          "Estudiante de Computer Science en el Tecnológico de Monterrey con experiencia práctica en desarrollo full stack y trabajo en equipos ágiles.",
          "Actualmente trabajo como Software Engineer Intern en The Home Depot, donde desarrollo soluciones que impactan cientos de tiendas a nivel nacional, optimizando flujos de trabajo y mejorando la experiencia de usuario.",
          "Me especializo en crear aplicaciones web robustas y escalables utilizando tecnologías modernas como React, .NET, Node.js, y bases de datos SQL.",
        ],
        highlights: [
          "GPA 3.7/4.0",
          "Software Engineer en The Home Depot",
          "1er lugar KMX Young Innovator Award",
          "Disponible para freelance",
        ],
        whyChooseMeReasons: [
          "Código limpio, mantenible y siguiendo las mejores prácticas",
          "Comunicación clara y actualizaciones constantes del progreso",
          "Entregas a tiempo y dentro del presupuesto acordado",
          "Soporte post-entrega y documentación completa",
        ],
        services: [
          {
            title: "Desarrollo Web",
            description: "Creación de sitios web modernos, responsivos y optimizados para SEO.",
          },
          {
            title: "Aplicaciones Web",
            description: "Desarrollo de aplicaciones web complejas con React y tecnologías modernas.",
          },
          {
            title: "APIs y Backend",
            description: "Diseño e implementación de APIs RESTful y servicios backend escalables.",
          },
          {
            title: "UI/UX Design",
            description: "Diseño de interfaces intuitivas y experiencias de usuario atractivas.",
          },
          {
            title: "Optimización",
            description: "Mejora del rendimiento y optimización de aplicaciones existentes.",
          },
          {
            title: "Consultoría",
            description: "Asesoramiento técnico y arquitectura de soluciones tecnológicas.",
          },
        ],
      },
      experience: {
        title: "Experiencia Profesional",
        subtitle: "Mi trayectoria profesional y logros destacados",
        achievements: "Logros destacados:",
        jobs: [
          {
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
          },
          {
            company: "Tecnológico de Monterrey",
            position: "On Campus Intern – Media Analytics",
            period: "Ago 2024 - Feb 2025",
            location: "Monterrey, N.L.",
            description: "Monitoreo y análisis del desempeño en redes sociales de la universidad.",
            achievements: [
              "Monitoreé el desempeño de redes sociales con Brandwatch y Sprinklr, desarrollando estrategias que aumentaron el engagement y el crecimiento de seguidores",
              "Produje reportes analíticos mensuales sobre tendencias digitales, sentimiento de marca y posicionamiento competitivo",
            ],
          },
        ],
      },
      projects: {
        title: "Proyectos",
        subtitle: "Una selección de proyectos en los que he trabajado",
        featured: "Destacado",
        all: "Todos",
        noProjects: "No hay proyectos en esta categoría.",
        repository: "Repositorio",
        gallery: "Galería",
        list: [
          {
            title: "Kia Life – Onboarding App",
            description: "Plataforma de onboarding de tres meses para Kia Motors con tareas por fases, verificación dual entre empleados y administradores, y notificaciones automatizadas. Incluye entorno gamificado con Unity que recompensa a empleados con artículos virtuales y leaderboard. 🏆 Ganador 1er lugar KMX Young Innovator Award",
          },
          {
            title: "Horno 3 – Interactive Museum App",
            description: "Guía de museo impulsada por IA usando Core ML + GPT-4 para generación de contenido en tiempo real y reconocimiento de secciones. Backend seguro con Supabase, autenticación JWT, APIs RESTful y sincronización en tiempo real entre plataformas web y móviles. Experiencia iOS interactiva con modo offline, tours personalizados y dashboards de analytics.",
          },
          {
            title: "SecuBank – IoT Security System",
            description: "Sistema IoT que integra sensores RFID y de movimiento para asegurar bóvedas bancarias con validación de acceso multinivel. Desarrollo de APIs backend e infraestructura de datos para alertas en tiempo real y autenticación de usuarios.",
          },
        ],
      },
      skills: {
        title: "Habilidades Técnicas",
        subtitle: "Tecnologías y herramientas con las que trabajo",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Herramientas",
        alwaysLearning: "Siempre Aprendiendo",
        alwaysLearningDesc: "La tecnología evoluciona constantemente y yo también. Estoy siempre explorando nuevas herramientas y mejorando mis habilidades para ofrecer las mejores soluciones.",
        techStack: "Stack Tecnológico Completo",
      },
      featuredProject: {
        badge: "Proyecto Destacado",
        subtitle: "Guía Interactiva de Museo Impulsada por IA",
        description: "Una experiencia inmersiva que combina inteligencia artificial con tecnología móvil para transformar la manera en que los visitantes exploran el museo Horno 3.",
        feature1: {
          title: "IA con GPT-4",
          description: "Genera contenido en tiempo real y responde preguntas sobre las exhibiciones usando procesamiento de lenguaje natural.",
        },
        feature2: {
          title: "Reconocimiento Visual",
          description: "Core ML identifica secciones del museo automáticamente para ofrecer información contextual instantánea.",
        },
        feature3: {
          title: "Experiencia Nativa iOS",
          description: "Diseñada con SwiftUI, ofrece tours personalizados, modo offline y sincronización en tiempo real.",
        },
      },
      contact: {
        title: "Contacto",
        subtitle: "¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para proyectos freelance y colaboraciones.",
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        sendMessage: "Envíame un mensaje",
        sendWhatsApp: "Enviar por WhatsApp",
        contactDirectly: "Contactar directamente por WhatsApp",
        contactDirectlyMsg: "Hola! Me gustaría hablar contigo sobre un proyecto.",
        namePlaceholder: "Tu nombre",
        emailPlaceholder: "tu@email.com",
        messagePlaceholder: "Cuéntame sobre tu proyecto...",
        contactInfo: "Información de Contacto",
        phone: "Teléfono",
        location: "Ubicación",
        socialMedia: "Redes Sociales",
        availability: "Disponibilidad",
        availabilityDesc: "Actualmente disponible para proyectos freelance. Respondo típicamente en 24 horas.",
        availableForProjects: "Disponible para nuevos proyectos",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        experience: "Experience",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        downloadCV: "Download CV",
      },
      hero: {
        greeting: "Hello, I'm",
        title: "Software Engineer & Full Stack Developer",
        bio: "Computer Science student at Tec de Monterrey with experience in full stack development. Passionate about creating innovative solutions that positively impact organizations.",
        viewProjects: "View Projects",
        contactMe: "Contact Me",
        whatsapp: "WhatsApp",
        whatsappMessage: "Hello! I would like to talk about a project.",
      },
      about: {
        title: "About Me",
        subtitle: "Learn more about my background and what I can offer",
        whyChooseMe: "Why Choose Me?",
        servicesTitle: "Services I Offer",
        description: [
          "Computer Science student at Tecnológico de Monterrey with hands-on experience in full stack development and working in agile teams.",
          "Currently working as a Software Engineer Intern at The Home Depot, where I develop solutions that impact hundreds of stores nationwide, optimizing workflows and improving user experience.",
          "I specialize in creating robust and scalable web applications using modern technologies like React, .NET, Node.js, and SQL databases.",
        ],
        highlights: [
          "GPA 3.7/4.0",
          "Software Engineer at The Home Depot",
          "1st place KMX Young Innovator Award",
          "Available for freelance",
        ],
        whyChooseMeReasons: [
          "Clean, maintainable code following best practices",
          "Clear communication and constant progress updates",
          "On-time delivery within agreed budget",
          "Post-delivery support and complete documentation",
        ],
        services: [
          {
            title: "Web Development",
            description: "Creation of modern, responsive websites optimized for SEO.",
          },
          {
            title: "Web Applications",
            description: "Development of complex web applications with React and modern technologies.",
          },
          {
            title: "APIs & Backend",
            description: "Design and implementation of RESTful APIs and scalable backend services.",
          },
          {
            title: "UI/UX Design",
            description: "Design of intuitive interfaces and engaging user experiences.",
          },
          {
            title: "Optimization",
            description: "Performance improvement and optimization of existing applications.",
          },
          {
            title: "Consulting",
            description: "Technical advisory and architecture of technological solutions.",
          },
        ],
      },
      experience: {
        title: "Professional Experience",
        subtitle: "My professional journey and notable achievements",
        achievements: "Key achievements:",
        jobs: [
          {
            company: "The Home Depot",
            position: "Software Engineer Intern",
            period: "Jan 2025 - Present",
            location: "Monterrey, N.L.",
            description: "Contributing to the Store Management System (SMS), enhancing integration between POS systems and internal web modules.",
            achievements: [
              "Led the development of an installation logging system that automated 300+ monthly workflows, improving accuracy and reducing manual entry time by 100%",
              "Developed and deployed multiple frontend and backend features, collaborating with product owners to define requirements, write efficient APIs, and implement responsive UIs",
              "Optimized database operations, designed UX flows in Figma, and conducted UAT sessions before national rollout",
              "Delivered sprint-based system updates under Agile/Scrum, managing CI/CD processes in Azure DevOps and Git",
            ],
          },
          {
            company: "Tecnológico de Monterrey",
            position: "On Campus Intern – Media Analytics",
            period: "Aug 2024 - Feb 2025",
            location: "Monterrey, N.L.",
            description: "Monitoring and analyzing the university's social media performance.",
            achievements: [
              "Monitored social media performance with Brandwatch and Sprinklr, developing strategies that increased engagement and follower growth",
              "Produced monthly analytical reports on digital trends, brand sentiment, and competitive positioning",
            ],
          },
        ],
      },
      projects: {
        title: "Projects",
        subtitle: "A selection of projects I've worked on",
        featured: "Featured",
        all: "All",
        noProjects: "No projects in this category.",
        repository: "Repository",
        gallery: "Gallery",
        list: [
          {
            title: "Kia Life – Onboarding App",
            description: "Three-month onboarding platform for Kia Motors with phased tasks, dual verification between employees and administrators, and automated notifications. Includes gamified Unity environment that rewards employees with virtual items and a leaderboard. 🏆 1st place winner KMX Young Innovator Award",
          },
          {
            title: "Horno 3 – Interactive Museum App",
            description: "AI-powered museum guide using Core ML + GPT-4 for real-time content generation and section recognition. Secure backend with Supabase, JWT authentication, RESTful APIs, and real-time synchronization between web and mobile platforms. Interactive iOS experience with offline mode, personalized tours, and analytics dashboards.",
          },
          {
            title: "SecuBank – IoT Security System",
            description: "IoT system integrating RFID and motion sensors to secure bank vaults with multilevel access validation. Backend API and data infrastructure development for real-time alerts and user authentication.",
          },
        ],
      },
      skills: {
        title: "Technical Skills",
        subtitle: "Technologies and tools I work with",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools",
        alwaysLearning: "Always Learning",
        alwaysLearningDesc: "Technology is constantly evolving and so am I. I'm always exploring new tools and improving my skills to deliver the best solutions.",
        techStack: "Complete Tech Stack",
      },
      featuredProject: {
        badge: "Featured Project",
        subtitle: "AI-Powered Interactive Museum Guide",
        description: "An immersive experience combining artificial intelligence with mobile technology to transform how visitors explore the Horno 3 museum.",
        feature1: {
          title: "AI with GPT-4",
          description: "Generates real-time content and answers questions about exhibitions using natural language processing.",
        },
        feature2: {
          title: "Visual Recognition",
          description: "Core ML automatically identifies museum sections to provide instant contextual information.",
        },
        feature3: {
          title: "Native iOS Experience",
          description: "Built with SwiftUI, offers personalized tours, offline mode, and real-time synchronization.",
        },
      },
      contact: {
        title: "Contact",
        subtitle: "Have a project in mind? Let's talk! I'm available for freelance projects and collaborations.",
        name: "Name",
        email: "Email",
        message: "Message",
        sendMessage: "Send me a message",
        sendWhatsApp: "Send via WhatsApp",
        contactDirectly: "Contact directly via WhatsApp",
        contactDirectlyMsg: "Hello! I would like to talk to you about a project.",
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com",
        messagePlaceholder: "Tell me about your project...",
        contactInfo: "Contact Information",
        phone: "Phone",
        location: "Location",
        socialMedia: "Social Media",
        availability: "Availability",
        availabilityDesc: "Currently available for freelance projects. I typically respond within 24 hours.",
        availableForProjects: "Available for new projects",
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
