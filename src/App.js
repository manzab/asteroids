import React from "react";
import Login from "./pages/Login";
import Data from "./pages/Data";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/data" exact element={<Data />} />
    </Routes>
  </BrowserRouter>
);

export default App;
