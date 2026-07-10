import { motion } from "framer-motion";
import { FiAward, FiBookOpen } from "react-icons/fi";
import { education, certifications } from "../data/resumeData";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container education-grid">
        <div>
          <p className="eyebrow">Education</p>
          <h2 className="section-title">The academic path.</h2>
          <p className="section-sub">Four years, one steady direction.</p>

          <div className="edu-list">
            {education.map((e, i) => (
              <motion.div
                className="edu-item"
                key={e.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              >
                <span className="edu-icon">
                  <FiBookOpen aria-hidden="true" />
                </span>
                <div>
                  <div className="edu-top">
                    <h3>{e.degree}</h3>
                    <span className="pill edu-period">{e.period}</span>
                  </div>
                  <p className="edu-institution">
                    {e.institution} — {e.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow">Certifications</p>
          <h2 className="section-title">Extra ground covered.</h2>
          <p className="section-sub">
            Short, focused certifications alongside the degree.
          </p>

          <motion.div
            className="cert-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          >
            {certifications.map((c) => (
              <motion.div
                className="cert-card glass"
                key={c.name}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
                }}
              >
                <span className="cert-icon">
                  <FiAward aria-hidden="true" />
                </span>
                <div>
                  <h4>{c.name}</h4>
                  <p>{c.issuer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
