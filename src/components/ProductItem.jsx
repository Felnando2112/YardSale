import React, {useContext} from 'react';
import '/home/fernando/Desktop/React/my-react-app/src/styles/ProductItem.css';
import AppContext from '/home/fernando/Desktop/React/my-react-app/src/context/AppContext.js';


const ProductItem = ({product}) => {
	const {addToCart} = useContext(AppContext);

	const handleClick = (item) => {
		addToCart(item);
		console.log(item);
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src="/home/fernando/Desktop/React/my-react-app/src/assets/icons/bt_add_to_cart.svg" alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
