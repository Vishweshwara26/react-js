import React from 'react';

function Blog() {
  return (
    <div className='container'>
        <h1 className='my-8 text-4xl font-bold text-center'>Blog</h1>
        <div className='w-full flex flex-wrap justify-between top-full'>
          <div className='image p-5 top-full relative'>
            <img src="src/assets/images/blog1.jpeg" alt="" className='w-80 h-80' />
            <p className='top-2/3 absolute p-5 text-2xl font-bold text-black hover:text-blue-800'>Bell Tower</p>
          </div>
          <div className='image p-5 relative'>
          <img src="src/assets/images/blog2.jpg" alt="" className='w-80 h-80' />
          <p className='top-2/3 absolute p-5 text-2xl font-bold text-black hover:text-blue-800'>Taj Mahal</p>
          </div>
          <div className='image p-5 relative'>
          <img src="src/assets/images/blog3.jpg" alt="" className='w-80 h-80' />
          <p className='top-2/3 absolute p-5 text-2xl font-bold text-black hover:text-blue-800'>Eiffel Tower</p>
          </div>
          <div className='image p-5 relative'>
          <img src="src/assets/images/blog4.jpeg" alt="" className='w-80 h-80' />
          <p className='top-2/3 absolute p-5 text-2xl font-bold text-black hover:text-blue-800'>Vagamon</p>
          </div>
          <div className='image p-5 relative'>
          <img src="src/assets/images/blog5.jpeg" alt="" className='w-80 h-80' />
          <p className='top-2/3 absolute p-5 text-2xl font-bold text-black hover:text-blue-800'>Lighthouse Beach</p>
          </div>
          <div className='image p-5 relative'>
          <img src="src/assets/images/blog6.jpeg" alt="" className='w-80 h-80' />
          <p className='top-2/3 absolute p-5 text-2xl font-bold text-black hover:text-blue-800'>Buddhist monastery</p>
          </div>
        </div>
    </div>
  );
}

export default Blog;
