import React,{useState} from "react";
import '../styles/SearchBar.css';



 const SearchBar = () => {
    const [busqueda,setBusqueda] = useState("");
    const handleBusqueda = e => {
        setBusqueda(e.target.value);
        console.log("Busqueda: "+e.target.value);
    }
        return(
            <div className="SearchBar-div">
                <input type="search" className="SearchBar" value = {busqueda || ''} onChange={handleBusqueda}></input>
                <button className="SearchBar-button">Search</button>
            </div>
        );
 }


 export default SearchBar;