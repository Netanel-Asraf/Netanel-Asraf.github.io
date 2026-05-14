"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import styles from "./Header.module.css";
import { personalInfo } from "@/data/portfolioData";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">{personalInfo.name}.</Link>
        </div>
        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
        </nav>
        <div className={styles.socialWrapper}>
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}
