import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="headerMain">
      <h1>Clicky Game!</h1>
      <h2>Click on any image to earn points.  If you click the same image more than once, you lose all points and the game starts over.</h2>
    </header>
  );
}

export default Header;
