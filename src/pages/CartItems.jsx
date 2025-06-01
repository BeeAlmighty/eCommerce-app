import React, { useContext } from 'react';
import { AppContext } from '../context/Context';
import { Cart } from '../components/Cart';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
export const CartItems = () => {
	const { state } = useContext(AppContext);
	const data = state.cartItemsList;
	const grossPrice = data.reduce((accumulator, item) => {
		return accumulator + item.price * item.quantity;
	}, 0);
	const vatPrice = grossPrice * (7.5 / 100);
	const discountedPrice = grossPrice > 1000 ? (grossPrice * 10) / 100 : 0;
	return (
		<motion.section
			className='flex flex-col items-center p-[1rem] gap-[2rem] min-lg:px-[7rem] min-md:px-[3rem] min-xl:px-[10rem] py-[4rem] max-w-[60rem] mx-auto'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
		>
			<h2 className='text-2xl'>CART ITEMS</h2>
			<p className='text-[1.5rem]'>
				{!state.cartTotalQuantity && 'EXPLORE PRODUCTS'}
			</p>
			<div
				className={`border-1 ${
					state.isDark ? 'border-gray-900 text-white' : 'border-gray-400'
				} p-[1rem] rounded-md flex flex-col gap-[1rem] `}
			>
				<div className='flex gap-1.5 items-center'>
					<img
						src='assets/images/category.svg'
						alt='category image'
					/>
					<h2 className='text-[1.1rem]'>Categories: </h2>
				</div>
				<div className='grid grid-cols-2 gap-[1rem] font-CormorantU font-extrabold text-white'>
					<Link to='/products'>
						<p className='border-1 border-gray-700 rounded-md bg-dark-fade border-l-purple border-l-4 px-[1rem] cursor-pointer'>
							All
						</p>
					</Link>
					<Link to='/categories/Clothes'>
						<p
							className={`border-1 border-gray-700 rounded-md bg-dark-fade px-[1rem] cursor-pointer`}
						>
							Clothes
						</p>
					</Link>
					<Link to='/categories/Shoes'>
						<p
							className={`border-1 border-gray-700 rounded-md bg-dark-fade px-[1rem] cursor-pointer`}
						>
							Shoes
						</p>
					</Link>
					<Link to='/categories/Furniture'>
						<p
							className={`border-1 border-gray-700 rounded-md bg-dark-fade px-[1rem] cursor-pointer`}
						>
							Furniture
						</p>
					</Link>
					<Link to='/categories/Electronics'>
						<p
							className={`border-1 border-gray-700 rounded-md bg-dark-fade px-[1rem] cursor-pointer`}
						>
							Electronics
						</p>
					</Link>
					<Link to='/categories/Miscellaneous'>
						<p
							className={`border-1 border-gray-700 rounded-md bg-dark-fade px-[1rem] cursor-pointer`}
						>
							Miscellaneous
						</p>
					</Link>
				</div>
			</div>
			{state.cartTotalQuantity > 0 ? (
				<div className='flex flex-col gap-[1rem] font-CormorantU'>
					<div className='flex flex-col gap-[1rem] font-CormorantU'>
						{data.map(item => {
							return (
								<Cart
									data={item}
									key={item.id}
									qty={item.quantity}
									price={`$ ${(item.price * item.quantity).toLocaleString(
										undefined,
										{ minimumFractionDigits: 2, maximumFractionDigits: 2 }
									)}`}
								/>
							);
						})}
					</div>
					<div className='bg-slate-300 p-[1rem] rounded-xl text-black flex flex-col gap-[0.5rem] font-CormorantU'>
						<h2 className='text-2xl font-extrabold'>CART SUMMARY</h2>
						<div className='flex justify-between text-[1.4rem]'>
							<span>Item's total ({state.cartTotalQuantity})</span>
							<span className='font-bold'>
								{'$ ' +
									grossPrice.toLocaleString(undefined, {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}
							</span>
						</div>
						<div className='flex justify-between font-bold'>
							<span>VAT (7.5%)</span>
							<span className='text-gray-700 text-[1.2rem]'>
								{'+ ' +
									'$ ' +
									vatPrice.toLocaleString(undefined, {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}
							</span>
						</div>
						<div className={`flex justify-between items-center font-bold`}>
							<span className={`${!discountedPrice && 'text-gray-400'}`}>
								Discount (10%) $1,000 & above
							</span>
							<span
								className={`${
									discountedPrice > 0 ? 'text-green-500' : 'text-gray-400'
								} text-2xl`}
							>
								{'- ' +
									discountedPrice.toLocaleString(undefined, {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}
							</span>
						</div>
						<hr />
						<div className='flex justify-between items-center font-bold'>
							<span>Subtotal</span>
							<span className='text-3xl'>
								{'$ ' +
									(grossPrice + vatPrice - discountedPrice).toLocaleString(
										undefined,
										{ minimumFractionDigits: 2, maximumFractionDigits: 2 }
									)}
							</span>
						</div>
						<p>Delivery fees not included yet</p>
						<hr />
						<button className='button bg-purple text-white text-[1.2rem] hover:bg-purple-700 ease-in duration-150 focus:border-2 focus:border-white'>
							Checkout (
							{`$ ${(grossPrice + vatPrice - discountedPrice).toLocaleString(
								undefined,
								{ minimumFractionDigits: 2, maximumFractionDigits: 2 }
							)}`}
							)
						</button>
					</div>
				</div>
			) : (
				<section className='flex flex-col items-center gap-[3rem]'>
					<p className='font-CormorantU text-[1.5rem] text-gray-500'>
						Cart is empty
					</p>
				</section>
			)}
		</motion.section>
	);
};
