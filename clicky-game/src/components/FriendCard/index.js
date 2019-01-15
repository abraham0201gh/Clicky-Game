import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
  <main className="container">
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.clickCard(props.id)} className="clickCards" />
      </div>
    </div>
  </main>
  );
}


export default FriendCard;
