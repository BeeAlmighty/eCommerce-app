import React from 'react';
import { useLocation } from 'react-router-dom';
import { Homepage } from '../pages/Homepage';
import { Product } from '../pages/Product';
import { CartItems } from '../pages/CartItems';
import { Products } from '../pages/Products';
import { Category } from '../pages/Category';
import { About } from '../pages/About';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export const AnimatedPages = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes
				location={location}
				key={location.pathname}
			>
				<Route
					path='/'
					element={<Homepage />}
				/>
				<Route path='product'>
					<Route
						path=':id'
						element={<Product />}
					/>
				</Route>
				<Route
					path='cart'
					element={<CartItems />}
				/>
				<Route
					path='products'
					element={<Products />}
				/>
				<Route path='categories'>
					<Route
						path=':id'
						element={<Category />}
					/>
				</Route>
				<Route
					path='about'
					element={<About />}
				/>
			</Routes>
		</AnimatePresence>
	);
};
