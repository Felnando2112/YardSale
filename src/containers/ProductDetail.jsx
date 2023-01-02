import React from 'react';
import ProductInfo from '/home/fernando/Desktop/React/my-react-app/src/components/ProductInfo.jsx';
import '/home/fernando/Desktop/React/my-react-app/src/styles/ProductDetail.css';

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src="./icons/icon_close.png" alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;
