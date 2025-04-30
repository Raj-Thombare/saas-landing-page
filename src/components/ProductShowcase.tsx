import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";

const ProductShowcase = () => {
  return (
    <div className='text-white bg-black bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24'>
      <div className='container flex flex-col items-center'>
        <h2 className='text-center text-5xl sm:text-6xl font-bold tracking-tighter'>
          Intuitive Interface
        </h2>
        <div className='max-w-xl mx-auto'>
          <p className='text-center mt-5 text-xl text-white/70'>
            Celebrate the joy of accomplishment with an app designed to track
            your progess, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <Image src={appScreen} alt='The product screenshot' className='mt-14' />
      </div>
    </div>
  );
};

export default ProductShowcase;
