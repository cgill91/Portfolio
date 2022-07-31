import React from "react";

const About = () => {
    return(
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 bg-pink-700'>About</p>
                    </div>
                    <div></div>
                    </div>
                        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                            <div>
                                <p>Hi. It's me again Colton! So nice of you to come and take a look at my work! Here's a little bit about me.</p>
                            </div>
                        <div>
                            <p></p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default About;