import "./App.css";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Nav from "./components/Nav";
import Homescreen from "./components/Homescreen";
import { Outlet, useNavigate } from "react-router-dom";

function handleError(err) {
  console.warn(err);
}

function App() {
  const [isAuth, setIsAuth] = useState(!!Cookies.get("Authorization"));
  const [recipes, setRecipes] = useState([]);


  const navigate = useNavigate();

  const getRecipes = async () => {
    const response = await fetch(`/api/v1/recipes/`).catch(handleError);
    if (!response.ok) {
      throw new Error("Network response not ok");
    }
    const json = await response.json();
    setRecipes(json);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="App">
      <Nav isAuth={isAuth} />
      <div className="flex overflow-hidden">
        <Homescreen />
        <Outlet context={[isAuth, setIsAuth, navigate, recipes]} />
      </div>
    </div>
  );
}

export default App;
