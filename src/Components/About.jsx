import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
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
                        <br />
                        <p>Hi. I'm Denis Vasilevsky, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>Aspiring full stack developer with a passion
                            for creating innovative and user-friendly web applications.
                            Eager to contribute my strong foundation in front-end and
                            back-end technologies, along with my problem-solving skills,
                            to a dynamic development team. Committed to continuous learning
                            and growth in order to deliver high-quality, efficient, and scalable
                            software solutions that meet the evolving needs of users and businesses</p>  
                    </div>
                </div>
            </div>
        </div>
  );
}

export default About