import React from 'react';
import image from '../assets/cf.jpg';
import person from '../assets/m-1.png';
import person1 from '../assets/m-2.jpg';
import person2 from '../assets/m-3.png';
import person3 from '../assets/p-1.png';

const About = () => {
  return (
    <div >
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id='about'>
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
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 bg-neutralSilver py-16">
           <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/2'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Helping a local <br/> <span className='text-brandPrimary'>business reinvent itself</span></h2>
            <p className='md-w-3/4 text-sm text-neutralDGrey font-semibold mb-4 md:w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dicta quam explicabo, consequuntur aliquam in asperiores voluptatum rerum eum modi aperiam laborum quae assumenda vitae omnis iste, libero sit fugit?</p>
                </div>
          
              {/* stats */}
               <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                  <div className='space-y-8'>
                    <div className='flex items-center gap-4'>
                        <img src={person} alt=''/>
                    
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                            <p>Members</p>
                        </div>
                    </div>
                    
                    <div className='flex items-center gap-4'>
                        <img src={person1} alt=''/>
                    
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>1,926,436</h4>
                            <p>Organization</p>
                        </div>
                    </div>


                </div>

                <div className='space-y-8'>
                    <div className='flex items-center gap-4'>
                        <img src={person3} alt=''/>
                    
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>46,328</h4>
                            <p>Payments</p>
                        </div>
                    </div>
                    
                    <div className='flex items-center gap-4'>
                        <img src={person2} alt=''/>
                    
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>828,867</h4>
                            <p>Event Bookings</p>
                        </div>
                    </div>


                </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default About;
