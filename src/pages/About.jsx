import React, { useContext } from 'react'
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReactrouter } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { AppContext } from '../context/Context';

export const About = () => {
  const {state} = useContext(AppContext)
  return (
    <section className='p-[2rem] flex flex-col min-lg:px-[7rem] min-[700px]:px-[3rem] min-xl:px-[10rem] py-[6rem] font-CormorantU gap-[1.5rem]'>
      <h2 className='text-purple text-[2.5rem] min-md:text-[3rem] font-extrabold'>
        About Developer
      </h2>
      <p className='text-[1.3rem] min-md:text-[1.5rem]'>
        Hello there! I'm <a href="https://moses-maduakonam.vercel.app/" target='_blank' className='text-purple hover:opacity-90 ease-in duration-100'>Moses Maduakonam</a>, the passionate developer behind this website. With a keen eye for detail and a love for crafting seamless digital experiences, I set out to create a unique and user-friendly online shopping platform.
      </p>
      <h2 className='text-purple text-[1.7rem] font-extrabold leading-[1.7rem] min-md:text-[1.9rem]'>
        Frameworks and Technologies Used
      </h2>
      <p className='text-[1.3rem] min-md:text-[1.5rem]'>
        In the development of this website, I've harnessed the power of the following frameworks and technologies to create a modern, single-page application (SPA)
      </p>
      <div className='flex justify-between w-[50%] mx-auto'>
        <FaReact className='text-[2rem] min-md:text-[3.5rem] text-gray-500 duration-150 ease-in hover:text-sky-500 cursor-pointer'/>
        <RiTailwindCssFill className='text-[2rem] min-md:text-[3.5rem] text-gray-500 duration-150 ease-in hover:text-sky-500 cursor-pointer'/>
        <SiReactrouter className='text-[2rem] min-md:text-[3.5rem] text-gray-500 duration-150 ease-in hover:text-red-500 cursor-pointer'/>
      </div>
      <h2 className='text-[2rem] text-purple font-extrabold'>Let's Connect</h2>
      <p className='text-[1.3rem] min-md:text-[1.5rem]'>
        Explore the website, discover the offerings, and if you have any questions or suggestions, I'm here to listen. Your journey through this online shopping experience is as important to me as it is to you. Happy exploring!
      </p>
      <div className='flex justify-around w-[50%] mx-auto'>
        <a href="www.linkedin.com/in/moses-maduakonam">
          <FaLinkedin className='text-[2rem] min-md:text-[3.5rem] text-gray-500 duration-150 ease-in hover:text-sky-700 cursor-pointer'/>
        </a>
        <a href="https://www.github.com/beealmighty">
          <FaGithub className={`text-[2rem] min-md:text-[3.5rem] text-gray-500 duration-150 ease-in hover:${state.isDark ? 'text-white' : 'text-black'} cursor-pointer`}/>
        </a>
      </div>
    </section>
  )
}
