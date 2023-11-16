import React from "react";
import useFetch from "../../hooks/useFetch";
import './Home.css';
import RecipeList from "../../component/Recipe/RecipeList";

const Home = () => {
    const {data, isPending, error} = useFetch('http://localhost:3000/recipes')

    return(
        <div className="home">
            {isPending && <p className="loading">Loading...</p>}
            {error && <p className="error">{error}</p>}
            {data && <RecipeList recipes={data} /> }
        </div>
    )
}

export default Home;