import React from 'react';
import '/home/fernando/Desktop/React/my-react-app/src/styles/Menu.css';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<a href="/orders" className="title">My orders</a>
				</li>
				<li>
					<a href="/account">My account</a>
				</li>
				<li>
					<a href="/">Sign out</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
