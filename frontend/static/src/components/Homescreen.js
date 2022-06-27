// import { useState } from "react";

import { Outlet } from "react-router-dom";

const Homescreen = () => {
  return (
    <>
      <div className="pt-12">
        <div className="sidebar fixed h-screen w-1/6 bg-stone-400">
          <ul className="flex flex-col items-center justify-start">
            <li className="p-3 my-5 bg-stone-400 w-1/2">
              <button type="button">My Recipes</button>
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
        <Outlet/>
      </div>
    </>
  );
};

export default Homescreen;
