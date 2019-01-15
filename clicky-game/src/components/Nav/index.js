import React from "react";
import "./style.css";



function Nav(props) {
  return (

    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/Clicky-Game/">{props.nav.name}</a>
        </li>
        <li>{props.nav.result}</li>
        <li>
          Score: {props.nav.score}&nbsp;
          | Top Score: {props.nav.topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
