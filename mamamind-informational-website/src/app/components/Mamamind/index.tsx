"use client";
import React from "react";

const sections = [
  {
    id: "exercise",
    imageSrc: "/images/explore.png",
    altText: "Explore image",
    title: "Explore MamaMind",
    description:
      "Choose from our comprehensive care guides covering a range of topics to support and enhance your postpartum journey.",
  },
  {
    id: "vision",
    imageSrc: "/images/mental.png",
    altText: "Exercise image",
    title: "Try Exercising",
    description:
      "Enhance your exercise routine with MamaMind’s exercise tips for improved focus and concentration.",
  },
  {
    id: "goal",
    imageSrc: "/images/exercises.png",
    altText: "Experience Image",
    title: "Experience MamaMind",
    description:
      "Utilize our EPDS scale for expert support and personalized guidance throughout your postpartum journey.",
  },
];

export default function AboutUs() {
  return (
    <main className="my-12  mt-[300px] font-nunito mx-auto px-6 sm:px-6 lg:px-24 ">
      <h1 className="font-extrabold text-5xl mb-12 text-left text-orange nest-hub:text-size-18 galaxy-fold:text-size-18 ">
        Features of MamaMind
      </h1>
      <div className="flex flex-col ipad:flex-col sm:flex-row gap-8 ipad:gap-8 sm:gap-12">
        {sections.map(({ id, imageSrc, altText, title, description }) => (
          <div
            key={id}
            className="flex flex-col items-center  ipad:text-start sm:text-left nest-hub:text-size-18"
          >
            <div className="w-32 h-32 ipad:w-32 ipad:h-32 sm:w-44 sm:h-44 mb-4">
              <img
                src={imageSrc}
                alt={altText}
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-blue font-extrabold text-size-24 nest-hub:text-size-18 galaxy-fold:text-size-18 ">
              {title}
            </h2>
            <p className="text-size-24 nest-hub:text-size-18 galaxy-fold:text-size-18 ">
              {description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
