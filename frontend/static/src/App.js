import "./App.css";
import { useState } from "react";
import Cookies from "js-cookie";
import Nav from "./components/Nav";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const [isAuth, setIsAuth] = useState(!!Cookies.get("Authorization"));
  
  const navigate = useNavigate();

  return (
    <div className="App">
      <Nav isAuth={isAuth} />
        <Outlet context={[isAuth, setIsAuth, navigate]}/>
    </div>
  );
}

export default App;
