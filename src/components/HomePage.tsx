'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const Home = () => {
  const router = useRouter();
  return (
    <div
      className="bg-cover h-screen  w-full   "
      style={{
        backgroundImage: "url('/assets/images/aig-bg.jpg')",
      }}
    >
      <div className=" text-white relative ">
        <div className="max-sm:ml-36 mt-10  ml-28 text-2xl font-semibold absolute">
          mygirlfriend.ai
        </div>
        <div className="flex flex-center">
          <div
            className="     bg-cover h-screen  w-full  flex-col flex-center"
            style={{
              backgroundImage: "url('/assets/images/girls/avatar.webp')",
              height: 600,
              width: 600,
            }}
          >
            <div className="max-sm:hidden text-4xl font-bold">
              My Girfriend: Virtual AI Girlfriend
            </div>

            <div className="sm:hidden flex-center flex flex-col text-2xl font-bold">
              <div>My Girfriend:</div>
              <div>Virtual AI Girlfriend</div>
            </div>
            <div className="mt-5 align-middle text-[20px] text-center px-5">
              The most advanced romance chatbot you&apos;ve ever talked to. Fun
              and flirty dating simulator with no strings attached. Engage in a
              friendly chat, roleplay, grow your love & relationship skills.
            </div>
            <div
              onClick={() => {
                router.push('/onboarding');
              }}
              className="mt-10 align-middle text bg-white text-black rounded-full font-semibold px-24 py-2 cursor-pointer hover:bg-teal-600 hover:text-white "
            >
              Countinue
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
