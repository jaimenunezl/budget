import React from "react";

function Movement({ movement }) {
  return (
    <li className="gastos">
      <p>
        {movement.name}
        <span className="gasto">$ {movement.amount}</span>
      </p>
    </li>
  );
}

export default Movement;
