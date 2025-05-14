import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const ProductsSkeleton = ({cards}) => {
  return (
    <div className='grid gap-[2rem] min-[700px]:grid min-[700px]:grid-cols-2 min-lg:grid-cols-2 min-xl:grid-cols-3'>
      {Array(cards).fill(0).map((_, i) => (
        <div key={i} className='flex flex-col gap-[0.75rem] border-1 border-gray-700 rounded-lg p-[1rem]'>  
          <div className='image-skeleton'>
            <Skeleton className='h-full w-full' style={{borderRadius: '0.75rem'}}/>
          </div>
          <div className='flex flex-col'>
            <Skeleton width={'10rem'}/>
            <Skeleton width={'6rem'}/>
            <Skeleton width={'12rem'}/>
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <Skeleton width={'4rem'} />
              <Skeleton width={'4rem'} />
            </div>
            <Skeleton width={'9rem'} height={'2.5rem'}/>
          </div>
        </div>
      ))}
    </div>
  )
}
