import React, { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/firebase";

import './Home.css';
import RecipeList from "../../component/Recipe/RecipeList";

const Home = () => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    
    useEffect(() => {   
        setIsPending(true)

        const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
            if(snapshot.empty){
                setError('No Recipe Load')
                setIsPending(false)
            }else{
                let results = []
                snapshot.docs.forEach(doc => {
                    results.push(
                        {id : doc.id,...doc.data()})
                })
                setData(results)
                setIsPending(false)
            }
        })
        return () => unsub()
    },[])

    return(
        <div className="home">
            {isPending && <p className="loading">Loading...</p>}
            {error && <p className="error">{error}</p>}
            {data && <RecipeList recipes={data} /> }
        </div>
    )
}

export default Home;