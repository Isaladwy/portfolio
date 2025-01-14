import { infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

export default function About({
  isDarkMode,
}: Readonly<{ isDarkMode: boolean }>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className=" w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col items-center gap-20 my-20"
      >
        {/* <div>
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          /> 
        </div> */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1 text-center"
        >
          <p className="mb-10 px-2 max-w-2xl font-ovo">
            I am a Passionate Front-End Developer with a strong foundation in
            HTML, CSS, JavaScript, React.js and Next.js. Adept at creating
            responsive and user-friendly web applications with a keen eye for
            design and performance optimization. Excited to leverage my
            technical expertise and problem-solving skills to contribute to
            impactful web solutions.{' '}
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl px-1"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="border-[0.5px] border-gray-400 rounded-xl flex flex-col p-6 cursor-pointer items-center hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:bg-darkSideNav dark:hover:shadow-white "
                key={index}
              >
                <Image
                  className="m-3 w-7"
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                />
                <h3 className="dark:text-white my-3 font-semibold text-gray-700">
                  {title}
                </h3>
                <p className="dark:text-white/80 text-gray-600 text-sm">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-6 dark:text-white text-gray-700 font-ovo"
          >
            Tools I use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="flex items-center justify-center gap-2 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 "
                key={index}
              >
                <Image src={tool} alt="" className="w-7 sm:w-9" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
