import { infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <div
      id="about"
      className=" w-full px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About me</h2>

      <div className="flex w-full flex-col  items-center gap-20 my-20">
        {/* <div>
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          /> 
        </div> */}
        <div className="flex-1 text-center">
          <p className="mb-10 max-w-2xl font-ovo">
            I am a Passionate Front-End Developer with a strong foundation in
            HTML, CSS, JavaScript, React.js and Next.js. Adept at creating
            responsive and user-friendly web applications with a keen eye for
            design and performance optimization. Excited to leverage my
            technical expertise and problem-solving skills to contribute to
            impactful web solutions.{' '}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl flex flex-col p-6 cursor-pointer items-center hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
                key={index}
              >
                <Image className="m-3 w-7" src={icon} alt={title} />
                <h3 className="my-3 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-ovo">Tools I use</h4>
          <ul className="flex items-center justify-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 "
                key={index}
              >
                <Image src={tool} alt="" className="w-7 sm:w-9" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
