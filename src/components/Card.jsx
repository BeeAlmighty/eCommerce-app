import React, { useContext, useEffect } from 'react'
import { ACTIONS, AppContext } from '../context/Context'
import { Link } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import { Button } from './Button';

export const Card = ({ data }) => {
  const {state, dispatch} = useContext(AppContext);
  const handleAddToCart = (itemId) => {
    dispatch({type: ACTIONS.ADD_CART_ITEMLIST, payload: data, id:itemId})
  }
  return (
    <section className={`flex flex-col gap-[0.5rem] ${state.isDark ? 'bg-black border-gray-700': 'bg-slate-100 border-gray-300'} p-[0.75rem] rounded-lg hover:scale-[1.005] duration-500 max-w-[22rem] border-1 `}>
       <Link to={`/product/${data.id}`}>
        <img src={data.images[0]} alt={data.title} className='h-[18rem] w-full rounded-lg'/>
      </Link>
      <p className='font-CormorantU text-2xl'>{data.title}</p>
      <p className={`${state.isDark ? 'border-gray-400 ' : 'border-gray-300'} font-CormorantU border-1 text-[0.9rem] w-fit py-[0.25rem] px-[0.5rem] rounded-4xl`}>
        {data.category.name}
      </p>
        {
          data.description.length > 6 ? 
            <p className={`font-CormorantU ${state.isDark ? 'text-gray-400' : 'text-gray-600'}`}>
             { data.description.substring(0, 18) + '... '}
              <Link to={`/product/${data.id}`}>
                <button className={`font-extrabold cursor-pointer ${state.isDark ? 'text-white' : 'text-black'}`}>Read More</button>
              </Link>
            </p>
          : data.description}
      <div className='flex justify-between items-center'>
        <div className='flex flex-col items-center m-0'>
          <span className='font-CormorantU text-gray-400'>Price</span>
          <span className='font-script font-extrabold text-[1.4rem]'>{`$${data.price}`}</span>
        </div>
        <Button onSelect={() => handleAddToCart(data.id)}>
          <TiShoppingCart className='text-[1.5rem]'/>
          Add to cart
        </Button>
      </div>
    </section>
  )
}
