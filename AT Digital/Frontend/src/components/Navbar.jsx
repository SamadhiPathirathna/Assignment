import React, { useState } from 'react'

export default function Navbar() {

  let [open, setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 '>
         <div className='md:flex items-center justify-between bg-purple-600 py-4 md:px-10 px-7  '>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-white mr-1 pt-2'>
        <img className='h-auto w-10 '  src="src/images/logo.jpeg" alt="" />
        </span>
       <p className=' text-white '> AT Designer</p>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>
      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-purple-600 text-white  md:z-auto z-[-1] left-0 w-full md:w-auto
      md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                <li className='md:ml-8 md:my-0 my-4'>
                    <a className='hover:text-black' href="#">SERVICES</a>
                    </li>
                    <li className='md:ml-8 md:my-0 my-4'>
                        <a className ='hover:text-black' href="#">ABOUT US</a>
                    </li>
                    <li className='md:ml-8 md:my-0 my-4'>
                        <a className='hover:text-black' href="#">CONTACT US</a>
                    </li>
                    <li className='md:ml-8 md:my-0 my-4'>
                        <a className='hover:text-black' href="#">CAREERS</a>
                    </li>
                    
        
        </ul>

      </div>


    </div>
  )
}
