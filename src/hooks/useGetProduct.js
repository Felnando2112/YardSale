import { useEffect,useState } from 'react';
import axios from 'axios';


const useGetProducts = (API) => {
const [products, setProducts] = useState([]);

	useEffect(() => {
		async function check () {
		const response = await axios(API);
		setProducts(response.data); }
		check ();
	}, []);
    
    return products;
};

export default useGetProducts;