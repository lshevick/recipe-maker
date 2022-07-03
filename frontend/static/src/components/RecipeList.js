import { useEffect, useState } from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";

import "./RecipeList.css";

function handleError(err) {
  console.warn(err);
}

const RecipeList = () => {
  const [isAuth, setIsAuth, navigate, recipes] = useOutletContext();

  const recipeList = recipes.map((recipe) => (
    <li
      key={recipe.id}
      className="recipe-thumbnail w-48 mx-2 h-48 overflow-hidden relative flex items-center justify-center"
    >
      <Link to={`/recipes/${recipe.id}`}>
        <div className="flex items-center justify-center">
          <div className="recipe-title absolute bg-black bg-opacity-50 text-white w-full py-3 px-2 bottom-0">
            {recipe.name}
          </div>
          <img
            src={recipe.image}
            alt="background recipe"
            width="100%"
            className="object-cover"
          />
        </div>
      </Link>
    </li>
  ));

  const publicRecipes = recipes
    .filter((i) => i.is_public === true)
    .map((recipe) => (
      <li
        key={recipe.id}
        className="recipe-thumbnail w-48 mx-2 h-48 overflow-hidden relative flex items-center justify-center"
      >
        <Link to={`/recipes/${recipe.id}`}>
          <div className="flex items-center justify-center">
            <div className="recipe-title absolute bg-black bg-opacity-50 text-white w-full py-3 px-2 bottom-0">
              {recipe.name}
            </div>
            <img
              src={recipe.image}
              alt="background recipe"
              width="100%"
              className="object-cover"
            />
          </div>
        </Link>
      </li>
    ));

  return (
    <>
      <div className="relative pt-16 w-screen overflow-x-hidden">
        <ul className="flex flex-col items-start justify-between">
          <li className="recipe-list p-5 my-2 w-screen flex flex-col items-start overflow-y-hidden overflow-x-scroll flex-nowrap">
            <div className="flex items-center">
              <div className="flex items-center">
                <h2>Recipes</h2>
                <hr className="border-t-2 border-solid border-stone-300 w-screen mx-2" />
              </div>
            </div>
            <ul className="flex">
              {isAuth && <li className="recipe-thumbnail w-48 mx-2 h-48 overflow-hidden bg-stone-700 relative flex items-center justify-center">
                <Link to='/recipe-form' className="flex flex-col items-center">
                <span className="scale-150 text-3xl text-white">+</span>
                <p className="text-white">Add Recipe</p>
                </Link>
              </li>}
              {recipeList}
            </ul>
          </li>
          <li className="recipe-list p-5 my-2 w-screen flex flex-col items-start overflow-y-hidden overflow-x-scroll flex-nowrap">
            <div className="flex items-center">
              <div className="flex items-center">
                <h2>Public Recipes</h2>
                <hr className="border-t-2 border-solid border-stone-300 w-screen mx-2" />
              </div>
            </div>
            <ul className="flex">{publicRecipes}</ul>
          </li>
          <li className="recipe-list p-5 my-2 w-screen flex flex-col items-start overflow-y-hidden overflow-x-scroll flex-nowrap">
            <div className="flex items-center">
              <h2>Popular Recipes</h2>
              <hr className="border-t-2 border-solid border-stone-300 w-screen mx-2" />
            </div>
            <div className="flex items-center"></div>
            <ul className="flex">{publicRecipes}</ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RecipeList;
