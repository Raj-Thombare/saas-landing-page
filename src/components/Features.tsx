import React from "react";
import GlobeIcon from "../assets/icons/globe.svg";
import SecureIcon from "../assets/icons/secure.svg";
import CheckIcon from "../assets/icons/check.svg";

const features = [
  {
    Icon: <GlobeIcon className='w-8 h-8' />,
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    Icon: <CheckIcon className='w-8 h-8' />,
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    Icon: <SecureIcon className='w-8 h-8' />,
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

const Features = () => {
  return (
    <div className='bg-black text-white py-[72px] sm:py-24'>
      <div className='container'>
        <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>
          Everything you need
        </h2>
        <div className='max-w-xl mx-auto'>
          <p className='text-center mt-5 text-xl text-white/70'>
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>

        <div className='mt-16 flex flex-col sm:flex-row sm:flex-1 gap-4'>
          {features.map(({ title, description, Icon }) => {
            return (
              <div
                key={title}
                className='border border-white/30 px-5 py-10 text-center rounded-lg sm:flex-1'>
                <div className='inline-flex h-14 w-14 text-black bg-white justify-center items-center rounded-lg'>
                  {Icon}
                </div>
                <h3 className='mt-6 font-bold'>{title}</h3>
                <p className='mt-2 text-white/70'>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;