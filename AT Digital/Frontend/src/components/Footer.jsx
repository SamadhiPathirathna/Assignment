import React from 'react';


const Footer = () => {
  return (
    <div className='w-full mt-24 bg-purple-600 text-white py-2 px-2'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-4  border-gray-600 py-8 px-4'>
        <div >
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-white mr-1 pt-2'>
        <img className='h-auto w-10 '  src="src/images/logo.jpeg" alt="" />
        </span>
       <p className=' text-white '> AT Designer</p>
      </div>
      <p className=' text-white p-2'> Your goal is our target. Not anything in between. 
      We use online marketing platforms and tools to achieve single objective - your business results.</p>
        </div>
        <div></div>
        
        <div>
          <h6 className='font-bold uppercare pt-2'>Our Technologies</h6>
          <ul>
            <li className='py-1'>ReactJS</li>
            <li className='py-1'>Gatsby</li>
            <li className='py-1'>NextJS</li>
            <li className='py-1'>NodeJS</li>
          </ul>
        </div>
        <div></div>
        <div className='col-span-2 py-8 md:pt-2'>
          <p className='font-bold uppercase'>Our Services</p>
          <p className='py-4'>
            <ul>
            <li>Social media Marketing</li>
         <li> Web & Mobile App Development</li>
         <li> Data & Analytics</li>
            </ul>
          </p>
        </div>
      </div>
      <p className=' text-center text-white font-semibold'>
        Privacy Policy | Terms & Conditions

        </p>
      
      

      
    </div>
  );
};

export default Footer;