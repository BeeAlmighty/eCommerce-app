import React, { useContext } from 'react'
import { ACTIONS, AppContext } from '../context/Context'
import { Card } from './Card';

export const RenderCard = () => {
  const {state, dispatch} = useContext(AppContext);
  const visibleProducts = state.visibleProductCount < state.data.length;
  const handleShowMore = () => {
    dispatch({type: ACTIONS.SHOW_MORE_CART_ITEMS, payload: state.data.length});
  }
  return (
    <div className='flex flex-col items-center gap-[2rem]'>
      <div className='grid gap-[2rem] min-xl:grid-cols-3 min-[700px]:grid-cols-2'>
        {state.data && state.data.slice(0, state.visibleProductCount).map((data) => <Card data={data} key={data.id} />)}
      </div>
      {visibleProducts && <button className='button bg-purple duration-300 text-white px-[1rem] cursor-pointer py-[0.5rem] hover:bg-purple-600' onClick={handleShowMore}>Show More</button>}
    </div>
  )
}
