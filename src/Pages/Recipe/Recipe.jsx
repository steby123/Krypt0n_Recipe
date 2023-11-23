import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { projectFirestore } from "../../firebase/firebase";
import useFetch from "../../hooks/useFetch";
import './Recipe.css';
import useTheme from "../../hooks/useTheme";

const Recipe = () => {
    const { id } = useParams()
    const {mode} = useTheme();

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsPending(true)

        const onsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {
            if(doc.exists){
                setIsPending(false);
                setData(doc.data())
            }else{
                setIsPending(false);
                setError('Could not find that recipe')
            }
        })

        return () => onsub
    },[id])

    const handleClick = () => {
        projectFirestore.collection('recipes').doc(id).update({
            title:'Something has been Updated'
        })
    }

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
                    <button onClick={handleClick}>Update Me</button>
                </>
            )}
        </div>
    )
}

export default Recipe;