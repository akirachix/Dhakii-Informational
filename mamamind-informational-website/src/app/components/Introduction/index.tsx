
'use client';
import React from 'react';
import Image from 'next/image';
import 'typeface-nunito';

export default function Homepage() {
  return (
    <main id='home'  className="flex flex-col lg:flex-row-reverse ipad:flex-col md:flex-row  justify-between items-center font-nunito px-4 sm:px-8 md:px-12  lg:px-24 mt-8 ">
        <Image
          src="/Images/Mother-pic.png"
          className=" object-cover md:w-5/12 lg:w-3/12 w-9/12"
          alt="Mother"mbmb-px
          width={500}
          height={400}
        />
      <div className="w-full md:w-1/2 ipad:w-full md:order-1 flex flex-col items-start mt-8 md:mt-0">
        <h1 className="font-extrabold text-5xl mb-12 text-left text-orange nest-hub:text-size-18 galaxy-fold:text-size-18">
          What is MamaMind?
        </h1>
        <p className="text-size-24 ipad:text-size-24 nest-hub:text-size-18 mt-4 text-left  galaxy-fold:text-size-18">
          MamaMind is an innovative mobile application that assists community health promoters in identifying and supporting mothers with Postpartum Depression
          (PPD) through a unique status tracker that monitors symptom severity over time, aiding in early detection and effective intervention.
        </p>
      </div>


    </main>
  );
}


