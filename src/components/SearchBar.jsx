import React from "react";
import '/home/fernando/Desktop/React/my-react-app/src/styles/SearchBar.css';

 const SearchBar = () => {
        return(
            <div className="SearchBar-div">
                <input type="search" className="SearchBar"></input>
                <button className="SearchBar-button">Search</button>
            </div>
        );
 }


 export default SearchBar;