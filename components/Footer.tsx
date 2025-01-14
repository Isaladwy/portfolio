import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className="mt-20">
      <div className="text-center ">
        <Image
          src={isDarkMode ? assets.logo_white : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />

        <Link
          href="mailto:Isaladwy@gmail.com"
          target="_blank"
          className="flex w-max items-center gap-2 mx-auto"
        >
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-8 "
          />
          Isaladwy@gmail.com
        </Link>
      </div>

      <div className="text-center mt-12 sm:flex items-center justify-between border-t mx-[10%] border-gray-400 py-6">
        <p>
          &copy; {new Date().getFullYear()} Islam Aladwy. All rights reserved.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <Link
              href="https://www.linkedin.com/in/isaladwy/"
              target="_blank"
              className="flex gap-2"
            >
              <Image src={assets.linkedin} alt="" className="w-8 h-8 " />
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/Isaladwy"
              target="_blank"
              className="flex gap-2"
            >
              <Image src={assets.github} alt="" className="w-8 h-8 " />
              GitHub
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
