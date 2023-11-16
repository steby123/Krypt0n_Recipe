import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import './Navbar.css';
import SearchBar from "../SearchBar/SearchBar";
import useTheme from "../../hooks/useTheme";

const Navbar = () => {
    const { color } = useTheme();
    return(
         
        <div className="navbar" style={{background:color}}>
            <nav>
                <Link to="/" className="brand">
                    <h1>Recipe Krypt0n</h1>
                </Link>
                <SearchBar />
                <Link to="/create">
                    Create Food
                </Link>
            </nav>
        </div>
    )  
}

export default Navbar;