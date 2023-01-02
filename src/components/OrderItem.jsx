import React,{useContext} from 'react';
import AppContext from '../context/AppContext';
import '/home/fernando/Desktop/React/my-react-app/src/styles/OrderItem.css';

const OrderItem = ({product}) => {
	const { removeFromCart } = useContext(AppContext);
	const handleRemove = item => removeFromCart(item);
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src="./icons/icon_close.png" alt="close" onClick={() => handleRemove(product)}/>
		</div>
	);
}

export default OrderItem;
