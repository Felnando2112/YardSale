import React, {useContext} from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import '../styles/Checkout.css';

const Checkout = () => {
	const {state} = useContext(AppContext);
	const sumTotal = () => {
		const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
		const sum = state.cart.reduce(reducer,0);
		return(sum);
	}
	var initialValue = 0;
	var articlesNumber = state.cart.reduce((previousValue, currentValue) => previousValue + currentValue,
	initialValue);
	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My order</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>{state.date.getDate()}. {state.date.getMonth()+1}. {state.date.getFullYear()}</span>
							<span>{articlesNumber} articles</span>
						</p>
						<p>${sumTotal()}</p>
					</div>
				</div>
				{state.cart.map(product =>(
				<OrderItem product={product} key={`orderItem-${product.id}`}/>
				))}
			</div>
		</div>
	);
}

export default Checkout;
