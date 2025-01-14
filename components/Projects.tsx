import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'motion/react';

export default function Projects({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center text-5xl font-ovo"
      >
        My latest projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my experties in front-end development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto my-10 gap-5"
      >
        {workData.map((project, index) => (
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            href={project.link}
            target="_blank"
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white border border-gray-500 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex justify-between items-center duration-500 group-hover:bottom-7">
              <div>
                <h2 className="text-black font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 h-9 aspect-square flex justify-center items-center shadow-[2px_2px_0_#000] group-hover:bg-gray-200 transition">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href="https://github.com/Isaladwy"
        target="_blank"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:border-white dark:text-white dark:hover:bg-darkSideNav"
      >
        Check Code{' '}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="arrow right"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
}
