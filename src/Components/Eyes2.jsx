import React, { useEffect, useState, useRef } from "react";

const Eyes2 = () => {
  const [rotate1, setRotate1] = useState(0);
  const [rotate2, setRotate2] = useState(0);
  const [pupilOffset1, setPupilOffset1] = useState({ x: 0, y: 0 });
  const [pupilOffset2, setPupilOffset2] = useState({ x: 0, y: 0 });

  const eyeRef1 = useRef(null);
  const eyeRef2 = useRef(null);
  const eyesContainerRef = useRef(null);

  const maxPupilOffset = 15; // Max movement range for the pupil

  useEffect(() => {
    const handleMouseMove = (e) => {
      const eyesContainerRect =
        eyesContainerRef.current.getBoundingClientRect();
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // Check if the mouse is within the bounds of the Eyes component
      if (
        mouseX >= eyesContainerRect.left &&
        mouseX <= eyesContainerRect.right &&
        mouseY >= eyesContainerRect.top &&
        mouseY <= eyesContainerRect.bottom
      ) {
        // Eye 1 calculations
        const eye1Rect = eyeRef1.current.getBoundingClientRect();
        let deltaX1 = mouseX - (eye1Rect.left + eye1Rect.width / 2);
        let deltaY1 = mouseY - (eye1Rect.top + eye1Rect.height / 2);
        const angle1 = Math.atan2(deltaY1, deltaX1) * (180 / Math.PI);
        setRotate1(angle1 - 180);

        // Pupil movement for Eye 1
        let pupilOffsetX1 = (deltaX1 / eye1Rect.width) * maxPupilOffset;
        let pupilOffsetY1 = (deltaY1 / eye1Rect.height) * maxPupilOffset;

        // Clamp pupil movement within the allowed range
        pupilOffsetX1 = Math.max(
          -maxPupilOffset,
          Math.min(maxPupilOffset, pupilOffsetX1)
        );
        pupilOffsetY1 = Math.max(
          -maxPupilOffset,
          Math.min(maxPupilOffset, pupilOffsetY1)
        );
        setPupilOffset1({ x: pupilOffsetX1, y: pupilOffsetY1 });

        // Eye 2 calculations
        const eye2Rect = eyeRef2.current.getBoundingClientRect();
        let deltaX2 = mouseX - (eye2Rect.left + eye2Rect.width / 2);
        let deltaY2 = mouseY - (eye2Rect.top + eye2Rect.height / 2);
        const angle2 = Math.atan2(deltaY2, deltaX2) * (180 / Math.PI);
        setRotate2(angle2 - 180);

        // Pupil movement for Eye 2
        let pupilOffsetX2 = (deltaX2 / eye2Rect.width) * maxPupilOffset;
        let pupilOffsetY2 = (deltaY2 / eye2Rect.height) * maxPupilOffset;

        // Clamp pupil movement within the allowed range
        pupilOffsetX2 = Math.max(
          -maxPupilOffset,
          Math.min(maxPupilOffset, pupilOffsetX2)
        );
        pupilOffsetY2 = Math.max(
          -maxPupilOffset,
          Math.min(maxPupilOffset, pupilOffsetY2)
        );
        setPupilOffset2({ x: pupilOffsetX2, y: pupilOffsetY2 });
      }
    };

    const eyesContainer = eyesContainerRef.current;
    eyesContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      eyesContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      ref={eyesContainerRef}
      className="bg-[#cdea68] eyes rounded-tl-3xl rounded-tr-3xl"
    >
      <div className=" h-full pb-28">
        <div className="relative ">
          <div className="pt-36 heading text-black text-[14vw] flex flex-col uppercase -tracking-[1rem] leading-[0.9] font-['Test Founder Grotesk Semibold'] font-semibold  ">
            <h2 className=" flex justify-center">ready</h2>
            <h2 className=" flex justify-center">to start</h2>
            <h2 className=" flex justify-center">the project ?</h2>
          </div>
          <div
            data-scroll
            data-scroll-section
            data-scroll-speed="-0.2"
            className="absolute top-[40%] flex gap-10  left-[36%] -translate-x-1/2 -translate-y-1/2 w-1/3"
          >
            <div
              ref={eyeRef1}
              className="flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-[#f1f1f1]"
            >
              <div
                className="relative w-[65%] h-[65%] rounded-full bg-[#212121]"
                style={{
                  transform: `translate(${pupilOffset1.x}px, ${pupilOffset1.y}px)`,
                }}
              >
                <div
                  style={{
                    transform: `translate(-50%,-50%) rotate(${rotate1}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10"
                >
                  {/* Inner white circle */}
                  <div
                    className="w-4 h-4 rounded-full bg-[#f1f1f1]"
                    style={{
                      transform: `rotate(${rotate1}deg)`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div
              ref={eyeRef2}
              className="flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-[#f1f1f1]"
            >
              <div
                className="relative w-[65%] h-[65%] rounded-full bg-[#212121]"
                style={{
                  transform: `translate(${pupilOffset2.x}px, ${pupilOffset2.y}px)`,
                }}
              >
                <div
                  style={{
                    transform: `translate(-50%,-50%) rotate(${rotate2}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10"
                >
                  {/* Inner white circle */}
                  <div
                    className="w-4 h-4 rounded-full bg-[#f1f1f1]"
                    style={{
                      transform: `rotate(${rotate2}deg)`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="btn flex flex-col h-full ">
            <div className="flex justify-center">
              <div className="buttons flex outline-none bg-[rgb(33,33,33)] border-[#212121]  rounded-[2rem] w-68 items-center mt-14 h-12 px-6 py-2">
                <button className=" uppercase font-['Test Founders Grotesk Semibold'] text-sm font-semibold mr-6">
                  start the project
                </button>
                <div className="h-2 w-2 rounded-full bg-[#f1f1f1]"></div>
              </div>
            </div>
            <h1 className="flex m-2  justify-center text-lg text-black uppercase font-['Test Founder Grotesk Semibold']">
              or
            </h1>

            <div className="flex justify-center">
              <div className="buttons flex bg-[#cdea68] border-2 border-[#212121] rounded-[2rem] w-68 items-center  h-12 px-6 py-2">
                <button
                  type="mail"
                  className=" uppercase font-['Test Founders Grotesk Semibold'] text-sm font-semibold text-[#212121] mr-6"
                >
                  hello@ochi.design
                </button>
                <div className="h-2 w-2 rounded-full bg-[#212121]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes2;
