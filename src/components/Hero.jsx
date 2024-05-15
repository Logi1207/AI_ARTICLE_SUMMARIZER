import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>New Text Summarizer</span>
      </h1>
      <h2 className='desc'>
      Streamline Your Reading: Summize, your shortcut to insightful summaries
      Clear Insights, Less Effort: 
      </h2>
    </header>
  );
};

export default Hero;
