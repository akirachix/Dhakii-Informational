"use client";
import Image from "next/image";
import React from "react";

const sections = [
  {
    id: "mission",
    imageSrc: "/images/mission_icon.png",
    altText: "Mission icon",
    title: "Mission",
    text: "Our mission is to provide a trusted and comprehensive platform that equips community health workers with the necessary resources to identify, support, and monitor mothers at risk of postpartum depression (PPD).",
  },
  {
    id: "vision",
    imageSrc: "/images/vision_icon.png",
    altText: "Vision icon",
    title: "Vision",
    text: "To empower community health workers with innovative tools and resources, fostering early intervention and improved mental health outcomes for mothers at risk of postpartum depression, ultimately enhancing the well-being of families.",
  },
  {
    id: "goal",
    imageSrc: "/images/goal_icon.png",
    altText: "Goal icon",
    title: "Goal",
    text: "To enhance the mental health and well-being of mothers in low-resource areas of Kenya by effectively addressing and mitigating postpartum depression.",
  },
];

export default function AboutUs() {
  return (
    <main className="my-12 mt-[100px] font-nunito mx-auto px-6 sm:px-6 lg:px-24">
      {" "}
      {/* Increased margin-top to 350px */}
      <h1 className="font-extrabold text-5xl mb-12 text-orange nest-hub:text-size-18 ">
        About Us
      </h1>
      <div className="flex flex-col ipad:flex-col mb-20 sm:flex-row gap-8 ipad:gap-8 sm:gap-12">
        {sections.map(({ id, imageSrc, altText, title, text }) => (
          <div
            key={id}
            className="flex flex-col items-center text-center ipad:items-center ipad:text-start sm:items-start sm:text-left nest-hub:text-size-18"
          >
            <div className="w-28 h-28 ipad:w-28 ipad:h-28 sm:w-36 sm:h-36 mt-[15px] mb-4">
              <img
                src={imageSrc}
                alt={altText}
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-blue font-extrabold text-size-24 mb-2 nest-hub:text-size-18 galaxy-fold:text-size-18 ">
              {title}
            </h2>
            <p className="text-size-24 text-left ipad:text-start nest-hub:text-size-18">
              {text}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
