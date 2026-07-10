import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiVolume2, FiVolumeX, FiLoader } from "react-icons/fi";
import "./VoiceIntro.css";

const AUDIO_SRC = "/audio/intro.mp3";

export default function VoiceIntro() {
  const [status, setStatus] = useState("idle"); // idle | loading | speaking
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audio.preload = "auto";

    audio.onplaying = () => setStatus("speaking");
    audio.onended = () => setStatus("idle");
    audio.onpause = () => setStatus((s) => (s === "speaking" ? "idle" : s));
    audio.onerror = () => setStatus("idle");

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const handleClick = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (status === "speaking") {
      audio.pause();
      audio.currentTime = 0;
      setStatus("idle");
      return;
    }

    if (status === "loading") return;

    setStatus("loading");
    const playPromise = audio.play();
    if (playPromise && typeof playPromise.then === "function") {
      playPromise.catch(() => setStatus("idle"));
    }
  };

  return (
    <motion.button
      type="button"
      className={`voice-intro-btn ${status !== "idle" ? "is-active" : ""}`}
      onClick={handleClick}
      aria-label={
        status === "speaking"
          ? "Stop voice introduction"
          : status === "loading"
          ? "Loading voice introduction"
          : "Play voice introduction"
      }
      title="Listen to my introduction"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      data-cursor-hover
    >
      {status === "loading" && (
        <FiLoader className="voice-icon voice-icon-spin" aria-hidden="true" />
      )}
      {status === "speaking" && <FiVolumeX className="voice-icon" aria-hidden="true" />}
      {status === "idle" && <FiVolume2 className="voice-icon" aria-hidden="true" />}

      {status === "speaking" && (
        <span className="voice-wave" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      )}
    </motion.button>
  );
}
