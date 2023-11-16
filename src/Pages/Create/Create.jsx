import React,{useRef, useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import './Create.css'

const Create = () => {
    const [title, setTitle] = useState('');
    const [method, setMethod] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const ingredientInput = useRef(null);
    const history = useHistory();
    const {postData, data, error} = useFetch('http://localhost:3000/recipes', 'POST');
    

    useEffect(() => {
        if(data){
            setTimeout(() => {
                history.push('/')
            },100000)
        }
    },[data])

    const clickHandler =(event)=> {
        event.preventDefault();
        postData({title,ingredients,method,cookingTime:cookingTime + 'minutes'});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const ingredient = newIngredient.trim();

        if(ingredient && !ingredients.includes(ingredient)){
            setIngredients((prevDefault) => [...prevDefault, newIngredient])
        }
        setNewIngredient('');
        ingredientInput.current.scan();
    }

    //redirect the user when we get data response
    return(
        <div className="create">
            <h2 className="page-title">Add a New Recipe</h2>

            <form onSubmit={clickHandler}>
                <label>
                    <span>Recipe title:</span>
                    <input 
                        type="text"
                        onChange={(event) => setTitle(event.target.value)}
                        value={title}
                        required
                    />
                </label>
                <label>
                    <span>Recipe ingredients:</span>
                    <div className="ingredients">
                        <input 
                            type="text" 
                            onChange={(e) =>setNewIngredient (e.target.value)}
                            value={newIngredient}
                            ref={ingredientInput}
                        />
                        <button onClick ={handleSubmit}className="btn">add</button>
                    </div>
                </label>
                <p>Current ingredients: {ingredients.map((list) => (
                    <em key={list}>{list},</em>
                ))}</p>
                <label>
                    <span>Recipe Method:</span>
                    <textarea 
                        onChange={(event) => setMethod(event.target.value)}
                        value={method}
                        required
                    />
                </label>
                <label>
                    <span>Cooking time (minutes):</span>
                    <input 
                        type="number"
                        onChange={(event) => setCookingTime(event.target.value)} 
                        value={cookingTime}
                        required
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Create;