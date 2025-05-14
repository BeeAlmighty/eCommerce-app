import React, { useContext } from 'react'
import { AppContext } from '../context/Context'

export const ErrorMsg = () => {
  const {state} = useContext(AppContext);
  return (
   state.errorMsg &&  
    <div className='border-1 border-red-600 p-[2rem] rounded-lg flex flex-col items-center gap-[1rem] mx-auto bg-red-200 text-black'>
      <h2 className='text-2xl'>{state.errorMsg}</h2>
      <p className='font-CormorantU capitalize text-[1.2rem] text-center font-extrabold'>Please Confirm network connection so you can see what amazing things we have to offer you! 🤩</p>
    </div>
  )
}
