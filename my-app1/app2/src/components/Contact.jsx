import React from 'react';

function Contact() {
  return (
    <div className='container justify-center w-full'>
      <h1 className='my-8 text-4xl font-bold text-center'>Contact Us</h1>
      <div className='flex justify-between p-2 w-full'>
        <div className='border-2 border-black px-10 py-5 flex flex-col w-1/2'>
          <label htmlFor="email" className='text-md font-semibold my-1'>Enter your Email</label>
          <input type="text" name='email' id='email' className='p-2 my-2 border-2 border-gray-600 opacity-30 rounded-md' />
          <label htmlFor="email" className='text-md font-semibold my-1'>Enter your Phone number</label>
          <input type="text" name='email' id='email' className='p-2 my-2 border-2 border-gray-600 opacity-30 rounded-md' />
          <label htmlFor="email" className='text-md font-semibold my-1'>Enter the Message</label>
          <input type="text" name='email' id='email' className='p-2 h-32 border-2 border-gray-600 opacity-30 rounded-md' />
        </div>
        <div className=''>
          <img src="src/assets/images/map.jpg" alt="" className='w-96 h-92'/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
