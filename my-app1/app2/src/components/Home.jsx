import React from 'react';

function Home() {
  return (
    <div className='m-0'>
        <div className='relative w-full top-full'>
            <img src="src/assets/images/hero.jpg" alt="" className='hero w-screen h-screen' />
            <div className='absolute top-1/3 w-2/3 text-center mx-5 '>
                <h1 className='text-7xl font-bold text-white mx-5'>Explore the Word</h1>
                <p className='text-2xl font-semibold mx-75 my-6 text-black'>Live your life by a compass not a clock.</p>
            </div>
        </div>
    </div>
  );
}

export default Home;
