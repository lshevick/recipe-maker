// import { useState } from "react";

import { Link } from "react-router-dom";

const Homescreen = () => {
  return (
    <>
      <div className="pt-12 sm:flex lg:w-48 w-1/5 hidden min-h-screen bg-stone-400">
        <div className="sidebar relative h-full w-full bg-stone-400">
          <ul className="flex flex-col items-start justify-start">
            <li className="p-3 my-5 bg-stone-400 w-1/2">
              <Link to='/recipes'>My Recipes</Link>
            </li>
            <li className="p-3 my-5 bg-stone-400 w-1/2">
              <button type="button">Public Recipes</button>
            </li>
            <li className="p-3 my-5 bg-stone-400 w-1/2">
              <button type="button">Popular Recipes</button>
            </li>
            <li className="p-3 my-5 bg-stone-400 w-1/2">
              <button type="button">My Pantry</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Homescreen;
