"use client";

import { useEffect, useState } from "react";
import styles from "./Spotlight.module.css";

export default function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={styles.spotlight}
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(94, 234, 212, 0.04), transparent 80%)`,
      }}
    />
  );
}
