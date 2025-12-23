import React from "react";
import Home from "./views/Home.jsx";
import Login from "./views/Login.jsx";
import SignUp from "./views/SignUp.jsx";
import Profile from "./views/Profile.jsx";

import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
