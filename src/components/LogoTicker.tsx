"use client";

import React from "react";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

const LogoTicker = () => {
  return (
    <div className='bg-black text-white py-[72px] sm:py-24'>
      <div className='container'>
        <h2 className='text-xl text-center text-white/70'>
          Trusted by the world&apos;s most innovative teams
        </h2>
        <div className='relative overflow-hidden mt-9'>
          <div className='pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10' />
          <div className='pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10' />
          <motion.div
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className='flex gap-16 flex-none pr-16'>
            {images.map(({ src, alt }, index) => (
              <Image
                className='flex-none h-8 w-auto'
                key={`${alt}-${index}`}
                src={src}
                alt={alt}
              />
            ))}
            {images.map(({ src, alt }, index) => (
              <Image
                className='flex-none h-8 w-auto'
                key={`${alt}-${index}`}
                src={src}
                alt={alt}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
