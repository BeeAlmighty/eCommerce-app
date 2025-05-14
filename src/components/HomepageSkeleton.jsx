import React, { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const HomepageSkeleton = ({cards}) => {
  return (
    <div className='grid gap-[2rem] min-[600px]:grid min-[600px]:grid-cols-2 min-lg:grid-cols-3'>
      {Array(cards).fill(0).map((_, index) => (
        <div className='skeleton-container ' key={index}>
          <div className='top-skeleton'>
            <Skeleton />
          </div>
          <div className='bottom-skeleton'>
            <Skeleton className='h-full w-full' style={{borderRadius: '0.75rem'}}/>
          </div>
        </div>
      ))}
    </div>
  )
}
