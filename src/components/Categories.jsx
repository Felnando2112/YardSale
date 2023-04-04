import React from 'react';
import '../styles/Categories.css';

const Categories = () => {
	return (
		<div className='Categories-div'>
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
					<a href="/Furnitures">Furniture</a>
				</li>
                <li>
					<a href="/Toys">Toys</a>
				</li>
                <li>
					<a href="/others">Others</a>
				</li>
			</ul>
		</div>
	);
}

export default Categories;