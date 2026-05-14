import { educationData } from "@/data/portfolioData";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className={styles.education}>
      <h2>Education</h2>
      <div className={styles.list}>
        {educationData.map((edu) => (
          <div key={edu.id} className={styles.item}>
            <div className={styles.date}>{edu.date}</div>
            <div className={styles.details}>
              <h3>{edu.degree} <span>@ {edu.institution}</span></h3>
              <p>{edu.description}</p>
              {edu.courses && edu.courses.length > 0 && (
                <ul className={styles.courseList}>
                  {edu.courses.map((course) => (
                    <li key={course} className={styles.courseItem}>{course}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
