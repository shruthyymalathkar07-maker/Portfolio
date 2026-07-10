import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./ProjectGallery.css";

export default function ProjectGallery({ images, title }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const go = (dir) => {
    setIndex((i) => (i + dir + images.length) % images.length);
  };

  return (
    <div className="project-gallery">
      <div className="project-gallery-frame">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`${title} screenshot ${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            loading="lazy"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="gallery-nav gallery-nav-prev"
              onClick={() => go(-1)}
              aria-label="Previous screenshot"
              data-cursor-hover
            >
              <FiChevronLeft />
            </button>
            <button
              type="button"
              className="gallery-nav gallery-nav-next"
              onClick={() => go(1)}
              aria-label="Next screenshot"
              data-cursor-hover
            >
              <FiChevronRight />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="gallery-dots" role="tablist" aria-label={`${title} screenshots`}>
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              className={`gallery-dot ${i === index ? "is-active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Show screenshot ${i + 1}`}
              aria-selected={i === index}
              role="tab"
            />
          ))}
        </div>
      )}
    </div>
  );
}
