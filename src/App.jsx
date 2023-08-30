import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enter from "./pages/Enter";
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Main from "./pages/Main"
import NotFound from "./pages/NotFound"
import "./styles/style.scss"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Enter} />
        <Route path="/Signup" Component={Signup} />
        <Route path="/Login" Component={Login} />
        <Route path="/Main" Component={Main} />
        <Route path="/*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
