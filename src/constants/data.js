export const navLinks = [];

export const personalInfo = {
  name: "Daniel Galván",
  title: "Software Engineer",
  location: "Monterrey, Nuevo León, México",
  email: "dggalvans@gmail.com",
  phone: "+52 81 2200 6817",
  whatsapp: "+528122006817",
  bio: "Me gusta diseñar y crear software útil para que la gente lo use.",
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
  portfolio: "",
};

export const experience = [
  {
    id: 1,
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
    technologies: ["C#", ".NET", "React", "SQL Server", "Azure DevOps", "Figma"],
  },
  {
    id: 2,
    company: "Tecnológico de Monterrey",
    position: "On Campus Intern – Media Analytics",
    period: "Aug 2024 - Feb 2025",
    location: "Monterrey, N.L.",
    description: "Monitoring and analyzing the university's social media performance.",
    achievements: [
      "Monitored social media performance with Brandwatch and Sprinklr, developing strategies that increased engagement and follower growth",
      "Produced monthly analytical reports on digital trends, brand sentiment, and competitive positioning",
    ],
    technologies: ["Brandwatch", "Sprinklr", "Data Analysis", "Social Media"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Kia Life – Onboarding App",
    description: "Three-month onboarding platform for Kia Motors with phased tasks, dual verification between employees and administrators, and automated notifications. Includes a gamified Unity environment that rewards employees with virtual items and a leaderboard. 🏆 1st Place KMX Young Innovator Award",
    image: "/KIA/KIA.JPG",
    technologies: ["React.js", "Node.js", "SQL Server", "AWS", "Unity"],
    liveUrl: "",
    githubUrl: "https://github.com/DanielGalvanS/KiaLife-app",
    galleryUrl: "https://drive.google.com/drive/folders/1IA5h13OoS4fTzscZtBAZAoHngo7uCBms?usp=sharing",
    featured: true,
    category: "Full Stack",
    award: "1st Place KMX Young Innovator Award",
    period: "Aug 2024 – Oct 2024",
    gallery: [
      { src: "/KIA/K1.webp", caption: "Your first day starts here" },
      { src: "/KIA/K2.webp", caption: "Complete your tasks, wait for approval" },
      { src: "/KIA/K3.webp", caption: "Every task you finish earns you something" },
      { src: "/KIA/K4.webp", caption: "Track where you are in your journey" },
      { src: "/KIA/K5.webp", caption: "Admins review and verify each employee's progress" },
      { src: "/KIA/K8.webp", caption: "Your virtual space, waiting to be yours" },
      { src: "/KIA/K9.webp", caption: "Items you've earned along the way" },
      { src: "/KIA/K10.webp", caption: "Making it feel like home" },
    ],
  },
  {
    id: 2,
    title: "Horno 3 – Interactive Museum App",
    description: "AI-powered museum guide using Core ML + GPT-4 for real-time content generation and section recognition. Secure backend with Supabase, JWT authentication, RESTful APIs, and real-time synchronization between web and mobile platforms. Interactive iOS experience with offline mode, personalized tours, and analytics dashboards.",
    image: "/FigmaFundidora.png",
    technologies: ["SwiftUI", "Core ML", "GPT-4", "Supabase", "Next.js"],
    liveUrl: "",
    githubUrl: "https://github.com/DanielGalvanS/DevOS",
    galleryUrl: "https://www.canva.com/design/DAG1KF3KdNo/Ubnd-dugkdrFGfM-IsPi4A/edit?utm_content=DAG1KF3KdNo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    featured: true,
    category: "Full Stack",
    period: "Apr 2025 – Jun 2025"
  },
  {
    id: 3,
    title: "SecuBank – IoT Security System",
    description: "IoT system integrating RFID and motion sensors to secure bank vaults with multilevel access validation. Backend API and data infrastructure development for real-time alerts and user authentication.",
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

