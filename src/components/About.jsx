
import React from 'react';

const About = () => {
  return (
    <section name='about' className='w-full h-50% bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Colton, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building responsive front end applications using React and a variety of other tools. I would love to have a chance to create something amazing with you or for you! If you see something you like please feel free to reach out to me, maybe we can work together!</p>  
            </div>
          </div>
      </div>
    </section>
  );
};

export default About;