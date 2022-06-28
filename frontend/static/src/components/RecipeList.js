import { useEffect, useState } from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";

function handleError(err) {
  console.warn(err);
}

const RecipeList = () => {
    const [isAuth, setIsAuth, navigate, recipes] = useOutletContext();
//   const [recipes, setRecipes] = useState([]);

//   const getRecipes = async () => {
//     const response = await fetch(`/api/v1/recipes/`).catch(handleError);
//     if (!response.ok) {
//       throw new Error("Network response not ok");
//     }
//     const json = await response.json();
//     setRecipes(json);
//   };

//   useEffect(() => {
//     getRecipes();
//   }, []);

  const recipeList = recipes.map((recipe) => (
    <li key={recipe.id} className="w-1/3 bg-stone-200 mx-2">
      <Link to={`/recipes/${recipe.id}`}>
      <img src={recipe.image} alt="background recipe" />
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
          <li className="p-5 my-2">Public Recipes</li>
          <li className="p-5 my-2">Popular Recipes</li>
          <li className="p-5 my-2">My Favorite Recipes</li>
          <li className="p-5 my-2">My Pantry</li>
        </ul>
      </div>
    </>
  );
};

export default RecipeList;
