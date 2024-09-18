import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.0001s"
      className="w-full h-fitrounded-t-3xl pt-16 pb-12 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="text border-t-[1px] border-b-[1px] border-zinc-300 flex  overflow-hidden whitespace-nowrap ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[22vw] leading-[1] tracking-[-1.4vw] font-['Test Founders Grotesk Semibold'] uppercase font-bold  border-zinc-300"
        >
          &nbsp;we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[22vw]  leading-[1] mb-[2.5vw] tracking-[-1.4vw] font-['Test Founders Grotesk Semibold'] uppercase font-bold  border-zinc-300"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
