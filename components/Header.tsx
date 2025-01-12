import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      {/* <div>
        <Image
          src={assets.profile_img}
          alt="Profile Image"
          className="rounded-full w-32"
        />
      </div> */}
      <h3 className="flex gap-2 items-center text-xl md:text-2xl mb-3 font-ovo">
        Hi! I&apos;m Islam Aladwy{' '}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        frontend web developer based in Alexandria.
      </h1>
      <p>
        A Knowledge admirer, creative thinker, and fast learner with excellent
        reputation for resolving problems.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Link
          href="#contact"
          className="px-10 py-3 border border-white rounded-full flex items-center gap-2 bg-black text-white"
        >
          Contact me{' '}
          <Image
            src={assets.right_arrow_white}
            alt="Profile Image"
            className="rounded-full w-4"
          />
        </Link>
        <Link
          href="/Islam_Aladwy_Resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My resume{' '}
          <Image
            src={assets.download_icon}
            alt="Profile Image"
            className="rounded-full w-4"
          />
        </Link>
      </div>
    </div>
  );
}
