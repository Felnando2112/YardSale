import React, {useContext} from 'react';
import '/home/fernando/Desktop/React/my-react-app/src/styles/ProductItem.css';
import AppContext from '/home/fernando/Desktop/React/my-react-app/src/context/AppContext.js';
import cart from '/home/fernando/Desktop/React/my-react-app/src/assets/icons/cart.svg';


const ProductItem = ({product}) => {
	const {addToCart} = useContext(AppContext);

	const handleClick = (item) => {
		addToCart(item);
		console.log(item);
	}
	return (
		<div className="ProductItem">
			<img src={product.image} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={cart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
