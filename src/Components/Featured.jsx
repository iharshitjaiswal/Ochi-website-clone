import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

const Featured = () => {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div
      data-scroll
      data-scroll-speed="0.02"
      className="w-full py-10 bg-[#f1f1f1] rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="w-full border-b-[1px] border-zinc-400 ">
        <h1 className="font-['Founders Grotesk'] text-[#212121] m-10 text-[3rem] -tracking-widest">
          Featured projects
        </h1>
      </div>
      <div className="px-14 ">
        <div className="cards w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:mt-14 md:mt-14">
          {/* Card 1 */}
          <div className="cardcontainer relative  lg:mt-14">
            <div>
              <motion.div
                onHoverStart={() => handleHover(0)}
                onHoverEnd={() => handleHoverEnd(0)}
                className="cards w-full h-full flex flex-col gap-2"
              >
                <h1 className="absolute flex overflow-hidden lg:text-[5rem] md:text-5xl sm:text-[3rem] text-3xl lg:left-full md:left-full sm:left-1/2 left-1/2 -translate-x-1/2 top-[46%] lg:top-[48%] md:top-[44%] -translate-y-1/2  text-[#cdea68] font-['Founder Grotesk Semibold'] z-10 uppercase -tracking-wider w-max leading-none font-bold">
                  {"cardboard spaceship".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[0]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.03,
                      }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-[#212121]"></div>
                  <div>
                    <h2 className="text-[#212121] uppercase">
                      cardboard spaceship
                    </h2>
                  </div>
                </div>
                <motion.img
                  className="rounded-xl"
                  src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                  alt=""
                  initial={{ scale: 1 }} // Initial scale
                  whileHover={{ scale: 0.9 }}
                  transition={{
                    ease: "easeInOut",
                    delay: 0.1,
                    duration: "0.2",
                  }}
                />
              </motion.div>
              <div className="buttons flex mt-2">
                <button className="btn rounded-3xl px-2 py-[1px] text-[#212121] font-['Founders Grotesk']  mr-1 uppercase border-black border-[1px] tracking-tight">
                  branded template
                </button>
                <button className="btn rounded-3xl px-2 py-[1px] text-[#212121] font-['Founders Grotesk']  mr-1 uppercase border-black border-[1px] tracking-tight">
                  sales deck
                </button>
                <button className="btn rounded-3xl px-2 py-[1px] text-[#212121] font-['Founders Grotesk'] mr-21 uppercase border-black border-[1px] tracking-tight">
                  social media templates
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="cardcontainer relative  lg:mt-14">
            <div>
              <motion.div
                onHoverStart={() => handleHover(1)}
                onHoverEnd={() => handleHoverEnd(1)}
                className="cards w-full h-full flex flex-col gap-2"
              >
                <h1 className="absolute flex overflow-hidden lg:text-[5rem] md:text-5xl sm:text-[3rem] text-3xl lg:left-0 md:left-0 sm:left-1/2 left-1/2 -translate-x-1/2 top-[46%] lg:top-[48%] md:top-[44%] -translate-y-1/2  text-[#cdea68] font-['Founder Grotesk Semibold'] z-10 uppercase -tracking-wider w-max leading-none font-bold">
                  {"AH2 & Matt Horn".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[1]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.03,
                      }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-[#212121]"></div>
                  <div>
                    <h1 className="text-[#212121] uppercase">
                      AH2 & Matt Horn
                    </h1>
                  </div>
                </div>
                <motion.img
                  className="rounded-xl"
                  src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                  alt=""
                  initial={{ scale: 1 }} // Initial scale
                  whileHover={{ scale: 0.9 }}
                  transition={{
                    ease: "easeInOut",
                    delay: 0.1,
                    duration: "0.2",
                  }}
                />
              </motion.div>
              <div className="buttons flex mt-2">
                <button className="btn rounded-3xl px-2 py-[1px] text-[#212121] font-['Founders Grotesk']  mr-1 uppercase border-black border-[1px] tracking-tight">
                  pitch deck
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="cardcontainer relative  lg:mt-14">
            <div>
              <motion.div
                onHoverStart={() => handleHover(2)}
                onHoverEnd={() => handleHoverEnd(2)}
                className="cards w-full h-full flex flex-col gap-2"
              >
                <h1 className="absolute flex overflow-hidden lg:text-[5rem] md:text-5xl sm:text-[3rem] text-3xl lg:left-full md:left-full sm:left-1/2 left-1/2 -translate-x-1/2 top-[46%] lg:top-[48%] md:top-[44%] -translate-y-1/2  text-[#cdea68] font-['Founder Grotesk Semibold'] z-10 uppercase -tracking-wider w-max leading-none font-bold">
                  {"fyde".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[2]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.05,
                      }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-[#212121]"></div>
                  <div>
                    <h1 className="text-[#212121] uppercase">Fyde</h1>
                  </div>
                </div>
                <motion.img
                  className="rounded-xl"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  alt=""
                  initial={{ scale: 1 }} // Initial scale
                  whileHover={{ scale: 0.9 }}
                  transition={{
                    ease: "easeInOut",
                    delay: 0.1,
                    duration: "0.2",
                  }}
                />
              </motion.div>
              <div className="buttons flex mt-2 ">
                <button className="btn rounded-3xl px-2 py-[1px] text-[#212121] font-['Founders Grotesk']  mr-1 uppercase border-black border-[1px] tracking-tight">
                  audit
                </button>
                <button className="btn rounded-3xl px-2 py-[1px] text-[#212121] font-['Founders Grotesk']  mr-1 uppercase border-black border-[1px] tracking-tight">
                  copyright
                </button>
                <button className="btn rounded-3xl px-2 py-[1px] text-[#212121] font-['Founders Grotesk'] mr-1 uppercase border-black border-[1px] tracking-tight">
                  sales deck
                </button>
                <button className="btn rounded-3xl px-2 py-[1px] text-[#212121] font-['Founders Grotesk'] mr-1 uppercase border-black border-[1px] tracking-tight">
                  slides design
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="cardcontainer relative lg:mt-14">
            <div>
              <motion.div
                onHoverStart={() => handleHover(3)}
                onHoverEnd={() => handleHoverEnd(3)}
                className="cards w-full h-full flex flex-col gap-2"
              >
                <h1 className="absolute flex overflow-hidden lg:text-[5rem] md:text-5xl sm:text-[3rem] text-3xl lg:left-0 md:left-0 sm:left-1/2 left-1/2 -translate-x-1/2 top-[46%] lg:top-[48%] md:top-[44%] -translate-y-1/2  text-[#cdea68] font-['Founder Grotesk Semibold'] z-10 uppercase -tracking-wider w-max leading-none font-bold">
                  {"vise".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[3]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.05,
                      }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-[#212121]"></div>
                  <div>
                    <h1 className="text-[#212121] uppercase">Vise</h1>
                  </div>
                </div>
                <motion.img
                  className="rounded-xl"
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                  alt=""
                  initial={{ scale: 1 }} // Initial scale
                  whileHover={{ scale: 0.9 }}
                  transition={{
                    ease: "easeInOut",
                    delay: 0.1,
                    duration: "0.2",
                  }}
                />
              </motion.div>
              <div className="buttons flex mt-2">
                <button className="btn rounded-3xl px-2 py-[1px] text-[#212121] font-['Founders Grotesk']  mr-1 uppercase border-black border-[1px] tracking-tight">
                  agency
                </button>
                <button className="btn rounded-3xl px-2 py-[1px] text-[#212121] font-['Founders Grotesk']  mr-1 uppercase border-black border-[1px] tracking-tight">
                  company presentation
                </button>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="cardcontainer relative lg:mt-14">
            <div>
              <motion.div
                onHoverStart={() => handleHover(4)}
                onHoverEnd={() => handleHoverEnd(4)}
                className="cards w-full h-full flex flex-col gap-2"
              >
                <h1 className="absolute flex overflow-hidden lg:text-[5rem] md:text-5xl sm:text-[3rem] text-3xl lg:left-full md:left-full sm:left-1/2 left-1/2 -translate-x-1/2 top-[46%] lg:top-[48%] md:top-[44%] -translate-y-1/2  text-[#cdea68] font-['Founder Grotesk Semibold'] z-10 uppercase -tracking-wider w-max leading-none font-bold">
                  {"trawa".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[4]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.05,
                      }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-[#212121]"></div>
                  <div>
                    <h1 className="text-[#212121] uppercase">trawa</h1>
                  </div>
                </div>
                <motion.img
                  className="rounded-xl"
                  src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                  alt=""
                  initial={{ scale: 1 }} // Initial scale
                  whileHover={{ scale: 0.9 }}
                  transition={{
                    ease: "easeInOut",
                    delay: 0.1,
                    duration: "0.2",
                  }}
                />
              </motion.div>
              <div className="buttons flex mt-2">
                <button className="btn rounded-3xl px-2 py-[1px] text-[#212121] font-['Founders Grotesk']  mr-1 uppercase border-black border-[1px] tracking-tight">
                  brand identity
                </button>
                <button className="btn rounded-3xl px-2 py-[1px] text-[#212121] font-['Founders Grotesk']  mr-1 uppercase border-black border-[1px] tracking-tight">
                  design research
                </button>
                <button className="btn rounded-3xl px-2 py-[1px] text-[#212121] font-['Founders Grotesk'] mr-21 uppercase border-black border-[1px] tracking-tight">
                  investor deck
                </button>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="cardcontainer relative lg:mt-14">
            <div>
              <motion.div
                onHoverStart={() => handleHover(5)}
                onHoverEnd={() => handleHoverEnd(5)}
                className="cards w-full h-full flex flex-col gap-2"
              >
                <h1 className="absolute flex overflow-hidden lg:text-[5rem] md:text-5xl sm:text-[3rem] text-3xl lg:left-0 md:left-0 sm:left-1/2 left-1/2 -translate-x-1/2 top-[46%] lg:top-[48%] md:top-[44%] -translate-y-1/2  text-[#cdea68] font-['Founder Grotesk Semibold'] z-10 uppercase -tracking-wider w-max leading-none font-bold">
                  {"premium blend".split("").map((item, index) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[5]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.03,
                      }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-[#212121]"></div>
                  <div>
                    <h1 className="text-[#212121] uppercase">premium blend</h1>
                  </div>
                </div>
                <motion.img
                  className="rounded-xl"
                  src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                  alt=""
                  initial={{ scale: 1 }} // Initial scale
                  whileHover={{ scale: 0.9 }}
                  transition={{
                    ease: "easeInOut",
                    delay: 0.1,
                    duration: "0.2",
                  }}
                />
              </motion.div>
              <div className="buttons flex mt-2">
                <button className="btn rounded-3xl px-2 py-[1px] text-[#212121] font-['Founders Grotesk'] mr-1 uppercase border-[#212121] border-[1.4px] tracking-tight">
                  branded template
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="buttons flex bg-[#212121] border-2 rounded-[2rem] w-68 items-center mt-14 h-14 px-6 py-2">
          <button className=" uppercase font-['Founders Grotesk'] mr-6">
            view all case studies
          </button>
          <div className="h-3 w-3 rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
