import { projectsData } from "@/data/portfolioData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.grid}>
        {projectsData.map((project) => (
          <div key={project.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>{project.title}</h3>
              <div className={styles.links}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FaGithub className={styles.icon} />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" aria-label="External Link">
                    <FaExternalLinkAlt className={styles.icon} />
                  </a>
                )}
              </div>
            </div>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.techList}>
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
