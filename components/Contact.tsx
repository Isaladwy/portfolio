'use client';
import { assets, web3forms } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

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
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center"
    >
      <h4 className="text-center mb-2 text-lg font-ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-ovo">Get in touch</h2>

      <p className="text-center max-w-3xl mx-auto mt-5 mb-12 font-ovo">
        I&apos;d love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto ">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8 ">
          <input
            type="text"
            required
            name="name"
            placeholder="Enter your name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Enter your email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>
        <textarea
          rows={6}
          name="message"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
        ></textarea>

        <button
          type="submit"
          {...(result && { disabled: true })}
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
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
        </button>
      </form>
    </div>
  );
}
