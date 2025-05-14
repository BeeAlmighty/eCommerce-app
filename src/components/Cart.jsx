import React, { useContext } from 'react'
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { ACTIONS, AppContext } from '../context/Context';

export const Cart = ({ data, qty, price }) => {
  const { dispatch } = useContext(AppContext);
  const handleProductQtyIncrease = (dataId) => {
    dispatch({type: ACTIONS.INCREMENT_PRODUCT_QTY, id: dataId})
  }
  const handleProductQtyDecrease = (dataId) => {
    if(qty > 1){
      dispatch({type: ACTIONS.DECREMENT_PRODUCT_QTY, id: dataId})
    }
  }
  const handleDeleteCartItem = (ItemId) => {
    dispatch({type: ACTIONS.DELETE_CART_ITEM, id: ItemId, payload: qty})
  }
  return (
    <div className='bg-gray-300 text-black rounded-lg p-[1rem] flex flex-col gap-[1rem]'>
      <p className='text-start text-[1.1rem]'>{data.title}</p>
      <div className='flex items-center justify-between'>
        <img src={data.images[0]} alt="" className='w-[4rem] h-[5rem] rounded-lg min-md:h-[6rem] min-md:w-[6rem]'/>
        <div className='flex items-center border-gray-300 border-2 gap-[1rem] px-[1rem] rounded-lg'>
          <button className='cursor-pointer bg-purple hover:bg-purple-600 duration-150 focus:border-2 ease-in p-[0.25rem] rounded-md text-white' onClick={() => handleProductQtyDecrease(data.id)}>
            <FaMinus />
          </button>
          <p className='text-[1.1rem]'>{qty}</p>
          <button className='cursor-pointer bg-purple hover:bg-purple-600 duration-150 focus:border-2 ease-in p-[0.25rem] rounded-md text-white' onClick={() => handleProductQtyIncrease(data.id)}>
            <FaPlus className='text-[1.2rem]'/>
          </button>
        </div>
        <p className='text-[1.4rem]'>{price}</p>
       <button onClick={() => handleDeleteCartItem(data.id)}>
        <MdOutlineDeleteForever className='text-red-500 text-[1.8rem] cursor-pointer hover:text-red-700'/>
       </button>
      </div>
    </div>
  )
}
