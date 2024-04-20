import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 ">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full place-items-center"
      >
        <span className="text-purple-600">{title}</span>
        {accordionOpen ? <span className='text-2xl text-purple-600 transform origin-center 
        transition duration-200 ease-out'>-</span> 
        :  <span className='text-2xl text-purple-600 transform origin-center 
        transition duration-200 ease-out'> + </span>} 
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-xl text-purple-400">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;