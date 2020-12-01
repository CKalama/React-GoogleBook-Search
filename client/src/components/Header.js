import React from 'react'
import "../App.css";
import { Link } from "react-router-dom";

function SearchBar() {
    return (
        <header className="header-style">
            
        <h1><u>Google Book Search</u></h1>
            <h3><em>Google Search Engine Functionality for Books</em></h3>
            <Link to="/Favorites">
            <button>View Favorites</button>
            </Link>
        </header>
        
        
    )
}

export default SearchBar
