import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="container navbar-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">SM</span>
          <span className="brand-name">Shruthyy M B</span>
        </a>

        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="icon-btn"
            aria-label="Toggle color theme"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <a href="#contact" className="btn btn-primary nav-cta">
            Let's talk
          </a>
          <button
            className="icon-btn menu-btn"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav glass"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul>
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
