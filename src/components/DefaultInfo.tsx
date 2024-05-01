import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function DefaultInfo() {
  const [selectedGF, setSelectedGf] = useState('g2.png');
  const [gfName, setGFName] = useState('');

  useEffect(() => {
    const imgFromLocalstorage = localStorage.getItem('selectedGf');
    const gfNameFromLocalstorage = localStorage.getItem('gfName');
    if (imgFromLocalstorage) {
      setSelectedGf(imgFromLocalstorage);
    }

    if (gfNameFromLocalstorage) {
      setGFName(gfNameFromLocalstorage);
    }
  }, []);
  return (
    <div>
      <div className="   relative ">
        <Image
          src={`/assets/images/girls/${selectedGF}`}
          alt="my girlfriend"
          width={420}
          height={350}
        />
        <div className="eamPqJ -mt-[75px]"></div>
      </div>
      <div className="font-bold text-center mt-5 text-[25px]">{gfName}</div>
    </div>
  );
}

export default DefaultInfo;
