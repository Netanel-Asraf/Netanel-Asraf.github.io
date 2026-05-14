import { experienceData } from "@/data/portfolioData";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <h2>Experience</h2>
      <div className={styles.list}>
        {experienceData.map((exp) => (
          <div key={exp.id} className={styles.companyGroup}>
            <div className={styles.companyHeader}>
              {exp.logo && <img src={exp.logo} alt={`${exp.company} logo`} className={styles.companyLogo} />}
              <div className={styles.companyHeaderInfo}>
                <h3 className={styles.companyTitle}>{exp.company}</h3>
                {exp.totalDate && <span className={styles.totalDate}>{exp.totalDate}</span>}
              </div>
            </div>
            
            <div className={styles.rolesContainer}>
              {exp.roles.map((role, idx) => (
                <div key={idx} className={styles.roleEntry}>
                  <div className={styles.date}>{role.date}</div>
                  <div className={styles.details}>
                    <h4 className={styles.roleTitle}>{role.title}</h4>
                    <p>{role.description}</p>
                    <ul className={styles.techList}>
                      {role.technologies.map((tech) => (
                        <li key={tech} className={styles.techItem}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
