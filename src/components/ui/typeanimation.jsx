"use client";;
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { cn } from "@/lib/utils";

const Typeanimation = ({
  words = [" existence", " reality", " the Internet"],
  className,
  typingSpeed = 50,
  deletingSpeed = 50,
  pauseDuration = 1000,
  gradientColors = "linear-gradient(to right, #3b82f6, #a855f7)"
}) => {
  const sequence = words.flatMap((word) => [word, pauseDuration]);

  return (
    <motion.span
      className={cn("bg-clip-text text-transparent typewriter-cursor", className)}
      style={{
        backgroundImage: gradientColors
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <TypeAnimation
        sequence={sequence}
        wrapper="span"
        repeat={Infinity}
        cursor={false}
        speed={typingSpeed}
        deletionSpeed={deletingSpeed}
      />
    </motion.span>
  );
};

export default Typeanimation;