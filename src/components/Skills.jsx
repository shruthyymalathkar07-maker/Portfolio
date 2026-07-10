import { motion } from "framer-motion";
import { skillGroups } from "../data/resumeData";
import "./Skills.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <p className="eyebrow">Skills</p>
        <h2 className="section-title">The stack behind the systems.</h2>
        <p className="section-sub">
          A working toolkit across AI/ML, backend, and frontend — built through
          internships, coursework, and self-driven projects.
        </p>

        <motion.div
          className="skills-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {skillGroups.map((group) => (
            <motion.div className="skill-card glass" key={group.label} variants={item}>
              <h3>{group.label}</h3>
              <div className="skill-chips">
                {group.items.map((s) => (
                  <span className="pill" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
