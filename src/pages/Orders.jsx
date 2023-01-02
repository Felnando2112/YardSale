import React,{useContext} from 'react';
import AppContext from '../context/AppContext';
import Order from '/home/fernando/Desktop/React/my-react-app/src/components/Order.jsx';
import '/home/fernando/Desktop/React/my-react-app/src/styles/Order.css';

const Orders = () => {
	const {state} = useContext(AppContext);
	return (
		<div className="Orders">
			<div className="Orders-container">
				<h1 className="title">My orders</h1>
				<div className="Orders-content">
				{state.cart.map(product =>(
				<Order/>
				))}
				</div>
			</div>
		</div>
	);
}

export default Orders;
