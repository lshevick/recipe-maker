import { useEffect, useState } from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";

import './RecipeList.css';


function handleError(err) {
  console.warn(err);
}

const RecipeList = () => {
    const [isAuth, setIsAuth, navigate, recipes] = useOutletContext();


  const recipeList = recipes.map((recipe) => (
    <li key={recipe.id} className="recipe-thumbnail w-48 mx-2 h-48 overflow-hidden relative flex items-center justify-center">
      <Link to={`/recipes/${recipe.id}`}>
        <div className="flex items-center justify-center">
        <div className="recipe-title transition-all absolute bg-black bg-opacity-50 text-white bottom-0 -translate-y-full origin-center rounded-md p-1">{recipe.name}</div>
      <img src={recipe.image} alt="background recipe" className="object-cover" />
        </div>
      </Link>
    </li>
  ));

  const publicRecipes = recipes.filter(i => i.is_public === true).map((recipe) => (
    <li key={recipe.id} className="recipe-thumbnail w-48 mx-2 h-48 overflow-hidden relative flex items-center justify-center">
      <Link to={`/recipes/${recipe.id}`}>
        <div className="flex items-center justify-center">
        <div className="recipe-title transition-all absolute bg-black bg-opacity-50 text-white bottom-0 -translate-y-full origin-center rounded-md p-1">{recipe.name}</div>
      <img src={recipe.image} alt="background recipe" className="object-cover" />
        </div>
      </Link>
    </li>
  ));

  return (
    <>
      <div className="relative pt-16">
        <ul className="flex flex-col items-start justify-between">
          <li className="p-5 my-2 flex flex-col items-start">
            <h2>Recipes</h2>
            <ul className="flex">{recipeList}</ul>
          </li>
          <li className="p-5 my-2 flex flex-col items-start overflow-hidden">
            <h2>Public Recipes</h2>
            <ul className="flex">{publicRecipes}</ul>
          </li>
          <li className="p-5 my-2">Popular Recipes</li>
          <li className="p-5 my-2">My Favorite Recipes</li>
          <li className="p-5 my-2">My Pantry</li>
        </ul>
      </div>
    </>
  );
};

export default RecipeList;