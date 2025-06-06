import React from "react";

const Banner = () => {
  return (
    <div className='py-3 text-center bg-[linear-gradient(to_right,rgb(252,_214,_255,_0.7),rgb(41,_216,_255,_0.7),rgb(255,_253,_128,_0.7),rgb(248,_154,_191,_0.7),rgb(252,_214,_255,_0.7))]'>
      <div className='container'>
        <span className='font-medium'>
          <p className='hidden sm:inline'>
            Introducing a completely redesigned interface -
          </p>
          <a href='#' className='underline  underline-offset-4'>
            Explore the demo
          </a>
        </span>
      </div>
    </div>
  );
};

export default Banner;
