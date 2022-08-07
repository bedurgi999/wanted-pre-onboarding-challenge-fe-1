import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Register from "./components/Register";
import Login from "./components/Login";
import Todo from "./components/Todo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
