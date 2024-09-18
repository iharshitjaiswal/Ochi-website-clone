import React from "react";

const Clients_review = () => {
  return (
    <div className="clients bg-[#f1f1f1]">
      <div className="heading border-b-[1px] text-black border-zinc-700 pl-6 pt-10 pb-6">
        <h1 className="font-['Founders Grotesk'] text-5xl -tracking-wides ml-6">
          Clients' reviews
        </h1>
      </div>

      <div className="reviews grid grid-cols-12 font-['Founders Grotesk'] text-black px-10 py-4 h-[60vh]">
        <div className="company capitalize col-span-3">
          <h1 className=" inline-block border-b-[1px]  border-black">
            karman ventures
          </h1>
        </div>
        <div className="services col-span-3">
          <h1 className="capitalize">services:</h1>
          <div className="flex flex-col mt-6">
            <button className="btn mt-6 rounded-3xl px-3 py-[1px] text-black font-['Founders Grotesk']  mr-1 uppercase border-zinc-700 border-[1.5px] tracking-tight w-max  text-sm font-normal">
              investor deck
            </button>
            <button className="btn mt-2 rounded-3xl px-3 py-[1px] text-black font-['Founders Grotesk']  mr-1 uppercase border-zinc-700 border-[1.5px] tracking-tight w-max text-sm font-normal">
              sales deck
            </button>
          </div>
        </div>
        <div className="name_and_review flex flex-col justify-between col-span-4">
          <div className="name capitalize">
            <h1>william barnes</h1>
          </div>
          <div className="paragraph mt-10">
            <img
              className="h-24 w-24 rounded-lg"
              src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
              alt=""
            />
            <p className="text-start tracking-tight">
              They were transparent about the time and the stages of the
              project. The end product is high quality, and I feel confident
              about how they were handholding the client through the process. I
              feel like I can introduce them to someone who needs to put a sales
              deck together from scratch, and they would be able to handhold the
              client experience from 0 to 100 very effectively from story to
              design. 5/5
            </p>
          </div>
        </div>
        <div className="button flex justify-end uppercase opacity-60 col-span-2">
          read
        </div>
      </div>
      <div className="reviews_list border-t-[1px] border-zinc-700 mt-4 font-['Founders Grotesk']">
        <div className="review px-14 py-4 text-black flex justify-between">
          <h1 className="capitalize border-b-[1px] border-zinc-800 inline-block ">
            planetly
          </h1>
          <h1 className="capitalize">nina walloch</h1>
          <h1 className="uppercase border-b-[1px] border-zinc-800 inline-block ">
            read
          </h1>
        </div>
        <div className="review px-14 py-4 text-black flex justify-between border-t-[0.5px] border-zinc-400">
          <h1 className="capitalize border-b-[1px] border-zinc-800 inline-block ">
            planetly
          </h1>
          <h1 className="capitalize">nina walloch</h1>
          <h1 className="uppercase border-b-[1px] border-zinc-800 inline-block ">
            read
          </h1>
        </div>
        <div className="review px-14 py-4 text-black flex justify-between border-t-[0.5px] border-zinc-400">
          <h1 className="capitalize border-b-[1px] border-zinc-800 inline-block ">
            planetly
          </h1>
          <h1 className="capitalize">nina walloch</h1>
          <h1 className="uppercase border-b-[1px] border-zinc-800 inline-block ">
            read
          </h1>
        </div>
        <div className="review px-14 py-4 text-black flex justify-between border-t-[0.5px] border-zinc-400">
          <h1 className="capitalize border-b-[1px] border-zinc-800 inline-block ">
            planetly
          </h1>
          <h1 className="capitalize">nina walloch</h1>
          <h1 className="uppercase border-b-[1px] border-zinc-800 inline-block ">
            read
          </h1>
        </div>
        <div className="review px-14 py-4 text-black flex justify-between border-t-[0.5px] border-zinc-400">
          <h1 className="capitalize border-b-[1px] border-zinc-800 inline-block ">
            planetly
          </h1>
          <h1 className="capitalize">nina walloch</h1>
          <h1 className="uppercase border-b-[1px] border-zinc-800 inline-block ">
            read
          </h1>
        </div>
        <div className="review px-14 py-4 text-black flex justify-between border-t-[0.5px] border-zinc-400">
          <h1 className="capitalize border-b-[1px] border-zinc-800 inline-block ">
            planetly
          </h1>
          <h1 className="capitalize">nina walloch</h1>
          <h1 className="uppercase border-b-[1px] border-zinc-800 inline-block ">
            read
          </h1>
        </div>
        <div className="review px-14 py-4 text-black flex justify-between border-t-[0.5px] border-zinc-400">
          <h1 className="capitalize border-b-[1px] border-zinc-800 inline-block ">
            planetly
          </h1>
          <h1 className="capitalize">nina walloch</h1>
          <h1 className="uppercase border-b-[1px] border-zinc-800 inline-block ">
            read
          </h1>
        </div>
        <div className="review px-14 py-4 text-black flex justify-between border-t-[0.3px] border-b-[0.3px] border-zinc-400">
          <h1 className="capitalize border-b-[1px] border-zinc-800 inline-block ">
            planetly
          </h1>
          <h1 className="capitalize">nina walloch</h1>
          <h1 className="uppercase border-b-[1px] border-zinc-800 inline-block ">
            read
          </h1>
        </div>
      </div>
      <div className="grid gap-15 sm:grid-cols-12  mt-24 px-14 h-screen gap-2">
        <div className="relative div1 h-[58vh]  col-span-6 bg-[rgba(0,77,67)] rounded-xl flex flex-col">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              className="h-16"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />
          </div>
          <div className="absolute right-0 bottom-0 left-0 mb-8 ml-8">
            <button className=" px-3 py-1 border-[#cdea68] border-[0.5px] rounded-3xl text-[#dcea68] text-sm">
              ©2019-2022
            </button>
          </div>
        </div>
        <a className="relative div1 h-[58vh]  col-span-3 bg-[rgb(33,33,33)] rounded-xl flex flex-col">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              className="h-20"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
          </div>
          <div className="absolute right-0 bottom-0 left-0 mb-8 ml-8">
            <button className="uppercase px-3 py-1 border-[#fff] border-[0.5px] rounded-3xl text-white text-sm font-['Founders Grotesk']">
              rating 5.0 on clutch
            </button>
          </div>
        </a>
        <a className="relative div1 h-[58vh]  col-span-3 bg-[rgb(33,33,33)] rounded-xl flex flex-col">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              className="h-24"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
            />
          </div>
          <div className="absolute right-0 bottom-0 left-0 mb-8 ml-8">
            <button className="uppercase px-3 py-1 border-[#fff] border-[0.5px] rounded-3xl text-[#fff] text-sm font-['Founders Grotesk']">
              business bootcamp alumini
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Clients_review;
