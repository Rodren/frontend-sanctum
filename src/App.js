import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Books from "./components/Books";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <div>
        <NavLink to="/books">Books</NavLink>
      </div>
      <Routes>
        <Route path="/books" element={<Books/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
};

export default App;
