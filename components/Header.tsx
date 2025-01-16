import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto mb-20 pb-10 pt-40 flex flex-col items-center justify-center gap-4">
      {/* <div>
        <Image
          src={assets.profile_img}
          alt="Profile Image"
          className="rounded-full w-32"
        />
      </div> */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex gap-2 items-center text-xl md:text-2xl mb-3 font-ovo "
      >
        Hi! I&apos;m Islam Aladwy{' '}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-ovo"
      >
        frontend web developer based in Alexandria.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-ovo"
      >
        A Knowledge admirer, creative thinker, and fast learner with excellent
        reputation for resolving problems.
      </motion.p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full flex items-center gap-2 bg-black text-white dark:bg-transparent dark:hover:bg-darkSideNav  "
        >
          Contact me{' '}
          <Image
            src={assets.right_arrow_white}
            alt="Profile Image"
            className="rounded-full w-4 "
          />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Islam_Aladwy_Software.pdf"
          target="_blank"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-white dark:text-black"
        >
          My resume{' '}
          <Image
            src={assets.download_icon}
            alt="Profile Image"
            className="rounded-full w-4"
          />
        </motion.a>
      </div>
    </div>
  );
}
