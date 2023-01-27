import React, {useState,useEffect} from 'react';
import '/home/fernando/Desktop/React/my-react-app/src/styles/ProductList.css';
import ProductItem from '/home/fernando/Desktop/React/my-react-app/src/components/ProductItem.jsx';
import axios from 'axios';

const API = 'https://fakestoreapi.com/products';

const ProductList = (father) => {
	const [products, setProducts] = useState([]);
	const [busqueda,setBusqueda] = useState("");


	const peticionesGet = async () =>{
		await axios.get(API).then(Response => {
			setProducts(Response.data);
		}).catch(error => {
			console.log(error);
		})
	}
	
	useEffect(()=>{
	peticionesGet();
	},[])


    const handleBusqueda = e => {
        setBusqueda(e.target.value);
    }
	
	var preview = [];

	if(!busqueda.length >= 1){
		preview = products;
	}else{
		preview = products.filter(product => {
			const title = product.title.toLowerCase();
			const textoBusqueda = busqueda.toLowerCase();
			return title.includes(textoBusqueda);
		})
	}


	return (
		<section className="main-container">
			<div className="SearchBar-div">
                <input type="search" className="SearchBar" value={busqueda} onChange={handleBusqueda}></input>
                <button className="SearchBar-button">Search</button>
            </div>
			<div className="ProductList">
				{father.category === 'Home' ? 
				preview.map(product =>(
					<ProductItem product={product} key={product.id} />

				)) : father.category === 'Clothes' ? preview.map(product => product.category.includes('clothing') || product.category.includes('jewelery') ? (
					<ProductItem product={product} key={product.id} />

				) : null) : father.category === 'Electronics' ? preview.map(product => product.category.includes('electronics')? (
					<ProductItem product={product} key={product.id} />

				) : null) : father.category === 'Furnitures' ? preview.map(product => product.category.includes('furnitures')? (
					<ProductItem product={product} key={product.id} />

				) : null) : father.category === 'Toys' ? preview.map(product => product.category.includes('toys')? (
					<ProductItem product={product} key={product.id} />

				) : null) : preview.map(product =>(
					<ProductItem product={product} key={product.id} />
				)) 
				}
			</div>
		</section>
	);
}

export default ProductList;
