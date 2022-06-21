import React from "react";
import "./main.css";
import Search from "search/Search";
import { Container } from "react-bootstrap";
import logo from "../assets/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import bg from "../assets/Lines.png";
import figure from "../assets/figure.png";
const Main = () => {
  return (
    <div className="parent">
      <img className="figure" src={figure} alt="figure" />
      <Container>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="one">
          <div className="two">
            <h1>Now you can track all your cryptos here!</h1>
            <p>Just enter the</p>
            <p>cryptocurrency code on the</p>
            <p>form to the right.</p>
          </div>
        </div>
        <Search />
      </Container>
    </div>
  );
};

export default Main;
