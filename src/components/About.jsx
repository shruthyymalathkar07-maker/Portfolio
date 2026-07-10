import { motion } from "framer-motion";
import { profile, strengths } from "../data/resumeData";
import "./About.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="eyebrow">About</p>
          <h2 className="section-title">
            Grounded in fundamentals,
            <br /> curious about what's next.
          </h2>
          <p className="about-summary">{profile.summary}</p>

          <div className="about-objective">
            <span className="about-objective-label">Career objective</span>
            <p>
              To contribute to a dynamic software development team where I can apply my
              AI and web development skills to build scalable, real-world systems —
              while continuing to grow alongside emerging technology.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="about-side"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.15 }}
        >
          <div className="strengths-card glass">
            <span className="about-objective-label">Personal strengths</span>
            <ul className="strengths-list">
              {strengths.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <span className="strength-dot" />
                  {s}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="about-badge glass">
            <span className="about-badge-value">2026</span>
            <span className="about-badge-label">
              Graduated — B.Tech AI &amp; Data Science
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
