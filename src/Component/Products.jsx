import React from 'react';
import image from '../assets/cf.jpg';
import person from '../assets/m-1.png';
import person1 from '../assets/m-2.jpg';
import person2 from '../assets/m-3.png';
import person3 from '../assets/p-1.png';
import Black from '../assets/i-2.png';

const Products = () => {
  return (
    <div>
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id='product'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-enter gap-12'>
              <div>
               <img src={image} alt="Coffee-Image"/>
              </div>
              <div className='md:w-3/5 mx-auto'>
                 <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>The unseen of spending three years at coffee making</h2>
                 <p className='md-w-3/4 text-sm text-neutralDGrey font-semibold mb-4 md:w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dicta quam explicabo, consequuntur aliquam in asperiores voluptatum rerum eum modi aperiam laborum quae assumenda vitae omnis iste, libero sit fugit?</p>
                      <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>
                         Learn More
                      </button>
              </div>
          </div>
      </div>

      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
         <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
              <div className='md:w-1/3'>
              <img src={Black} alt="Black-Rock"/>
                        </div>
        
            {/* stats */}
             <div className='md:w-2/3 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                <div>
                    <p className='md:w-4/5 text-sm text-neutralDGrey mb-8 leading-7'>"Drinking your coffee is like starting the day with a burst of energy and comfort. The rich aroma and smooth flavor make every cup feel like a moment of pure indulgence. Your coffee has transformed my daily routine into something I genuinely look forward to, bringing a sense of warmth and satisfaction that lasts throughout the day. From the first sip to the last, it delivers a perfect balance of taste and happiness."</p>
                    <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
                    <p>British Dragon Boat Racing Association</p>
                </div>
         </div>
      </div>
    </div>
  </div>
  )
}

export default Products
