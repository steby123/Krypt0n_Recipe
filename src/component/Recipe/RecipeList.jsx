import React, { useState } from 'react';
import './RecipeList.css';
import { Link } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';
import TrashIcon from '../../assets/delete_FILL0_wght400_GRAD0_opsz24.svg';
import { projectFirestore } from '../../firebase/firebase';

const RecipeList = ({ recipes }) => {
  const {mode} = useTheme()
  const {color} = useTheme()

  if(recipes.length === 0 ){
    return <div className='error'>No recipes to load...</div>
  }

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete()
  }

  return (
    <div className='recipe-list'>
      {recipes.map((item) => (
        <div key={item.id} className={`card ${mode}`}>
          <h3>{item.title}</h3>
          <p>{item.cookingTime} to make.</p>
          <div>{item.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${item.id}`}>Cook This</Link>
          <img 
            className='delete'
            src={TrashIcon}
            onClick={() => handleClick(item.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
