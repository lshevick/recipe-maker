// import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

function handleError(err) {
  console.warn(err);
}

const Nav = ({ isAuth, setIsAuth }) => {
  const [visible, setVisible] = useState(false)
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
        <button type="button"
        onClick={() => setVisible(!visible)}
        >
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
  
  const logout = async () => {
    const data = {
    
    }
    const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: JSON.stringify(data),
    }
    const response = await fetch(`/dj-rest-auth/logout/`, options).catch(handleError);
    if(!response.ok) {
    throw new Error('Network response not ok');
    }
    const json = await response.json(); 
    console.log(json)
    Cookies.remove('Authorization');
    setIsAuth(false);
    setVisible(false)
  }

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
      {visible && <div className="absolute right-4 top-16 p-4 rounded bg-stone-200 z-50">
        <button type="button" onClick={logout} className='bg-stone-200 p-1 rounded hover:bg-stone-100'>
          Logout
        </button>
      </div>}
    </>
  );
};

export default Nav;
