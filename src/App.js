import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Status from "./TaskStatus/TaskStatus";
import Priority from "./priority/priority";
import User from "./user/user";
import Header from "./Header/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <div className="app">
          <Routes>
            <Route exact path="/" element={<Status />} />
            <Route path="/Priority" element={<Priority />} />
            <Route path="/User" element={<User />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;