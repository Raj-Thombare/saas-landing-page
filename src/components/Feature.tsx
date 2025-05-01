"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const Feature = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactElement;
}) => {
  const border = useRef<HTMLDivElement>(null);

  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      key={title}
      className='border border-white/30 px-5 py-10 text-center rounded-lg sm:flex-1 relative'>
      <motion.div
        ref={border}
        className='absolute inset-0 border-2 border-purple-400 rounded-lg'
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}></motion.div>
      <div className='inline-flex h-14 w-14 text-black bg-white justify-center items-center rounded-lg'>
        {icon}
      </div>
      <h3 className='mt-6 font-bold'>{title}</h3>
      <p className='mt-2 text-white/70'>{description}</p>
    </div>
  );
};

export default Feature;
