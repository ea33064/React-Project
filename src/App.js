import React from "react";
import ReactDOM from "react-dom";
import Todos from "./Todos";
import Contact from "./Contact";
import "./styles.css";

ReactDOM.render(
  <div>
    <nav>
      <ul>
        <li>
          <a href="#todos">Todos</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
    <Todos />
    <Contact />
  </div>,
  document.getElementById("root"),
);
