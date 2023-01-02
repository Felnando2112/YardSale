import React,{useContext} from 'react';
import AppContext from '../context/AppContext';
import '/home/fernando/Desktop/React/my-react-app/src/styles/Order.css';

const Order = () => {
	const {state} = useContext(AppContext);
	return (
		<div className="Order">
			<p>
				<span>{state.date.getDate()}. {state.date.getMonth()+1}. {state.date.getFullYear()}</span>
				<span>{state.cart.length} articles</span>
			</p>
			<p>$0</p>
			<img src="./icons/flechita.svg" alt="arrow" />
		</div>
	);
}

export default Order;
