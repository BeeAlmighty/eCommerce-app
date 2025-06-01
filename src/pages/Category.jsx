import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context/Context';
import { Card } from '../components/Card';
import { ProductsSkeleton } from '../components/ProductsSkeleton';
import { ErrorMsg } from '../components/ErrorMsg';
import { motion } from 'framer-motion';

export const Category = () => {
	const { state } = useContext(AppContext);
	const { id } = useParams();
	const filteredCard =
		state.data && state.data.filter(card => card.category.name === id);
	return (
		<motion.section
			className='p-[1rem] flex flex-col gap-[2rem] items-center min-lg:px-[3rem] min-[700px]:px-[3rem] min-xl:px-[6rem] py-[3rem] min-lg:flex-row min-lg:items-start'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.25 } }}
		>
			<div
				className={`border-1 ${
					state.isDark ? 'border-gray-900' : 'border-gray-400'
				} p-[1rem] rounded-md flex flex-col gap-[1rem]`}
			>
				<div className='flex gap-1.5 items-center'>
					<img
						src='/assets/images/category.svg'
						alt='category image'
					/>
					<h2 className='text-[1.1rem]'>Categories: </h2>
				</div>
				<div className='grid grid-cols-2 gap-[1rem] min-lg:grid-cols-1 font-CormorantU font-extrabold text-white'>
					<Link to='/products'>
						<p className='border-1 border-gray-700 rounded-md bg-dark-fade {idborder-l-purple border-l-4} px-[1rem] cursor-pointer'>
							All
						</p>
					</Link>
					<Link to='/categories/Clothes'>
						<p
							className={`border-1 border-gray-700 rounded-md bg-dark-fade ${
								id === 'Clothes' && 'border-l-purple border-l-4'
							} px-[1rem] cursor-pointer`}
						>
							Clothes
						</p>
					</Link>
					<Link to='/categories/Shoes'>
						<p
							className={`border-1 border-gray-700 rounded-md bg-dark-fade ${
								id === 'Shoes' && 'border-l-purple border-l-4'
							} px-[1rem] cursor-pointer`}
						>
							Shoes
						</p>
					</Link>
					<Link to='/categories/Furniture'>
						<p
							className={`border-1 border-gray-700 rounded-md bg-dark-fade ${
								id === 'Furniture' && 'border-l-purple border-l-4'
							} px-[1rem] cursor-pointer`}
						>
							Furniture
						</p>
					</Link>
					<Link to='/categories/Electronics'>
						<p
							className={`border-1 border-gray-700 rounded-md bg-dark-fade ${
								id === 'Electronics' && 'border-l-purple border-l-4'
							} px-[1rem] cursor-pointer`}
						>
							Electronics
						</p>
					</Link>
					<Link to='/categories/Miscellaneous'>
						<p
							className={`border-1 border-gray-700 rounded-md bg-dark-fade ${
								id === 'Miscellaneous' && 'border-l-purple border-l-4'
							} px-[1rem] cursor-pointer`}
						>
							Miscellaneous
						</p>
					</Link>
				</div>
			</div>
			{state.isLoading && <ProductsSkeleton cards={12} />}
			<ErrorMsg />
			<div className='grid gap-[2rem] min-xl:grid-cols-3 min-[700px]:grid-cols-2'>
				{state.data &&
					filteredCard.map(data => (
						<Card
							data={data}
							key={data.id}
						/>
					))}
			</div>
		</motion.section>
	);
};
