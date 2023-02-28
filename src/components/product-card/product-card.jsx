import React, { Fragment } from 'react';

import './product-card.styles.scss';

const ProductCard = ({ product, index }) => {
	const { id, title, price, img } = product;

	return (
		<Fragment>
			{index % 2 !== 0 ? (
				<div className='ProductCard'>
					<div className='image-box'>
						<img className='product-image' alt='product' src={img} />
					</div>
					<div className='details'>
						<div className='identity'>
							<p className='id'>{id}</p>
							<p className='title'>{title.toLowerCase()}</p>
						</div>
						<p className='price'>${price}</p>
					</div>
				</div>
			) : (
				<div className='ProductCard'>
					<div className='details'>
						<div className='identity'>
							<p className='id'>{id}</p>
							<p className='title'>{title.toLowerCase()}</p>
						</div>
						<p className='price'>${price}</p>
					</div>
					<div className='image-box'>
						<img className='product-image' alt='product' src={img} />
					</div>
				</div>
			)}
		</Fragment>
	);
};

export default ProductCard;
