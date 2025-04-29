import React from "react";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";

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
    <div className='bg-black text-white py- py-[72px] sm:py-24'>
      <div className='container'>
        <h2 className='text-xl text-center text-white/70'>
          Trusted by the world&apos;s most innovative teams
        </h2>
        <div className='overflow-hidden mt-9 before:content-[""] after:content-[""] before:absolute after:absolute relative before:w-4 after:w-4 before:h-full after:h-full before:right-0 after:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))]'>
          <div className='flex gap-16 justify-center animate-marquee w-max'>
            {[...images, ...images].map(({ src, alt }, index) => (
              <Image
                className='flex-none h-8 w-auto'
                key={`${alt}-${index}`}
                src={src}
                alt={alt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
