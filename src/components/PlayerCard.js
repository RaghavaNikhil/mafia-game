import React from "react";

export default function PlayerCard(props) {
  return (
    <div style={{ height: "100px", width: "200px", border: "1px solid black", margin:'10px' }}>
      <span>{props.playerName}</span>
    </div>
  );
}
