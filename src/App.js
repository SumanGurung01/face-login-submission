import React, { useContext } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import { Context } from "./Context/GlobalContext";
import { Routes, Route } from "react-router-dom";

function App() {
  const { login } = useContext(Context);
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/home"} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
