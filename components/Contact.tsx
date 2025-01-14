'use client';
import { assets, web3forms } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const [result, setResult] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult('Sending....');
    const formData = new FormData(e.target);

    formData.append('access_key', web3forms.key);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      e.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    //bg-[url('/footer-bg-color.png')]
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20  bg-no-repeat bg-[length:90%_auto] bg-center"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center text-5xl font-ovo"
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center max-w-3xl mx-auto mt-5 mb-12 font-ovo"
      >
        I&apos;d love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto "
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8 ">
          <motion.input
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="text"
            required
            name="name"
            placeholder="Enter your name"
            className=" flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkSideNav dark:border-white/90"
          />
          <motion.input
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            type="email"
            required
            name="email"
            placeholder="Enter your email"
            className="dark:bg-darkSideNav dark:border-white/90 flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>
        <motion.textarea
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          rows={6}
          name="message"
          placeholder="Enter your message"
          required
          className="dark:bg-darkSideNav dark:border-white/90 w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          {...(result && { disabled: true })}
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkSideNav "
        >
          {result ? (
            <>
              {result}

              {setTimeout(() => {
                setResult('');
              }, 10000) && null}
            </>
          ) : (
            <>
              Submit now
              <Image src={assets.right_arrow_white} alt="" className="w-4" />
            </>
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
