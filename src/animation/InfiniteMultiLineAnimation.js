import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InfiniteMultiLineAnimation = () => {
  const lines = [
    "Full Stack Developer",
    "Software Engineer"
  ];

  const [currentLine, setCurrentLine] = useState(0); // Tracks the current line
  const [phase, setPhase] = useState("writing"); // Tracks animation phase (writing/removing)

  const letters = lines[currentLine].split(""); // Split the current line into letters

  // Handle phase transitions after the line is written
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (phase === "writing") {
        setPhase("removing"); // Switch to removing after writing
      } else {
        setCurrentLine((prev) => (prev + 1) % lines.length); // Move to the next line
        setPhase("writing"); // Switch back to writing
      }
    }, (letters.length + 1) * 200); // Adjust timing based on the number of letters

    return () => clearTimeout(timeout);
  }, [phase, currentLine, letters.length]);

  const containerVariants = {
    visible: {
      transition: { staggerChildren: 0.1 }, // Stagger for letter-by-letter animation
    },
    exit: {
      transition: { staggerChildren: 0.1, staggerDirection: -1 }, // Reverse stagger for removing
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div
      style={{
        display: "inline-block",
        whiteSpace: "normal",
        overflowWrap: "break-word",
        wordBreak: "break-word",
      }}
    >
      <AnimatePresence mode="wait">
        {/* Key based on currentLine only to prevent unnecessary rerenders */}
        <motion.div
          key={currentLine} // Ensures a fresh animation when the line changes
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            display: "inline-block",
            whiteSpace: "normal", // Allow text to wrap naturally
            wordBreak: "break-word", // Allow break at whitespace
            overflowWrap: "break-word", // Allow break at whitespace
            wordWrap: "break-word", // Allow word break
            textAlign: "center", // Center the text
            maxWidth: "100%", // Ensure text doesn't overflow the container
            fontSize: "clamp(1rem, 4vw, 2.4rem)", // Responsive font size
          }}
        >
          {letters.map((letter, index) => (
            <motion.span
            key={`${currentLine}-${index}`}  // Ensure unique keys by combining currentLine and index
            variants={letterVariants}
              style={{ display: "inline-block", margin: 0 }}
            >
              {letter === " " ? "\u00A0" : letter} {/* Replace spaces with non-breaking spaces */}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default InfiniteMultiLineAnimation;
