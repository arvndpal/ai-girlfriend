'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import DefaultInfo from './DefaultInfo';
import SettingInfo from './SettingsInfo';
const data = [
  {
    text: ` Do you have any pets? I have a cat named Daisy, and I love her so
    much! Do you have any pets? I have a cat named Daisy, and I love her
    so Do you have any pets? I have a cat named Daisy, and I love her so
    much! Do you have any pets? I have a cat named Daisy, and I love her
    so`,
  },

  {
    text: ` Do you have any pets? I have a cat named Daisy, and I love her so
    much!`,
  },
  {
    text: ` Do you have any pets? I have a cat named Daisy, and I love her so
    much!`,
  },
  {
    text: ` Do you have any pets? I have a cat named Daisy, and I love her so
    much!`,
  },

  {
    text: ` Do you have any pets? I have a cat named Daisy, and I love her so
    much!`,
  },
  {
    text: ` Do you have any pets? I have a cat named Daisy, and I love her so
    much!`,
  },
  {
    text: ` Do you have any pets? I have a cat named Daisy, and I love her so
    much!`,
  },
  {
    text: ` Do you have any pets? I have a cat named Daisy, and I love her so
    much!`,
  },

  {
    text: ` Do you have any pets? I have a cat named Daisy, and I love her so
    much!`,
  },
  {
    text: ` Do you have any pets? I have a cat named Daisy, and I love her so
    much!`,
  },

  {
    text: ` Do you have any pets? I have a cat named Daisy, and I love her so
    much!`,
  },
  {
    text: ` Do you have any pets? I have a cat named Daisy, and I love her so
    much!`,
  },
  {
    text: ` Do you have any pets? I have a cat named Daisy, and I love her so
    much!`,
  },
  {
    text: ` Do you have any pets? I have a cat named Daisy, and I love her so
    much!`,
  },

  {
    text: ` Do you have any pets? I have a cat named Daisy, and I love her so
    much!`,
  },
];
const ChatPage = () => {
  const [chats, setChats] = useState(data);
  const [value, setValue] = useState('');
  const handleSend = () => {
    if (value.trim()) {
      scroll();
      setChats([...chats, { text: value }]);
      setValue('');
    }
  };

  const scroll = () => {
    const section = document.querySelector('#last');
    section?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  const [isDefault, setIsDefault] = useState(true);
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    scroll();
  }, []);
  return (
    <div className="flex h-screen ">
      <div className="max-sm:hidden  w-[400px] bg-gray-100 p-4  ">
        {isDefault && (
          <>
            <div className="flex  " onClick={() => setIsDefault(false)}>
              <Image
                src="/assets/icons/hamburger.svg"
                alt="search"
                width={24}
                height={24}
                className="cursor-pointer"
              />{' '}
              <div className="ml-2 cursor-pointer">Settings</div>
            </div>
            <DefaultInfo />
          </>
        )}

        {!isDefault && (
          <>
            <div className="flex  " onClick={() => setIsDefault(true)}>
              <Image
                src="/assets/icons/backarrow.svg"
                alt="search"
                width={24}
                height={24}
                className="cursor-pointer"
              />{' '}
              <div className="ml-2 cursor-pointer">Back</div>
            </div>
            <SettingInfo />
          </>
        )}
      </div>
      {!isMenu && (
        <div className=" grow bg-teal-100 ">
          <div className="h-screen flex flex-col justify-between">
            <div className="max-sm:hidden flex flex-center  bg-gradient-to-b from-teal-400 to-teal-200 h-24">
              <div className="bg-white rounded-full px-5 py-2 font-semibold  text-red-600   mt-5 mb-5">
                Level 1
              </div>
            </div>
            <div className="sm:hidden flex  bg-gradient-to-b from-teal-400 to-teal-200 h-24">
              <div
                className="flex  "
                onClick={() => {
                  setIsDefault(true);
                  setIsMenu(true);
                }}
              >
                <Image
                  src="/assets/icons/hamburger.svg"
                  alt="search"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />{' '}
                <div className="ml-2 cursor-pointer flex justify-center items-center">
                  Menu
                </div>
              </div>
              <div className="bg-white rounded-full px-5 py-2 font-semibold  text-red-600 ml-32  mt-5 mb-5">
                Level 1
              </div>
            </div>
            <div className="bg-teal-200 grow overflow-y-scroll px-4">
              <div className="flex flex-col">
                {chats.map((d, i) => (
                  <div key={i} className="w-full">
                    <div
                      className={`max-sm:rounded-2xl rounded-3xl  py-1.5 px-5  mt-4 max-sm:max-w-96  max-w-2xl  ${
                        i % 2 === 0
                          ? 'float-right bg-gray-600 text-white'
                          : 'float-left bg-white'
                      }`}
                    >
                      {d?.text}
                    </div>
                    {i % 2 === 0 ? (
                      <div
                        className={`  w-full -mt-3 float-right bg-gray-600 text-white`}
                        style={{
                          clipPath: 'polygon(100% 50%, 97% 51%, 98% 0%)',
                        }}
                      >
                        .
                      </div>
                    ) : (
                      <div
                        className={`  w-full -mt-3 float-left bg-white text-white`}
                        style={{ clipPath: 'polygon(3% 50%, 0px 60%, 2% 8%)' }}
                      >
                        .
                      </div>
                    )}
                  </div>
                ))}
                <div id="last" className="h-16"></div>
              </div>
            </div>
            <div className="bg-white p-5 flex">
              <input
                type="text"
                placeholder="Type here..."
                className="px-5 py-4 outline-none w-11/12"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                  console.log(e);
                  if (e.key === 'Enter') handleSend();
                }}
              />
              <div
                className="  max-sm:-ml-10 y-2 px-4 h-8 mt-3 text-white cursor-pointer "
                onClick={handleSend}
              >
                <Image
                  src="/assets/icons/send.svg"
                  alt="search"
                  width={28}
                  height={28}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {isMenu && (
        <div className="sm:hidden w-full">
          <div
            className=" flex p-4 w-full  bg-gradient-to-b from-teal-400 to-teal-200  "
            onClick={() => setIsMenu(false)}
          >
            <Image
              src="/assets/icons/backarrow.svg"
              alt="search"
              width={24}
              height={24}
              className="cursor-pointer"
            />{' '}
            <div className="ml-2 cursor-pointer">Back</div>
          </div>
          <div className="p-4">
            <DefaultInfo />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPage;
