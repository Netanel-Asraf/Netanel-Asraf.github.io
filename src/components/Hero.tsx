import { personalInfo } from "@/data/portfolioData";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.name}>{personalInfo.name}</h1>
      <h2 className={styles.title}>{personalInfo.title}</h2>
      <p className={styles.tagline}>{personalInfo.tagline}</p>
      <div className={styles.buttonGroup}>
        <a href="#about" className="btn">Check out my work</a>
        {personalInfo.cvLink && (
          <a href={personalInfo.cvLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View Resume
          </a>
        )}
      </div>
    </section>
  );
}
