import React from "react";
import Card from "../card/Card";
import "./App.css";
const boys = [
    { name: "ahmed", age: 22, address: "cairo", phone: "01254666" },
    { name: "zeyad", age: 22, address: "cairo", phone: "01254666" },
    { name: "junior", age: 22, address: "cairo", phone: "01254666" },
];
const girls = [
    { name: "ahmed", age: 22, address: "cairo", phone: "01254666" },
    { name: "zeyad", age: 22, address: "cairo", phone: "01254666" },
    { name: "junior", age: 22, address: "cairo", phone: "01254666" },
];

const App = () => {
    return (
    <div className="container">
    <Card namelist={boys} type = "boy" />
    <Card namelist={girls} type = "girl" />
    </div>);
};
export default App;
