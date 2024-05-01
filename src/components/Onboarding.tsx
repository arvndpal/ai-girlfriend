'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Onboarding = () => {
  const router = useRouter();
  const gfs = ['g2.png', 'g3.png', 'g4.png', 'g5.png'];
  const [details, setDetails] = useState({
    name: '',
    gfName: '',
  });

  const [selectedGF, setSelectedGf] = useState('g2.png');
  const [error, setError] = useState('');
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setDetails({
      ...details,
      [name]: value,
    });
    localStorage.setItem(name, value);
  };

  const navigate = () => {
    const { name, gfName } = details;
    if (name.trim() && gfName.trim()) {
      router.push('/chat');
    } else {
      setError('Both names are required.');
    }
  };

  useEffect(() => {
    const imgFromLocalstorage = localStorage.getItem('selectedGf');
    if (imgFromLocalstorage) {
      setSelectedGf(imgFromLocalstorage);
    }
  }, []);
  return (
    <div className="flex justify-center   bg-gradient-to-r from-teal-200 to-teal-500 h-screen">
      <div
        className="flex-col flex-center  w-4/5  h-96 bg-cover mt-44 "
        style={{
          backgroundImage: "url('/assets/images/form-bg.png')",
        }}
      >
        <div className="p-2 w-1/2">
          <div className=" flex-col">
            <div>Your Name</div>{' '}
            <div>
              <input
                name="name"
                type="text"
                className="rounded-md p-2  outline-none w-full"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className=" flex-col mt-5">
            <div>Girl friend Name</div>{' '}
            <div>
              <input
                name="gfName"
                type="text"
                className="rounded-md p-2  outline-none w-full"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div>{error && <div className="text-red-600">{error}</div>}</div>

        <div className="flex gap-10 mt-5">
          {gfs.map((gf) => (
            <Image
              key={gf}
              src={`/assets/images/girls/${gf}`}
              alt="my girlfriend"
              width={80}
              height={80}
              onClick={() => {
                setSelectedGf(gf);
                localStorage.setItem('selectedGf', gf);
              }}
              className={`rounded-full border-4 cursor-pointer ${
                selectedGF === gf ? 'border-red-600' : ''
              } `}
            />
          ))}
        </div>
        <div className="">
          <div
            onClick={navigate}
            className="mt-16   text bg-white text-black rounded-full font-semibold px-24 py-2 cursor-pointer hover:bg-teal-600 hover:text-white "
          >
            Start Chat
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
