import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiArrowUp } from "react-icons/fi";
import { profile } from "../data/resumeData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">SM</span>
          <span>{profile.name}</span>
        </div>

        <div className="footer-socials">
          <a href={`mailto:${profile.email}`} aria-label="Email" data-cursor-hover>
            <FiMail />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" data-cursor-hover>
            <FiLinkedin />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" data-cursor-hover>
            <FiGithub />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <motion.a
          href="#top"
          className="back-to-top"
          aria-label="Back to top"
          whileHover={{ y: -3 }}
          data-cursor-hover
        >
          <FiArrowUp />
        </motion.a>
      </div>
    </footer>
  );
}
