import React, { useContext } from 'react'
import { RenderCard } from '../components/RenderCard'
import { AppContext } from '../context/Context'
import { Link } from 'react-router-dom';
import { ProductsSkeleton } from '../components/ProductsSkeleton';
import { ErrorMsg } from '../components/ErrorMsg';

export const Products = () => {
  const {state} = useContext(AppContext);
  return (
    <section className='p-[1rem] flex flex-col items-center min-lg:px-[7rem] min-md:px-[3rem] min-xl:px-[10rem] py-[3rem] gap-[2rem]'>
      <div className={`border-1 ${state.isDark ? 'border-gray-900 text-white' : 'border-gray-400'} p-[1rem] rounded-md flex flex-col gap-[1rem] `}>
        <div className='flex gap-1.5 items-center'>
          <img src="assets/images/category.svg" alt="category image" />
          <h2 className='text-[1.1rem]'>Categories: </h2>
        </div>
        <div className='grid grid-cols-2 gap-[1rem] min-lg:grid-cols-3 font-CormorantU font-extrabold text-white'>
         <Link to='/products'>
          <p className='border-1 border-gray-700 rounded-md bg-dark-fade border-l-purple border-l-4 px-[1rem] cursor-pointer'>
              All
            </p>
         </Link>
         <Link to='/categories/Clothes'>
          <p className={`border-1 border-gray-700 rounded-md bg-dark-fade px-[1rem] cursor-pointer`}>
              Clothes
            </p>
         </Link>
         <Link to='/categories/Shoes'>
          <p className={`border-1 border-gray-700 rounded-md bg-dark-fade px-[1rem] cursor-pointer`}>
              Shoes
            </p>
         </Link>
         <Link to='/categories/Furniture'>
          <p className={`border-1 border-gray-700 rounded-md bg-dark-fade px-[1rem] cursor-pointer`}>
              Furniture
            </p>
         </Link>
         <Link to='/categories/Electronics'>
          <p className={`border-1 border-gray-700 rounded-md bg-dark-fade px-[1rem] cursor-pointer`}>
              Electronics
            </p>
         </Link>
         <Link to='/categories/Miscellaneous'>
          <p className={`border-1 border-gray-700 rounded-md bg-dark-fade px-[1rem] cursor-pointer`}>
            Miscellaneous
          </p>
         </Link>
        </div>
      </div>
      {state.isLoading && <ProductsSkeleton cards={12}/>}
      <ErrorMsg />
      <RenderCard />
    </section>
  )
}
