import React,{useState,useContext} from 'react';
import '/home/fernando/Desktop/React/my-react-app/src/styles/Header.css';
import Menu from '/home/fernando/Desktop/React/my-react-app/src/components/Menu.jsx';
import menu from '/home/fernando/Desktop/React/my-react-app/src/assets/icons/icon_menu.svg';
import logo from '/home/fernando/Desktop/React/my-react-app/src/assets/logos/logo_yard_sale.svg';
import AppContext from '/home/fernando/Desktop/React/my-react-app/src/context/AppContext.js';
import shoppingCart from '/home/fernando/Desktop/React/my-react-app/src/assets/icons/icon_shopping_cart.svg';
import MyOrder from '/home/fernando/Desktop/React/my-react-app/src/containers/MyOrder.jsx';

const Header = () => {
	const [Toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const {state} = useContext(AppContext);

	const handleToggle = () => {
		setToggle(!Toggle);
	}

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>platzi@example.com</li>
					<li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{Toggle ? <Menu />: null}
			{toggleOrders ? <MyOrder className="pipi"/> :null}
		</nav>
	);
}

export default Header;
