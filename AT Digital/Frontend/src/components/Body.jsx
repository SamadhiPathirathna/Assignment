import React from 'react'

export default function Body() {
  return (
     <div className='max-w-[1000px] m-auto py-4 px-4 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div className=' h-[30vh]'>
       
        
        <img
          className='row-span-2 object-cover max-w-[300px]  p-2'
          src='src/images/pic1.png'
          alt='/'
        />
       
       
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <p className='text-2xl py-8 text-orange-500 font-bold'>
        Web & Mobile App Development
        </p>
        <p className='pb-6'>
        Your web and mobile Apps are pieces of the puzzle to grow 
        your business. We use frameworks which tailor content and engagement 
        methods to respond to different intents shown by 
        your potential customers who interact with your business online.
        </p>
        <button className='bg-orange-500 text-white p-3 font-bold max-w-[200px]'>Learn More</button>
        
      </div>

      {/* Left Side */}
      <div className='flex flex-col h-full justify-center pt-6'>
        <p className='text-2xl py-8 text-orange-500 font-bold'>
        Digital Strategy Consulting
        </p>
        <p className='pb-6'>
          Your digital strategy should complement the 
          overall marketing strategy of the company. 
          In online marketing, each component will never work in 
          isolation and every business needs a different mix. 
          We provide a clear concept and strategic 
          overview to find the most efficient model for your business.
        </p>
        <button className='bg-orange-500 text-white p-3 font-bold max-w-[200px]'>Learn More</button>
      </div>
      {/* Right Side */}
      
      <div className=' h-[30vh]'>
        <img
          className='row-span-2 object-cover max-w-[300px]  p-2'
          src='src/images/pic2.png' alt='/'/>
      </div>
    </div>
    
  )
}
