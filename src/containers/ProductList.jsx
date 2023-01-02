import React from 'react';
import '/home/fernando/Desktop/React/my-react-app/src/styles/ProductList.css';
import ProductItem from '/home/fernando/Desktop/React/my-react-app/src/components/ProductItem.jsx';
import useGetProducts from '../hooks/useGetProduct';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProducts(API);

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product =>(
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
	);
}

export default ProductList;
