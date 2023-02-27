import React from 'react';

import './hero.styles.scss';

// data
import { products } from '../../data/categories';

// components
import ProductCard from '../product-card/product-card';

const Hero = () => {
	return (
		<div className='hero-container'>
			<h1 className='title'>NEW</h1>
			<h1 className='title'>COLLECTION</h1>

			<div className='product-container'>
				{products.map((product, index, array) => (
					<ProductCard product={product} index={index} key={product.id} />
				))}
			</div>
		</div>
	);
};

export default Hero;
