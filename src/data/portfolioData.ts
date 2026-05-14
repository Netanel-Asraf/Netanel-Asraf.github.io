export const personalInfo = {
  name: "Netanel Asraf",
  title: "Computer Science Student",
  tagline: "",
  github: "https://github.com/Netanel-Asraf",
  linkedin: "https://www.linkedin.com/in/netanelasraf/",
  cvLink: "/NetanelAsraf.pdf", // Place your PDF in the public folder and update this name
};

export const aboutContent = `I'm a Second-year B.Sc. student in Computer Science graduating in 2028. Participant in the "Atidim" excellence program. Seeking a student role in central or southern Israel. Basmach DevOps graduate with nearly 3 years of Full-Stack & DevOps experience in Ofek 324.`;

export const experienceData = [
  {
    id: 1,
    company: "Ofek 324 Unit (IAF)",
    totalDate: "Dec 2020 - Sep 2023",
    logo: "/ofek-logo.png", // Place your logo image in the public folder and update this name if needed
    roles: [
      {
        title: "Full-stack Developer",
        date: "Dec 2021 - Sep 2023",
        description: "Developed a central organizational web platform to fully digitize and automate critical service workflows across the Air Force",
        technologies: ["Angular", "C#", "TypeScript", "SQL"],
      },
      {
        title: "DevOps Developer",
        date: "Dec 2020 - Dec 2021",
        description: "Built the supporting server-side infrastructure and maintained deployment environments across Linux servers to handle organization-wide data.",
        technologies: ["Linux", "SQL", "Bash", "Git"],
      }
    ]
  },
  // {
  //   id: 2,
  //   company: "Creative Agency",
  //   totalDate: "Jan 2020 - Dec 2023",
  //   logo: "",
  //   roles: [
  //     {
  //       title: "Full Stack Developer",
  //       date: "Jan 2020 - Dec 2023",
  //       description: "Developed and maintained multiple client websites and web applications. Collaborated closely with designers to ensure pixel-perfect implementations.",
  //       technologies: ["JavaScript", "Node.js", "Express", "Sass"],
  //     }
  //   ]
  // }
];

export const projectsData = [
  {
    id: 1,
    title: "DJ Track Session Manager",
    description: "Engineered a C++ audio processing engine, custom LRU cache and strict memory management for leak-free, high-performance playlist sessions.",
    image: "",
    technologies: ["C++", "Memory Management", "Git", "GitHub"],
    link: "https://github.com/Netanel-Asraf/spl-assignment-1",
    github: "https://github.com/Netanel-Asraf/spl-assignment-1"
  },
  {
    id: 2,
    title: "Linear Algebra Engine",
    description: "Implemented and optimized a multithreaded Java task scheduler to compute complex mathematical expressions on shared memory without data races.",
    image: "",
    technologies: ["Java", "Concurrency", "Multi-threading", "Git", "GitHub"],
    link: "https://github.com/Netanel-Asraf/spl-assignment-2",
    github: "https://github.com/Netanel-Asraf/spl-assignment-2"
  },
  {
    id: 3,
    title: "World Cup 2026 Informer",
    description: "Built a real-time STOMP messaging system, engineering a threadsafe Java server and a multithreaded C++ client for high-concurrency TCP communication.",
    image: "",
    technologies: ["Java", "C++", "STOMP", "TCP", "Multi-threading", "Concurrency", "Server-Side Programming", "Git", "GitHub"],
    link: "https://github.com/Netanel-Asraf/spl-assignment-3",
    github: "https://github.com/Netanel-Asraf/spl-assignment-3"
  }
];

export const educationData = [
  {
    id: 1,
    degree: "B.Sc. in Computer Science",
    institution: "Ben-Gurion University of the Negev",
    date: "2024 - Present",
    description: "Focusing on software engineering, algorithms, and data structures. Active member of the competitive programming club.",
    courses: ["Data Structures (100)", "Logic & Set Theory (98)", "Systems Programming (88)", "Discrete Math (88)"],
  },
  {
    id: 2,
    degree: "Basmach DevOps Course",
    institution: "Basmach - IDF School of Computer Science",
    date: "2020",
    description: "Gained expertise in Linux Internals, Python & Bash Scripting, Network Protocols, and Container Orchestration (Docker, Kubernetes). ",
    courses: ["Linux Internals", "Python", "Bash Scripting", "Network Protocols", "Docker", "Kubernetes"],
  },
  {
    id: 3,
    degree: "High School Diploma",
    institution: "Begin High School, Eilat",
    date: "2017 - 2020",
    description: "Computer Science track, graduated with honors.",
    courses: [],
  },
  {
    id: 4,
    degree: "Cisco Networking Academy",
    institution: "Neta@ (Appleseeds Academy)",
    date: "2017 - 2018",
    description: "IT Essentials and Introduction to Networks (Routing & Switching module).",
    courses: [],
  }
];
