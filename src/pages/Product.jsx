import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ACTIONS, AppContext } from '../context/Context';
import { TiShoppingCart } from 'react-icons/ti';
import { FaAngleLeft } from 'react-icons/fa6';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';

export const Product = () => {
	const { state, dispatch } = useContext(AppContext);
	const { id } = useParams();
	const data = state.data && state.data.find(myId => myId.id == id);
	const totalPrice = data && data.price;
	const handleAddToCart = itemId => {
		dispatch({ type: ACTIONS.ADD_CART_ITEMLIST, payload: data, id: itemId });
	};
	const handleProductImage = index => {
		dispatch({ type: ACTIONS.SELECTED_IMAGE, payload: index });
	};
	return (
		<>
			{data && data.images && (
				<motion.section
					className='min-lg:px-[3rem] min-md:px-[3rem] min-xl:px-[10rem] p-[1rem] grid gap-[2rem] items-center min-lg:grid-cols-2 min-md:grid-cols-2 py-[3rem]'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0, transition: { duration: 0.5 } }}
				>
					<div className='flex flex-col gap-[1rem] min-xl:flex-row-reverse relative'>
						<img
							src={data.images[state.selectedImage]}
							alt={data.title}
							className='h-[25rem] w-full rounded-lg'
						/>
						<Link to='/products'>
							<button
								className={`${
									state.isDark
										? 'border-gray-400 '
										: 'border-gray-300 text-white'
								} font-CormorantU border-1 text-[0.9rem] w-fit py-[0.25rem] px-[0.5rem] rounded-4xl cursor-pointer self-end absolute top-[0.5rem] right-[0.5rem] bg-black flex items-center gap-0.5`}
							>
								<FaAngleLeft />
								Back
							</button>
						</Link>
						<div className='grid grid-cols-3 gap-[1rem] w-[65%] mx-auto min-xl:grid-cols-1 min-lg:gap-[1rem'>
							{data.images &&
								data.images.map((image, index) => (
									<img
										key={index}
										src={image}
										alt={data.title}
										className={`rounded-lg ${
											state.selectedImage === index &&
											'opacity-20 ease-in duration-200 bg-white'
										} cursor-pointer`}
										onClick={() => handleProductImage(index)}
									/>
								))}
						</div>
					</div>
					<div className='flex flex-col gap-[1rem] min-lg:justify-between'>
						<div>
							<p className='font-CormorantU text-2xl'>{data.title}</p>
						</div>
						<p
							className={`${
								state.isDark ? 'border-gray-400 ' : 'border-gray-300'
							} font-CormorantU border-1 text-[0.9rem] w-fit py-[0.25rem] px-[0.5rem] rounded-4xl`}
						>
							{data.category.name}
						</p>
						<p className='text-[1rem] font-CormorantU text-gray-500'>
							{data.description}
						</p>
						<div className='flex items-center justify-between'>
							<div className='flex flex-col'>
								<span className={`text-[0.9rem] font-CormorantU`}>Price</span>
								<p className='font-CormorantU text-3xl font-extrabold'>
									{'$' + totalPrice.toFixed(2)}
								</p>
							</div>
							<Button onSelect={() => handleAddToCart(data.id)}>
								<TiShoppingCart className='text-[1.5rem]' />
								Add to cart
							</Button>
						</div>
					</div>
				</motion.section>
			)}
		</>
	);
};
