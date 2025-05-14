import React, { useContext, useEffect } from 'react';
import { AppContext } from './context/Context';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Homepage } from './pages/Homepage';
import { Product } from './pages/Product';
import { CartItems } from './pages/CartItems';
import { Category } from './pages/Category';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { BackToTopButton } from './components/BackToTopButton';
import { GiSelfLove } from "react-icons/gi";
import { FaGithub } from "react-icons/fa6";

export const App = () => {
  const {state} = useContext(AppContext);
  return (
    <div className={`${state.isDark ? 'bg-black text-white' : 'bg-white text-black'} font-Aboreto`}>
      <SkeletonTheme baseColor={state.isDark ? '#313131' : '#e2e2e6'} highlightColor={state.isDark ? '#525252' : '#f5f5f5'}>
        <Navbar />
        <BackToTopButton />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='product'>
            <Route path=':id' element={<Product />} />
          </Route>
          <Route path='cart' element={<CartItems />} />
          <Route path='products' element={<Products />} />
          <Route path='categories'>
            <Route path=':id' element={<Category />} />
          </Route>
          <Route path='about' element={<About />} />
        </Routes>
        <hr />
        <section className='flex flex-col gap-[1rem] min-lg:px-[7rem] min-[700px]:px-[3rem] min-xl:px-[10rem] pb-[3rem] font-CormorantU px-[1rem] py-[2rem] min-md:flex-row-reverse min-md:justify-between'>
          <a href="https://www.github.com/beealmighty" target='_blank'>
            <FaGithub className='text-[2rem]'/>
          </a>
          <p className='flex items-center gap-1.5 text-[1.3rem]'>Made with <GiSelfLove className='text-purple'/> By Lord Hendrixx</p>
        </section>
      </SkeletonTheme>
    </div>
  );
}
