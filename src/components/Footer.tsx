import React from "react";
import XIcon from "../assets/icons/x-social.svg";
import InstaIcon from "../assets/icons/insta.svg";
import GithubIcon from "../assets/icons/github.svg";

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
              className='hover:underline underline-offset-2 ml-2 hover:text-white'>
              Raj Thombare
            </a>
            , Inc. All rights reserved
          </div>
          <ul className='flex justify-center gap-2.5'>
            <li className='text-white/60 hover:text-white'>
              <a href='https:/github.com/raj-thombare/task-ai' target='_blank'>
                <GithubIcon />
              </a>
            </li>
            <li className='text-white/60 hover:text-white'>
              <a href='https:/x.com/rajth0mbare' target='_blank'>
                <XIcon />
              </a>
            </li>
            <li className='text-white/60 hover:text-white'>
              <a href='https:/instagram.com/rajth0mbare' target='_blank'>
                <InstaIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
