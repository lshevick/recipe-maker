// import { useState } from "react";

const RecipeList = () => {
  return (
    <>
      <div className="pt-16">
        <ul className="flex flex-col items-center justify-between">
          <li className="p-5 my-2">Recipes</li>
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
