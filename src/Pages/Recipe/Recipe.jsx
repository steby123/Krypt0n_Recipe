import React from "react";
import {useParams} from "react-router-dom"
import useFetch from "../../hooks/useFetch";
import './Recipe.css';
import useTheme from "../../hooks/useTheme";

const Recipe = () => {
    const { id } = useParams()
    const url = "http://localhost:3000/recipes/" + id
    const {data, isPending, error} = useFetch(url)
    const {mode} = useTheme();

    return(
        <div className={`recipe ${mode}`}>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && (  
                <>
                    <h2 className="page-title">{data.title}</h2>
                    <p>Takes {data.cookingTime} to cook.</p>
                    <ul>
                        {data.ingredients.map((ingredient) => (
                            <li>{ingredient}</li>
                        ))}
                    </ul>
                    <p className="method">{data.method}</p>
                </>
            )}
        </div>
    )
}

export default Recipe;