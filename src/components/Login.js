import React from 'react'
import { Link } from 'react-router-dom';
import { fb, google, linked, men, tw } from './image/image'

function Login() {
  return (
    <div className=" w-full h-screen   ">
      <div className="max-w-[1000px] mx-auto px-8 flex  flex-col justify-center h-full">
        <div className="  sm:flex  justify-between  text-[#3D3D3D]">
          <div className="py-2">
            <h1 className="font-bold text-[30px] py-1 ">Sign In</h1>
            <p className='py-1 font-bold'> 
              New user?{" "}
              <span className="text-[#587FFF] cursor-pointer font-normal">Create an account</span>
            </p>
            <div className="flex flex-col text-[#3E3E3E]  ">
              <input
                type="text"
                placeholder="Username or email"
                className="border-solid border-2 border-[#3E3E3E] my-3 p-2"
              />
              <input
                type="text"
                placeholder="Password"
                className="border-solid border-2 border-[#3E3E3E] p-2"
              />
              <div className="flex justify-items-stretch my-3 ">
                <input
                  type="checkbox"
                  placeholder="Password"
                  className="border-solid border-2 border-[#3E3E3E] p-2 w-6 h-6 "
                />
                <p className="pl-3 ">Keep me signed in</p>
              </div>
            <button className="bg-[#3C3C3C] text-[#FCFCFC] p-2">
            <Link to={"/home"} >  Sign In</Link>
              </button>

              <div className="flex items-center my-4 pt-3">
             
                <div class="flex-grow h-px bg-gray-400"></div>

               
                <span className="flex-shrink text-[10px] text-[#3D3D3D] px-4 font-bold ">
                  Or Sign In With
                </span>

              
                <div className="flex-grow h-px bg-gray-400"></div>
              </div>
              <div className='flex justify-evenly '>
                <img  className='md:m-2' src={fb} alt=""  />
                <img className='md:m-2' src={google} alt=""  />
                <img className='md:m-2' src={tw} alt=""  />
                <img className='md:m-2' src={linked} alt=""  />

              </div>
              
            </div>
          </div>
          <div className='hidden md:block'>
            <img  className='object-cover object-center '  src={men} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login