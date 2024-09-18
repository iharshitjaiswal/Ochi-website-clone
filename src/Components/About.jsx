import React from "react";
import { GoDotFill } from "react-icons/go";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-0.06"
      className="w-full bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl rounded-b-3xl text-[#212121]"
    >
      {/* Main Heading */}
      <h1 className="pt-20 pl-12 pr-28 mb-16 font-['Founders Grotesk Semibold'] text-[4vw] leading-[4vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to <span className="underline">raise funds</span>,&nbsp;
        <span className="underline">sell products</span>,&nbsp;
        <span className="underline">explain complex ideas</span>, and&nbsp;
        <span className="underline">hire great people</span>.
      </h1>

      {/* Content Section */}
      <div className="border-t-[1px] border-black mt-4">
        <div className="h-[50vh] grid grid-cols-4 gap-4 px-8 pt-4 pb-20">
          <div className="col-span-2">
            <p className="font-semibold">What you can expect:</p>
          </div>
          <div className="flex flex-col justify-between px-4">
            <p>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it's live or digital,
              delivered for one or a hundred people.
            </p>
            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="flex flex-col justify-end ml-20">
            <p className="font-semibold">S:</p>
            <br />
            <p className="underline">Instagram</p>
            <p className="underline">Behance</p>
            <p className="underline">Facebook</p>
            <p className="underline">LinkedIn</p>
          </div>
        </div>
      </div>

      {/* Bottom Section with Image and Button */}
      <div className="border-t-[1px] border-black flex px-8 pb-8 pt-4 w-full">
        <div className="w-1/2 px-2">
          <h1 className="text-[4vw] tracking-tighter font-semibold">
            Our approach:
          </h1>
          <button className="flex bg-black px-6 py-3 rounded-3xl text-white justify-between items-center uppercase w-[32vw] md:w-44 lg:w-44">
            <p className="font-['PP Mori'] text-base">read more</p>
            <GoDotFill />
          </button>
        </div>
        <div>
          <img
            className="rounded-2xl w-[100%] h-auto" // Ensures image takes full width and adjusts height accordingly
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="Ochi presentation"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
