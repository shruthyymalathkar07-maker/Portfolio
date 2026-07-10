import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/resumeData";
import VoiceIntro from "./VoiceIntro";
import "./Hero.css";

const ROLES = [
  "AI Engineer",
  "Software Developer",
  "NLP & ML Enthusiast",
  "Frontend Builder",
];

function useTypewriter(words, speed = 65, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <svg viewBox="0 0 1440 800" preserveAspectRatio="none" className="hero-waves">
          <motion.path
            d="M0,420 C240,360 300,500 480,460 C660,420 720,300 960,340 C1140,370 1260,460 1440,420"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.4"
            strokeOpacity="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,520 C220,480 340,600 560,560 C760,520 840,420 1040,460 C1220,500 1320,560 1440,520"
            fill="none"
            stroke="var(--accent-2)"
            strokeWidth="1.2"
            strokeOpacity="0.4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.6, ease: "easeInOut", delay: 0.3 }}
          />
        </svg>
        <div className="hero-glow" />
        <div className="hero-glow hero-glow-2" />
      </div>

      <div className="container hero-inner">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Available for opportunities · Chennai, India
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Hi, I'm {profile.name.split(" ")[0]}.
          <br />
          I turn signal into <span className="hero-highlight">systems</span>.
        </motion.h1>

        <motion.div
          className="hero-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <span className="hero-role-label">{typed}</span>
          <span className="hero-cursor" />
        </motion.div>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <a href="#projects" className="btn btn-primary">
            View my work
          </a>
          <a href={profile.resumeFile} download className="btn btn-outline">
            Download résumé
          </a>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a href={`mailto:${profile.email}`} aria-label="Email" data-cursor-hover>
            <FiMail />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" data-cursor-hover>
            <FiLinkedin />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" data-cursor-hover>
            <FiGithub />
          </a>
          <VoiceIntro />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero-scroll"
        aria-label="Scroll to about section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <FiArrowDown />
      </motion.a>
    </section>
  );
}
