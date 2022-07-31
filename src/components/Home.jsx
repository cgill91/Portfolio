import React from "react";
import {HiArrowRight} from 'react-icons/hi'

const Home = () => {
    return(
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            
            {/* Container */}
            <div className='max-w-[900px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-2xl font-bold text-pink-700'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Colton Gillmore</h1>
                <h2 className='text-4xl sm:text-7xl font-bold'>I am a front-end developer.</h2>
                <p className='text-3xl sm:text-3xl pt-4 max-w-[700px] text-[#8892b0]'>Currently I am working on building exceptional digital expierences.</p>
                <p className='text-3xl sm:text-3xl pb-4 text-[#8892b0]'>While specializing in React applications.</p>
                <div>
                    <button className='text-white border-2 px-7 py-4 my-2 flex items-center hover:bg-pink-700 hover:border-pink-700'>
                        View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowRight className='ml-3' />
                            </span>
                    </button>        
                </div>            
            </div>
        </div>
    );
};

export default Home;