import React from 'react';
import SUCCESSGIF from '../assest/success.gif';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-2 rounded'>
        <img 
          className='mix-blend-multiply'
          src={SUCCESSGIF}
          width={250}
          height={250}
        />
        <p className='text-green-600 font-bold'>Payment Successfully</p>
        {/* <Link to={"/order"} className='p-2 px-3 mt-5 border-2 border-green-600 rounded font-semibold text-green-600 hover:bg-green-600 hover:text-white'>See Order</Link> */}
        <Link to={"/"} className='p-2 px-3 mt-5 border-2 border-green-600 rounded font-semibold text-green-600 hover:bg-green-600 hover:text-white'>Go To Home</Link>

    </div>
  )
}

export default Success