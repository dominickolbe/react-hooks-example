import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

const exampleData = [
  { id: 1, title: "Example Todo 1" },
  { id: 2, title: "Example Todo 2" },
  { id: 3, title: "Example Todo 3" },
];

export const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Todos:</h1>
          <Todos todos={exampleData} />
        </div>
      </div>
    </div>
  );
};
