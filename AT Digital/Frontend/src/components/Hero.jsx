import React from 'react'

export default function Hero() {
  return (
    <div>
      <img
        className='top-0 left-0 w-full h-[600px] object-cover'
        src='src/images/bg.jpeg'
        alt='/'
      />
     <div className='absolute  w-full  pt-1 flex flex-col justify-center text-black'>
        <div className='md:left-[10%] max-w-[500px] m-auto absolute p-10 bottom-20
        bg-gradient-to-r from-green-400 to-blue-500'>
          <h1 className='max-w-[450px] drop-shadow-2xl py-3 text-xl font-bold text-white'>
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
          </h1>
          <button className='bg-orange-500 text-white p-2 font-bold '>Get free Consultation</button>


      </div>
      </div>
      
    </div>
  )
}
