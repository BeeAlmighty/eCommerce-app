import React, { useContext, useState } from 'react'
import { ACTIONS, AppContext } from '../context/Context';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaWindowClose } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const {state, dispatch} = useContext(AppContext);
  const toggleDarkMode = () => {
    dispatch({type: ACTIONS.TOGGLE_DARK_MODE})
  }
  const ToggleMenu = () => {
    dispatch({type: ACTIONS.TOGGLE_NAVBAR})
  }
  const handleCloseMenu = () => {
    dispatch({type: ACTIONS.CLOSE_NAVBAR})
  }
  return (
    <nav className={`${state.isDark ? 'bg-dark-fade' : 'bg-slate-200'} h-[5rem] flex items-center justify-between p-[1rem] min-lg:px-[7rem] min-[700px]:px-[3rem] min-xl:px-[10rem]`}>
      <Link to='/'>
        <img src="/assets/faviconio-logo (1)/logo.svg" alt="" className='w-[5rem] rounded-3xl cursor-pointer'/>
      </Link>
      {/* Mobile Navigation */}
      <ul className={`fixed bg-black/65 backdrop-blur-2xl top-0 h-full w-[90%] flex flex-col py-[6rem] px-[4rem] z-[3] gap-[3rem] ${state.isNav ? 'left-0 duration-700 ease-in' : 'left-[-100%] duration-500 ease-out'} min-lg:hidden ${state.isDark ? '' : 'text-white'} min-md:w-[50%]`}>
        <button onClick={handleCloseMenu} className='self-end mb-[2rem]'>
          <FaWindowClose className={`text-[1.8rem] cursor-pointer ${state.isDark ? '' : 'text-white'}`}/>
        </button>
        <Link to={`/`}>
          <li onClick={handleCloseMenu} className='cursor-pointer border-b-2 border-transparent hover:border-purple duration-500'>Home</li>
        </Link>
        <Link to='products'>
          <li onClick={handleCloseMenu} className='cursor-pointer border-b-2 border-transparent hover:border-purple duration-500'>Products</li>
        </Link>
        <Link to='about'>
          <li onClick={handleCloseMenu} className='cursor-pointer border-b-2 border-transparent hover:border-purple duration-500'>About</li>
        </Link>
      </ul>
      <div className='flex gap-[1rem] items-center'>
        <button className= 'bg-gray-300 p-[0.25rem] rounded-full cursor-pointer' onClick={toggleDarkMode}>
          {state.isDark ?  <MdOutlineLightMode className='text-[1.5rem]'/> : <MdOutlineDarkMode className='text-[1.5rem]'/>}
        </button>

        <Link to='cart'>
          <button className='relative cursor-pointer mt-2'>
            <IoCartOutline className='text-[1.8rem]'/>
            {state.cartTotalQuantity > 0 && 
              <span className='bg-purple absolute top-0 right-0 z-[2] text-white rounded-full  w-[1rem] h-[1rem] text-[0.75rem]'>{state.cartTotalQuantity}</span>}
          </button>
        </Link>

        <button onClick={ToggleMenu} className='min-lg:hidden'>
          <RxHamburgerMenu className={`${state.isDark ? 'text-white' : ''} text-[1.5rem] cursor-pointer`} />
        </button>
      </div>
      {/* Desktop Navigation */}
      <ul className='min-lg:flex hidden gap-[1rem] items-center'>
        <Link to='/'>
          <li className='cursor-pointer border-b-2 border-transparent hover:border-purple duration-500'>Home</li>
        </Link>
        <Link to='products'>
          <li className='cursor-pointer border-b-2 border-transparent hover:border-purple duration-500'>Products</li>
        </Link>
        <Link to='about'>
          <li className='cursor-pointer border-b-2 border-transparent hover:border-purple duration-500'>About</li>
        </Link>
      </ul>
    </nav>
  )
}