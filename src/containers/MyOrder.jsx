import React, {useContext} from 'react';
import OrderItem from '/home/fernando/Desktop/React/my-react-app/src/components/OrderItem.jsx';
import AppContext from '../context/AppContext';
import '/home/fernando/Desktop/React/my-react-app/src/styles/MyOrder.css';


const MyOrder = () => {
	const {state} = useContext(AppContext);
	const sumTotal = () => {
		const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
		const sum = state.cart.reduce(reducer,0);
		return(sum);
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product =>(
				<OrderItem product={product} key={`orderItem-${product.id}`}/>
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					<a href='/checkout'>Checkout</a>
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
