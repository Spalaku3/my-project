import { Carousel } from 'flowbite-react';
import React from 'react';
import banner1 from '../../src/assets/n-4.jpg';
import banner2 from '../../src/assets/Coffee-Banner.jpg';
import banner3 from '../../src/assets/n-5.webp';
import banner4 from '../../src/assets/n-2.jpg';
import banner5 from '../../src/assets/n-3.jpg';

// import banner1 from '../../src/assets/T-1.webp';
// import banner2 from '../../src/assets/T-2.webp';
// import banner3 from '../../src/assets/T-3.jpg';
// import banner4 from '../../src/assets/T-4.jpg';
// import banner5 from '../../src/assets/T-5.jpg';

const Home = () => {
  return (
    <div className='bg-neutralSilver min-h-screen' id="home">
      <div className="pt-16 px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel>
          <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img src={banner1} alt='' className='w-full h-full object-cover' />
          </div>
          <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img src={banner3} alt='' className='w-full h-full object-cover' />
          </div>
          <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img src={banner4} alt='' className='w-full h-full object-cover' />
          </div>
          <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img src={banner5} alt='' className='w-full h-full object-cover' />
            <div className="absolute top-[30%] left-4 md:left-8 text-left">
              <h1 className='text-4xl md:text-5xl font-semibold italic mb-4 text-neutralDWhite md:w-3/4 leading-snug'>
                Serving Delicious Coffee
                <span className="text-neutralDWhite block leading-snug">from 8 years</span>
              </h1>
              <p className='text-neutralDWhite text-sm md:text-base mb-8'>Where to grow your business as a Coffee maker: site or social media?</p>
              <button className='px-5 md:px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-2 md:hover:-translate-y-4'>Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
