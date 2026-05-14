import { aboutContent } from "@/data/portfolioData";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.content}>
        <p>{aboutContent}</p>
      </div>
    </section>
  );
}
