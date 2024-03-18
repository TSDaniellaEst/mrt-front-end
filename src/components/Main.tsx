import React from 'react'
import { ReactTyped } from "react-typed";


const Main = () => {
  return (
    
    <div className='text-[#f87171]'> 
    <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='font-bold text-[#f87171] p-2'> 
            {/*Hi */} 
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'> 
            Welcome
        </h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl texl-xl font-bold py-4'> 
                to
            </p>
            <ReactTyped
            className='md:text-5xl sm:text-4xl texl-xl font-bold md:pl-4 pl-1' 
            strings={['Metro Rail Transit']} 
             typeSpeed={120} 
             backSpeed={140}
             loop
             /> 
        </div>
        
        <p className='md:text-3xl texl-xl font-bold text-[#f87171]-500'> 
        Line 3
        </p>
        {/*}
        <button className='bg-[#f87171] text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3'> Get started </button>
        */}
    </div>
    </div>
  )
}

export default Main