import React,{useState,useContext} from 'react';
import '/home/fernando/Desktop/React/my-react-app/src/styles/Header.css';
import Menu from '/home/fernando/Desktop/React/my-react-app/src/components/Menu.jsx';
import menu from '/home/fernando/Desktop/React/my-react-app/src/assets/icons/icon_menu.svg';
import logo from '/home/fernando/Desktop/React/my-react-app/src/assets/logos/logo_yard_sale.svg';
import AppContext from '/home/fernando/Desktop/React/my-react-app/src/context/AppContext.js';
import shoppingCart from '/home/fernando/Desktop/React/my-react-app/src/assets/icons/icon_shopping_cart.svg';
import MyOrder from '/home/fernando/Desktop/React/my-react-app/src/containers/MyOrder.jsx';
import { useUserContext, useUserToggle } from '../context/userProvider';

const Header = () => {
	const user = useUserContext();
	const cambiaLogin = useUserToggle();
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
						<a href="/Clothes">Clothes</a>
					</li>
					<li>
						<a href="/Electronics">Electronics</a>
					</li>
					<li>
						<a href="/Furnitures">Furnitures</a>
					</li>
					<li>
						<a href="/Toys">Toys</a>
					</li>
					<li>
						<a href="/others">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					{ user ? 
					<>
					<li className="">
						<a href="/account" className="navbar-signin-button">{user.email}</a>
					</li>
					</>
					: <>
					<li className="navbar-signin" onClick={cambiaLogin}>
						<button className="navbar-signin-button">Sign In</button>
					</li>
					<li className="navbar-signup" onClick={handleToggle}>
						<a href="/signup" className="navbar-signup-button">Sign Up</a>
					</li>
					  </>
}
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
