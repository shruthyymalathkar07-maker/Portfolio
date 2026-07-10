import { motion, AnimatePresence } from "framer-motion";
import "./Loader.css";

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="loader-inner">
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
              <motion.path
                d="M0 20 Q 10 4, 20 20 T 40 20 T 60 20 T 80 20 T 100 20 T 120 20"
                stroke="var(--accent)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
            <motion.p
              className="loader-text"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              compiling signal
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
