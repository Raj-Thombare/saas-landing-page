import React from "react";
import XIcon from "../assets/icons/x-social.svg";
import InstaIcon from "../assets/icons/insta.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";

const Footer = () => {
  return (
    <footer className='py-5 bg-black text-white/60'>
      <div className='container'>
        <div className='flex flex-col gap-4 sm:flex-row sm:justify-between'>
          <div className='text-center'>
            © 2025
            <a
              href='https://rajthombare.xyz'
              target='_blank'
              className='hover:underline underline-offset-2 ml-2'>
              Raj Thombare
            </a>
            , Inc. All rights reserved
          </div>
          <ul className='flex justify-center gap-2.5'>
            <li>
              <XIcon />
            </li>
            <li>
              <InstaIcon />
            </li>
            <li>
              <YoutubeIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
