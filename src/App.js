import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import CourseSales from "./CourseSales";

class App extends Component {
  render() {
    var courses = [
      {
        name: "Complete IOS10 Dev Course",
        price: 14.99,
      },
      {
        name: "Complete React Dev Course",
        price: 15.99,
      },
      {
        name: "Complete JS Dev Course",
        price: 12.99,
      },
      {
        name: "Complete Node Dev Course",
        price: 16.99,
      },
    ];
    return <CourseSales items={courses} />;
  }
}

export default App;
