import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./SocialLinks.module.css";
import { personalInfo } from "@/data/portfolioData";

export default function SocialLinks() {
  return (
    <div className={styles.social}>
      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub className={styles.icon} />
      </a>
      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin className={styles.icon} />
      </a>
    </div>
  );
}
