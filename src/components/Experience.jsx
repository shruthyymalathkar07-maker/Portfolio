import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { experience } from "../data/resumeData";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <p className="eyebrow">Experience</p>
        <h2 className="section-title">Where I've put it into practice.</h2>
        <p className="section-sub">
          Two internships, two different problems — one in AI systems, one in
          front-of-user product work.
        </p>

        <div className="timeline">
          {experience.map((e, i) => (
            <motion.div
              className="timeline-item"
              key={e.company}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
            >
              <div className="timeline-marker">
                <span className="timeline-dot">
                  <FiBriefcase aria-hidden="true" />
                </span>
                {i !== experience.length - 1 && <span className="timeline-line" />}
              </div>

              <div className="timeline-card glass">
                <span className="pill timeline-location">{e.location}</span>
                <h3>{e.role}</h3>
                <p className="timeline-company">{e.company}</p>
                <ul className="timeline-points">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
