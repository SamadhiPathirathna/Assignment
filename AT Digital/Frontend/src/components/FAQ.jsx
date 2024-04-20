import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
  <div className="bg-white max-w-md h-10 mb-4 flex items-center justify-center">
    <p className="text-purple-600 font-bold text-xl">
      Frequently Asked Questions
    </p>
  </div>
  <div className="bg-gray-100 max-w-md font-bold text-xl  p-30">
    <Accordion 
      title="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
      answer="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. 
      Elementum ultrices nulla faucibus odio est sed aliquam. 
      Sapien massa morbi risus sagittis tortor integer.e to use iOS products"
    />
    <Accordion
      title="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?"
      answer="Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. 
      Cursus sit amet dictum sit amet justo donec enim diam porttitor 
      lacus luctus accumsan tortor posuere."
    />
    <Accordion title="Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc??" 
      answer="Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. 
      Cursus sit amet dictum sit amet justo donec enim diam porttitor 
      lacus luctus accumsan tortor posuere" />
  </div>
</div>

  );
};

export default FAQ;