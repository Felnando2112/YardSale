import React from 'react';
import '/home/fernando/Desktop/React/my-react-app/src/styles/ProductList.css';
import ProductItem from '/home/fernando/Desktop/React/my-react-app/src/components/ProductItem.jsx';
import useGetProducts from '../hooks/useGetProduct';

const API = 'https://fakestoreapi.com/products';

const ProductList = (father) => {
	const products = useGetProducts(API);

	return (
		<section className="main-container">
			<div className="ProductList">
				{father.category === 'Home' ? 
				products.map(product =>(
					<ProductItem product={product} key={product.id} />

				)) : father.category === 'Clothes' ? products.map(product => product.category.includes('clothing') || product.category.includes('jewelery') ? (
					<ProductItem product={product} key={product.id} />

				) : null) : father.category === 'Electronics' ? products.map(product => product.category.includes('electronics')? (
					<ProductItem product={product} key={product.id} />

				) : null) : father.category === 'Furnitures' ? products.map(product => product.category.includes('furnitures')? (
					<ProductItem product={product} key={product.id} />

				) : null) : father.category === 'Toys' ? products.map(product => product.category.includes('toys')? (
					<ProductItem product={product} key={product.id} />

				) : null) : products.map(product =>(
					<ProductItem product={product} key={product.id} />

				))
				
				}
			</div>
		</section>
	);
}

export default ProductList;
