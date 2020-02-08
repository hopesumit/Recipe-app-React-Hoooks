import React from "react";
import "./App.css";



const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>
            {ingredient.key}
            {ingredient.text}
          </li>
        ))}
      </ol>
      <p>Calories - {calories}</p>
      <img className="img" src={image} alt="" />
    </div>
  );
};

export default Recipe;
