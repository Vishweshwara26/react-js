import { useState,useEffect } from 'react';
import './index.css'
function App() {

  const initialValues = {
    userName:"", 
    email:"", 
    phone:"", 
    address:"", 
    dob:"", 
    pass:"", 
    cpass:""};

  const [formValues,setFormValues] = useState(initialValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit,setIsSubmit] = useState(false);

  const handlechange = (e) =>{
  const {name, value} = e.target;
  setFormValues({...formValues, [name]:value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorTexts = document.getElementById('errorText');
    // errorTexts.style.color = 'red';
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if(Object.keys(formErrors) === 0 && isSubmit){
      alert("Form Submitted Successfully...");
    }
  },[formValues]);

  

  const validate = (values) =>{
    const errors = {};

    if(values.userName.length == 0){
      errors.userName = "Username is Required";
    }

    if(!values.email){
      errors.email = "Email is Required";
    }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)){
      errors.email = "Enter correct email pattern";
    }

    if(!values.phone){
      errors.phone = "Phone number is Required";
    }else if(!/^\d{10}$/.test(values.phone)){
      errors.phone = "Enter 10 digit Phone number";
    }

    if(!values.address){
      errors.address = "Address is Required";
    }

    if(!values.dob){
      errors.dob = "Date of Birth is Required";
    }
    
    if(!values.pass){
      errors.pass = "Password is Required";
    }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.pass)){
      errors.pass = "password must be eight characters including one uppercase letter, one special character and alphanumeric characters";
    }

    if(!values.cpass){
      errors.cpass = "Confirm Password is Required";
    }else if( values.pass !== values.cpass){
      errors.cpass = "Password Does'nt MAtch";
    }

    return errors;
  };

  return (
    <>
      <div className="container w-full my-20 flex items-center justify-center">
        <div className='formborder w-2/6 p-8 drop-shadow-md border-gray-700 rounded-md'>
          <form className='' method="post" onSubmit={handleSubmit}>
            <h1 className='text-center mb-3 font-bold text-2xl'>Register Form</h1>
            <div className='flex flex-col'>
              <div className='flex flex-col my-2'>
                <label htmlFor="name" className='my-2 font-semibold'>Enter your Name</label>
                <input type="text" name='userName' id='name' value={formValues.userName} onChange={handlechange} className='border border-gray-400 rounded-sm py-1 px-2' />
              </div>

              <p id="errorText" className='text-sm text-red-700'>{formErrors.userName}</p>

              <div className='flex flex-col my-2'>
                <label htmlFor="email" className='my-2 font-semibold'>Enter your Email</label>
                <input type="email" name='email' id='email' onChange={handlechange} value={formValues.email} className='border border-gray-400 rounded-sm py-1 px-2' />
              </div>

              <p id="errorText" className='text-sm text-red-700'>{formErrors.email}</p>

              <div className='flex flex-col my-2'>
                <label htmlFor="phone" className='my-2 font-semibold'>Enter your Phone Number</label>
                <input type="text" name='phone' id='phone' onChange={handlechange} value={formValues.phone} className='border border-gray-400 rounded-sm py-1 px-2' />
              </div>

              <p id="errorText" className='text-sm text-red-700'>{formErrors.phone}</p>

              <div className='flex flex-col my-2'>
                <label htmlFor="add" className='my-2 font-semibold'>Enter your Address</label>
                <textarea type="text" name='address' id='add' onChange={handlechange} value={formValues.address} className='border border-gray-400 h-16 rounded-sm py-1 px-2' />
              </div>

              <p id="errorText" className='text-sm text-red-700'>{formErrors.address}</p>

              <div className='flex flex-col my-2'>
                <label htmlFor="dob" className='my-2 font-semibold'>Date of Birth</label>
                <input type="date" name='dob' id='dob' onChange={handlechange} value={formValues.dob} className='border border-gray-400 rounded-sm py-1 px-2' />
              </div>

              <p id="errorText" className='text-sm text-red-700'>{formErrors.dob}</p>

              <div className='flex flex-col my-2'>
                <label htmlFor="pass" className='my-2 font-semibold'>Enter Password</label>
                <input type="password" name='pass' id='pass' onChange={handlechange} value={formValues.pass} className='border border-gray-400 rounded-sm py-1 px-2' />
              </div>

              <p id="errorText" className='text-sm text-red-700'>{formErrors.pass}</p>

              <div className='flex flex-col my-2'>
                <label htmlFor="cpass" className='my-2 font-semibold'>Enter Confirm Password</label>
                <input type="password" name='cpass' id='cpass' onChange={handlechange} value={formValues.cpass} className='border border-gray-400 rounded-sm py-1 px-2' />
              </div>

              <p id="errorText" className='text-sm text-red-700'>{formErrors.cpass}</p>

              <div className='flex justify-center mt-5'>
                <button className='bg-purple-700 text-white p-2 w-44 rounded-md '>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
