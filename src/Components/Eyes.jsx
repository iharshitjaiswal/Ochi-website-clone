// import React, { useEffect, useState, useRef } from "react";

// const Eyes = () => {
//   const [rotate1, setRotate1] = useState(0);
//   const [rotate2, setRotate2] = useState(0);
//   const [pupilOffset1, setPupilOffset1] = useState({ x: 0, y: 0 });
//   const [pupilOffset2, setPupilOffset2] = useState({ x: 0, y: 0 });

//   const eyeRef1 = useRef(null);
//   const eyeRef2 = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       let mouseX = e.clientX;
//       let mouseY = e.clientY;

//       // Eye 1 calculations
//       const eye1Rect = eyeRef1.current.getBoundingClientRect();
//       let deltaX1 = mouseX - (eye1Rect.left + eye1Rect.width / 2);
//       let deltaY1 = mouseY - (eye1Rect.top + eye1Rect.height / 2);
//       var angle1 = Math.atan2(deltaY1, deltaX1) * (180 / Math.PI);
//       setRotate1(angle1 - 180);

//       // Pupil movement for Eye 1 (limited to a small range)
//       let pupilOffsetX1 = (deltaX1 / window.innerWidth) * 40; // Adjust 20 for more or less movement
//       let pupilOffsetY1 = (deltaY1 / window.innerHeight) * 40;
//       setPupilOffset1({ x: pupilOffsetX1, y: pupilOffsetY1 });

//       // Eye 2 calculations
//       const eye2Rect = eyeRef2.current.getBoundingClientRect();
//       let deltaX2 = mouseX - (eye2Rect.left + eye2Rect.width / 2);
//       let deltaY2 = mouseY - (eye2Rect.top + eye2Rect.height / 2);
//       var angle2 = Math.atan2(deltaY2, deltaX2) * (180 / Math.PI);
//       setRotate2(angle2 - 180);

//       // Pupil movement for Eye 2 (limited to a small range)
//       let pupilOffsetX2 = (deltaX2 / window.innerWidth) * 40;
//       let pupilOffsetY2 = (deltaY2 / window.innerHeight) * 40;
//       setPupilOffset2({ x: pupilOffsetX2, y: pupilOffsetY2 });
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="eyes w-full h-screen overflow-hidden">
//       <div
//         className="
//       relative w-full h-full bg-cover bg-center
//       bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]
//     "
//       >
//         <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/3">
//           <div
//             ref={eyeRef1}
//             className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-[#f1f1f1]"
//           >
//             <div
//               className="relative w-3/5 h-3/5 rounded-full bg-black"
//               style={{
//                 transform: `translate(${pupilOffset1.x}px, ${pupilOffset1.y}px)`,
//               }}
//             >
//               <div
//                 style={{
//                   transform: `translate(-50%,-50%) rotate(${rotate1}deg)`,
//                 }}
//                 className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
//               >
//                 <div className="w-4 h-4 rounded-full bg-white"></div>
//               </div>
//             </div>
//             <div className="absolute uppercase text-lg z-40 top-1/2 left-1/2 -translate-x-[30%] -translate-y-[50%] w-full h-10">
//               Play
//             </div>
//           </div>
//           <div
//             ref={eyeRef2}
//             className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white"
//           >
//             <div
//               className="relative w-3/5 h-3/5 rounded-full bg-black"
//               style={{
//                 transform: `translate(${pupilOffset2.x}px, ${pupilOffset2.y}px)`,
//               }}
//             >
//               <div
//                 style={{
//                   transform: `translate(-50%,-50%) rotate(${rotate2}deg)`,
//                 }}
//                 className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
//               >
//                 <div className="w-4 h-4 rounded-full bg-white"></div>
//               </div>
//             </div>
//             <div className="absolute uppercase text-lg z-50 top-1/2 left-1/2 -translate-x-[-20%] -translate-y-[50%] w-full h-10">
//               Play
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Eyes;

import React, { useEffect, useState, useRef } from "react";

const Eyes = () => {
  const [rotate1, setRotate1] = useState(0);
  const [rotate2, setRotate2] = useState(0);
  const [pupilOffset1, setPupilOffset1] = useState({ x: 0, y: 0 });
  const [pupilOffset2, setPupilOffset2] = useState({ x: 0, y: 0 });

  const eyeRef1 = useRef(null);
  const eyeRef2 = useRef(null);
  const eyesContainerRef = useRef(null);

  const maxPupilOffset = 20; // Max movement range for the pupil

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
      ref={eyesContainerRef}
      className="eyes w-full h-screen overflow-hidden bg-[#f1f1f1]"
    >
      <div
        data-scroll
        data-scroll-speed="-0.2s"
        className="
      relative bg-[#f1f1f1] w-full h-full bg-cover bg-center 
      bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]
    "
      >
        <div
          data-scroll
          data-scroll-speed="0.1"
          className="absolute flex gap-10 top-1/3 left-1/3 -translate-x-[50%] -translate-y-[50%] w-1/3"
        >
          <div
            ref={eyeRef1}
            className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-[#f1f1f1]"
          >
            <div
              className="relative w-3/5 h-3/5 rounded-full bg-black"
              style={{
                transform: `translate(${pupilOffset1.x}px, ${pupilOffset1.y}px)`,
              }}
            >
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate1}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
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
            <div className="absolute uppercase text-lg z-40 top-1/2 left-1/2 -translate-x-[30%] -translate-y-[50%] w-full h-10">
              Play
            </div>
          </div>
          <div
            ref={eyeRef2}
            className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-[#f1f1f1]"
          >
            <div
              className="relative w-3/5 h-3/5 rounded-full bg-black"
              style={{
                transform: `translate(${pupilOffset2.x}px, ${pupilOffset2.y}px)`,
              }}
            >
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate2}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
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
            <div className="absolute uppercase text-lg z-50 top-1/2 left-1/2 -translate-x-[-20%] -translate-y-[50%] w-full h-10">
              Play
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
