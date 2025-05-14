import React, { useContext, useState } from 'react'
import { AppContext } from '../context/Context'

export const Button = ({children, onSelect}) => {
  const {state} = useContext(AppContext)
  const [isActive, setIsActive] = useState(false);
  const handleActiveStates = () => {
    setIsActive(true)
    setTimeout(() => {
      setIsActive(false)
    }, 500);
  }
  const handleClick = () => {
    onSelect()
    handleActiveStates()
  }
  return (
    isActive ? (
      <div className='border-2 border-purple rounded-full relative animate-spin'>
        <div className='bg-transparent w-[2rem] h-[2rem]'>
          <div className={`${state.isDark ? 'bg-black' : 'bg-slate-100'} z-10 w-[0.5rem] h-[0.5rem] absolute top-[-0.25rem] right-[38%]`}></div>
        </div>
      </div>
    ) : (
      <div className={`${state.isDark ? 'bg-purple' : 'bg-purple border-gray-700'}  duration-300 hover:bg-purple-800 text-white button flex items-center gap-[0.3rem]`} onClick={handleClick} >
        {children}
      </div>
    )
  )
}
