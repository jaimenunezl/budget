import React, { useState } from "react";

import uuid from "uuid";
import Error from "./Error";

function Form({ addMovement }) {
  const initialState = { name: "", amount: "", id: "" };

  const [movement, setMovement] = useState(initialState);
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (movement.amount < 1 || isNaN(movement.amount) || movement.name === "") {
      setError(true);
      return;
    }

    movement.id = uuid.v4();

    addMovement(movement);
    setMovement(initialState);
    setError(false);
  };

  const handleChange = e => {
    const currentMovement = movement;
    setMovement({
      ...currentMovement,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New movement</h2>

      {error ? <Error message="The movement data is not valid" /> : null}

      <div className="campo">
        <label htmlFor="">Movement name</label>
        <input
          name="name"
          type="text"
          className="u-full-width"
          placeholder="E.g. Public transport"
          onChange={handleChange}
          value={movement.name}
        />
      </div>
      <div className="campo">
        <label htmlFor="">Movement amount</label>
        <input
          name="amount"
          type="number"
          className="u-full-width"
          placeholder="E.g. 300"
          onChange={handleChange}
          value={movement.amount}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add"
      />
    </form>
  );
}

export default Form;
