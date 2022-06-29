// import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Nav = ({ isAuth }) => {
  const userView = (
    <ul className="flex justify-between">
      <li className="px-3">
        <Link to='/recipe-form'>
          <FaPlus />
        </Link>
      </li>
      <li className="px-3">
        <button type="button">
          <GoGear />
        </button>
      </li>
      <li className="px-3">
        <button type="button">
          <BsPersonFill />
        </button>
      </li>
    </ul>
  );

  const guestView = (
    <Link
      to="/login"
      className="hover:text-stone800 hover:underline text-stone-600"
    >
      Login
    </Link>
  );

  return (
    <>
      <nav className="navbar flex justify-between bg-stone-300 items-center py-3 fixed w-full z-10">
        <div className="mx-2">
          <p className="text-md font-thin italic">
            The Kitchen is yours, chef!
          </p>
        </div>
        <div className="mx-2">
          <Link to='/recipes' className="font-bold text-lg">BATCH MAKER</Link>
        </div>
        <div className="mx-2">{isAuth ? userView : guestView}</div>
      </nav>
    </>
  );
};

export default Nav;
