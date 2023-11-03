import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  const [mode, setMode] = useState({
    color: 'black',
    backgroundColor: 'white'
  });

  const [btnText, setButton] = useState("Dark Mode");

  const toggleButton = () =>{
    if(mode.backgroundColor === 'white'){
        setMode({
            color: 'white',
            backgroundColor: 'black'
        })
        setButton("Light Mode");
    }
    else{
        setMode({
            color: 'black',
            backgroundColor: 'white'
        })
        setButton("Dark Mode");
    }
  }


  return (
    <div style={mode}>
      <header className="m-0 flex justify-between w-full p-4 border-b-2 drop-shadow-lg items-center">
        <div className='text-3xl font-extrabold w-1/12 ms-5'>Travel<span className='text-blue-700'>Advisor</span></div>
        <div className='w-6/12'>
          <ul className='text-md font-medium flex justify-around '>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <button className='bg-blue-700 px-3 py-0.5 rounded-md text-white' onClick={toggleButton}>{btnText}</button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
