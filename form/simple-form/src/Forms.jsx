import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

function Form() {

  const { register, handleSubmit, watch, formState: { errors }} = useForm();
  const password = watch('pass');
  const btnClick = (data) =>{
    console.log(data);
    alert("You have Registered Successfully...");
    document.title = "Successfull";
  }

  return (
    <>
        <div className="container w-full my-20 flex items-center justify-center">
        <div className='formborder w-2/6 p-8 drop-shadow-md border-gray-700 rounded-md'>
          <form className='' onSubmit={handleSubmit(btnClick)}>
            <h1 className='text-center mb-3 font-bold text-2xl'>Register Form</h1>
            <div className='flex flex-col'>
              <div className='flex flex-col my-2'>
                <label htmlFor="name" className='my-2 font-semibold'>Enter your Name</label>
                <input 
                  type="text"
                  name="userName"
                  id="name"
                  className='border border-gray-400 rounded-sm py-1 px-2'
                  {...register("userName", {
                    required: "Username is required",
                    maxLength: {
                      value: 50,
                      message: "Username should not exceed 50 characters",
                    },
                  })}
                />
              </div>

              {errors.userName && <p id="errorText" className='text-sm text-red-700'>{errors.userName.message}</p>}


              <div className='flex flex-col my-2'>
                <label htmlFor="email" className='my-2 font-semibold'>Enter your Email</label>
                <input type="email" name='email' id='email' className='border border-gray-400 rounded-sm py-1 px-2' 
                {...register("email", 
                {required: "Email is required", 
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Enter correct email pattern"
                }})} />
              </div>

              {errors.email && <p id="errorText" className='text-sm text-red-700'>{errors.email.message}</p>}

              <div className='flex flex-col my-2'>
                <label htmlFor="phone" className='my-2 font-semibold'>Enter your Phone Number</label>
                <input type="text" name='phone' id='phone' className='border border-gray-400 rounded-sm py-1 px-2' 
                  {...register("phone", 
                  {required: "phone number is required", 
                  maxLength: {
                    value: 10,
                    message: "Cannot exceed more than 10 digit"
                  }, 
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Enter correct phone number"
                  }
                  })} 
                />
              </div>

              {errors.phone && <p id="errorText" className='text-sm text-red-700'>{errors.phone.message}</p>}

              <div className='flex flex-col my-2'>
                <label htmlFor="pass" className='my-2 font-semibold'>Enter Password</label>
                <input type="password" name='pass' id='pass' className='border border-gray-400 rounded-sm py-1 px-2' 
                {...register("pass", 
                {required: "Password is required", 
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Password must contain at least 8 characters, including one uppercase letter, one number, and one special character."
                }})} />
              </div>

              {errors.pass && <p id="errorText" className='text-sm text-red-700'>{errors.pass.message}</p>}

              <div className='flex flex-col my-2'>
                <label htmlFor="cpass" className='my-2 font-semibold'>Enter Confirm Password</label>
                <input type="password" name='cpass' id='cpass' className='border border-gray-400 rounded-sm py-1 px-2' 
                {...register("cpass",
                {required: "confirm password is required",
                validate: (value) => value === password || "Passwords do not match",})} />
              </div>

              {errors.cpass && <p id="errorText" className='text-sm text-red-700'>{errors.cpass.message}</p>}

              <div className='flex justify-center mt-5'>
                <button className='bg-purple-700 text-white p-2 w-44 rounded-md '>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
