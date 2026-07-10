import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCheck, FiArrowUpRight } from "react-icons/fi";
import { projects, profile } from "../data/resumeData";
import ProjectGallery from "./ProjectGallery";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <p className="eyebrow">Projects</p>
        <h2 className="section-title">Things I've built.</h2>
        <p className="section-sub">
          A mix of AI systems and web applications — from real-time emotion
          detection to language translation pipelines.
        </p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.article
              className="project-card glass"
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8 }}
            >
              {p.screenshots ? (
                <ProjectGallery images={p.screenshots} title={p.title} />
              ) : (
                <div className="project-visual" aria-hidden="true">
                  <span className="project-index">0{i + 1}</span>
                  <svg viewBox="0 0 200 80" className="project-wave">
                    <path
                      d="M0,40 C30,10 50,70 80,40 C110,10 130,70 160,40 C175,25 185,45 200,40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              )}

              <div className="project-body">
                <h3>{p.title}</h3>
                <p className="project-desc">{p.description}</p>

                <ul className="project-features">
                  {p.features.map((f) => (
                    <li key={f}>
                      <FiCheck aria-hidden="true" /> {f}
                    </li>
                  ))}
                </ul>

                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span className="pill" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {p.github ? (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                      <FiGithub /> Code
                    </a>
                  ) : (
                    <span className="btn btn-outline btn-sm btn-disabled" title="Add your repo link">
                      <FiGithub /> Code
                    </span>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                      <FiExternalLink /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="projects-more"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <a
            href={profile.githubRepos}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            data-cursor-hover
          >
            <FiGithub /> View More Projects on GitHub <FiArrowUpRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
