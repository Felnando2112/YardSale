import React,{useState,useContext} from 'react';
import '../styles/Header.css';
import Categories from './Categories';
import menu from '../assets/icons/icon_menu.svg';
import logo from '../assets/logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext.js';
import shoppingCart from '../assets/icons/icon_shopping_cart.svg';
import MyOrder from '../containers/MyOrder.jsx';

const Header = () => {
	const [ToggleCat, setToggleCat] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const {state} = useContext(AppContext);


	const handleToggleCat = () => {
		setToggleCat(!ToggleCat);
	}
	
	return (
		<nav>
			<img src={menu} alt="menu" className="menu" onClick={handleToggleCat}/>
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
				<li>
						<a href="/login">Sign In</a>
					</li>
					<li>
						<a href="/signup">Sign Up</a>
					</li>
					<li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{ToggleCat ? <Categories/> : null}
			{toggleOrders ? <MyOrder className="pipi"/> :null}
		</nav>
	);
}

export default Header;
