import { FC, useState } from "react";
import { motion, Variants } from "framer-motion";

import { career, name } from "data/title";

const variants: Variants = {
  hidden: { opacity: 1 },
  show: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, x: "100px" },
  show: {
    opacity: 1,
    // y: 0,
  },
};

const Title: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.article
      variants={variants}
      className="relative"
      initial="hidden"
      animate="show"
    >
      <p className="mb-5 text-xl text-cyan-300">{`Hi I'm`}</p>
      <h1 className="mb-2 sm:mb-4">
        {name.split("").map((char, index) => {
          return (
            <motion.span
              className="text-4xl font-bold sm:text-6xl"
              key={`${char}_${index}`}
              variants={letter}
            >
              {char}
            </motion.span>
          );
        })}
      </h1>
      {career.split("").map((char, index) => {
        return (
          <motion.span
            className="text-2xl sm:text-4xl"
            key={`${char}_${index}`}
            variants={letter}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.article>
  );
};

export default Title;
