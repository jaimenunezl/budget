import React from "react";
import Movement from "./Movement";

function MovementList({ movements, balance }) {
  return (
    <div className="gastos-realizados">
      <h2>List</h2>
      {movements.map(movement => (
        <Movement key={movement.id} movement={movement} />
      ))}
    </div>
  );
}

export default MovementList;
