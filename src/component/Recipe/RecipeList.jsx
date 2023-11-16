import React, { useState } from 'react';
import './RecipeList.css';
import { Link } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';

const RecipeList = ({ recipes }) => {
  const [recipeList, setRecipeList] = useState(recipes);

  const deleteHandler = (id) => {
    const updatedList = recipeList.filter((item) => item.id !== id);
    setRecipeList(updatedList);
  };

  const {mode} = useTheme()
  const {color} = useTheme()

  return (
    <div className='recipe-list'>
      {recipeList.map((item) => (
        <div key={item.id} className={`card ${mode}`}>
          <h3>{item.title}</h3>
          <p>{item.cookingTime} to make.</p>
          <div>{item.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${item.id}`}>Cook This</Link>
          <button className='btn' onClick={() => deleteHandler(item.id)} style={{background:color}}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
