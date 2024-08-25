import React from 'react';

const Newsletter = () => {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
      <div className='text-center'>
        <h2 className='lg:text-5xl text-3xl text-neutralDGrey font-semibold mb-6 lg:leading-snug'>
          How to design your site footer like we did
        </h2>
        <div>
          <button className='px-6 py-3 bg-green-500 text-white rounded inline-flex items-center transition-transform duration-200 hover:scale-95'>
            Get a Demo 
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='17'
              height='11'
              viewBox='0 0 17 11'
              fill='none'
              className='inline-block ml-2'
            >
              <path
                d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                stroke='#FFFFFF'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
