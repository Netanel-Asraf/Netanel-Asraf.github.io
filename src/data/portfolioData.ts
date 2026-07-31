export const personalInfo = {
  name: "Netanel Asraf",
  title: "Computer Science Student",
  tagline: "",
  github: "https://github.com/Netanel-Asraf",
  linkedin: "https://www.linkedin.com/in/netanelasraf/",
  cvLink: "/NetanelAsraf.pdf", // Place your PDF in the public folder and update this name
};

export const aboutContent = `Second-year B.Sc. student in Computer Science graduating in 2028. Participant in the "Atidim" excellence program. Seeking a student role in central or southern Israel. Basmach DevOps graduate with nearly 3 years of Full-Stack & DevOps experience in Ofek 324.`;

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
        description: "Developed a central organizational web platform that digitized and automated critical service workflows across the Air Force. Built back-end services (primary focus) and front-end components using Angular",
        technologies: ["C#", "TypeScript", "Angular", "SQL"],
      },
      {
        title: "DevOps Developer",
        date: "Dec 2020 - Dec 2021",
        description: "Maintained deployment environments and server-side infrastructure across Linux servers, automating recurring operational tasks with Bash and PowerShell. Monitored system health with Splunk and contributed to version control (Git) and CI workflows (Jenkins).",
        technologies: ["Linux", "Bash", "PowerShell", "Git", "Jenkins", "Splunk"],
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
    title: "DJ Track Session Manager (C++) ",
    description: "Built a C++ audio processing engine with a custom LRU cache and strict manual memory management, delivering leak-free, high-performance playlist sessions under repeated load.",
    image: "",
    technologies: ["C++", "Memory Management", "Git", "GitHub"],
    link: "https://github.com/Netanel-Asraf/spl-assignment-1",
    github: "https://github.com/Netanel-Asraf/spl-assignment-1"
  },
  {
    id: 2,
    title: "Linear Algebra Engine (Java)",
    description: "Designed and optimized a multithreaded task scheduler that evaluates complex mathematical expressions in parallel over shared memory, eliminating data races while maximizing throughput.",
    image: "",
    technologies: ["Java", "Concurrency", "Multi-threading", "Git", "GitHub"],
    link: "https://github.com/Netanel-Asraf/spl-assignment-2",
    github: "https://github.com/Netanel-Asraf/spl-assignment-2"
  },
  {
    id: 3,
    title: "World Cup 2026 Informer (C++ / Java)",
    description: "Implemented a real-time STOMP messaging system: a thread-safe Java server paired with a multithreaded C++ client, handling high-concurrency TCP communication without race conditions.",
    image: "",
    technologies: ["Java", "C++", "STOMP", "TCP", "Multi-threading", "Concurrency", "Server-Side Programming", "Git", "GitHub"],
    link: "https://github.com/Netanel-Asraf/spl-assignment-3",
    github: "https://github.com/Netanel-Asraf/spl-assignment-3"
  }
  // ,
  // {
  //   id: 4,
  //   title: "Personal Portfolio Website",
  //   description: "Designed and developed a highly interactive, responsive personal portfolio. Built with Next.js App Router for optimal performance, featuring a custom dark mode, semantic Vanilla CSS, and a dynamic mouse-tracking spotlight effect.",
  //   image: "",
  //   technologies: ["Next.js", "React", "TypeScript", "CSS Modules", "GitHub Actions"],
  //   link: "https://netanel-asraf.github.io/",
  //   github: "https://github.com/Netanel-Asraf/Netanel-Asraf.github.io"
  // }
];

export const educationData = [
  {
    id: 1,
    degree: "B.Sc. in Computer Science",
    institution: "Ben-Gurion University of the Negev",
    date: "Nov 2024 - Present",
    description: "Focusing on software engineering, data structures, and system programming. Building robust software solutions through intensive academic laboratory work.",
    courses: ["Data Structures (100)", "Logic & Set Theory (98)", "Extended System Programming Laboratory (89)", "Systems Programming (88)", "Discrete Structures and Combinatorics (88)", "Principles of Programming Languages (82)"],
  },
  {
    id: 2,
    degree: "Basmach DevOps Course",
    institution: "Basmach - IDF School of Computer Science",
    date: "Aug 2020 - Dec 2020",
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
