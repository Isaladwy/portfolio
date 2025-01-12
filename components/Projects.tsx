import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Projects() {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">My latest projects</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my experties in front-end development.
      </p>

      <div className="grid grid-cols-auto my-10 gap-5">
        {workData.map((project, index) => (
          <Link
            href={project.link}
            target="_blank"
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white border border-gray-500 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex justify-between items-center duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 h-9 aspect-square flex justify-center items-center shadow-[2px_2px_0_#000] group-hover:bg-gray-200 transition">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="https://github.com/Isaladwy"
        target="_blank"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500"
      >
        View Codes{' '}
        <Image
          src={assets.right_arrow_bold}
          alt="arrow right"
          className="w-4"
        />
      </Link>
    </div>
  );
}