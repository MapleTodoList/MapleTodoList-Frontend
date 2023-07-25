import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enter from "./components/Enter";
import Signup from "./components/Signup"
import Login from "./components/Login"
import NotFound from "./components/NotFound"
import "./style.scss"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Enter} />
        <Route path="/Signup" Component={Signup} />
        <Route path="/Login" Component={Login} />
        <Route path="/*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
