import React, {useState} from 'react';
import '/home/fernando/Desktop/React/my-react-app/src/styles/ProductList.css';
import ProductItem from '/home/fernando/Desktop/React/my-react-app/src/components/ProductItem.jsx';
import useGetProducts from '../hooks/useGetProduct';

const API = 'https://fakestoreapi.com/products';

const ProductList = (father) => {
	const products = useGetProducts(API);
	var resultadoBusqueda = products;
	console.log(resultadoBusqueda);
	const [xd,setXd] = useState(products);
	console.log(xd);
	const [busqueda,setBusqueda] = useState("");
    const handleBusqueda = e => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }
	const filtrar = (terminoBusqueda) => {
		resultadoBusqueda = products.filter((product)=>{
			if(product.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
				return product;
			}
		});
		console.log(xd);
		setXd(resultadoBusqueda);
	}
	return (
		<section className="main-container">
			<div className="SearchBar-div">
                <input type="search" className="SearchBar" value={busqueda} onChange={handleBusqueda}></input>
                <button className="SearchBar-button">Search</button>
            </div>
			<div className="ProductList">
				{father.category === 'Home' ? 
				xd.map(product =>(
					<ProductItem product={product} key={product.id} />

				)) : father.category === 'Clothes' ? xd.map(product => product.category.includes('clothing') || product.category.includes('jewelery') ? (
					<ProductItem product={product} key={product.id} />

				) : null) : father.category === 'Electronics' ? xd.map(product => product.category.includes('electronics')? (
					<ProductItem product={product} key={product.id} />

				) : null) : father.category === 'Furnitures' ? xd.map(product => product.category.includes('furnitures')? (
					<ProductItem product={product} key={product.id} />

				) : null) : father.category === 'Toys' ? xd.map(product => product.category.includes('toys')? (
					<ProductItem product={product} key={product.id} />

				) : null) : xd.map(product =>(
					<ProductItem product={product} key={product.id} />
				)) 
				}
			</div>
		</section>
	);
}

export default ProductList;
