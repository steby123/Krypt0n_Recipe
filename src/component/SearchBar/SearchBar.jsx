import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
    const [term, setTerm] = useState('');
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        history.push(`/search?q=${term}`)
    }
    return(
        <div className="searchbar">
            <form onSubmit={submitHandler}>
                <label htmlFor="search">Search:</label>
                <input type="text" id="search" onChange={(e) => setTerm(e.target.value)}
                value={term}
                required
            />
            </form>
        </div>
    )
}

export default SearchBar;