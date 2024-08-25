import React from 'react'
import logo1 from '../../src/assets/i-1.jpg';
import logo2 from '../../src/assets/i-2.png';
import logo3 from '../../src/assets/i-3.png';
import logo4 from '../../src/assets/i-4.png';
import logo5 from '../../src/assets/i-5.png';

const Services = () => {
  
    const services =[
        {id:1, title:"Membership Organisations", description: " Our membership management software provides full automation of membership renewals and payments", image:"/src/assets/m-1.png"},
        {id:2, title:"National Associations", description: " Our membership management software provides full automation of membership renewals and payments", image:"/src/assets/m-2.jpg"},
        {id:3, title:"Clubs and Groups", description: " Our membership management software provides full automation of membership renewals and payments", image:"/src/assets/m-3.png"},
    ]




  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
    <div className='text-center my-8'>
      <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
      <p className='text-neutralDGrey'>We have been working with some Fortune 500+ clients</p>
      
      <div className='flex flex-wrap justify-center items-center gap-4'>
        <img src={logo1} alt="Client Logo 1" className='w-32 h-auto md:w-48' />
        <img src={logo2} alt="Client Logo 2" className='w-32 h-auto md:w-48' />
        <img src={logo3} alt="Client Logo 3" className='w-32 h-auto md:w-48' />
        <img src={logo4} alt="Client Logo 4" className='w-32 h-auto md:w-48' />
        <img src={logo5} alt="Client Logo 5" className='w-32 h-auto md:w-48' />
      </div>
    </div>
  

       {/* Service Car*/}
       <div className='mt-20 md:w-1/2 mx-auto text-center'>
       <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Manage your entire community in a single system</h2>
        <p className='text-neutralDGrey'>Who is Nextcent suitable for?</p>
       </div>

       <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
        {services.map(service => (
          <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
            <div>
            <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src={service.image} alt={service.title} className='mx-auto mb-4 w-24 h-auto' /></div>
            <h3 className='text-2xl text-neutralDGrey font-semibold mb-2'>{service.title}</h3>
            <p className=' text-sm text-neutralDGrey'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Services;
