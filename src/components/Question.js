import React, { useState, Fragment } from "react";

import Error from "./Error";

function Question({ updateBudget }) {
  const [budget, setBugnet] = useState("");
  const [error, setError] = useState(false);

  const handleChange = e => {
    const value = isNaN(e.target.value) ? "" : e.target.value;
    setBugnet(parseInt(value, 10));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (budget < 1 || isNaN(budget)) {
      setError(true);
      return;
    }

    updateBudget(budget);
    setError(false);
  };

  return (
    <Fragment>
      <h2>Enter your budget</h2>

      {error ? <Error message="The budget is not valid" /> : null}

      <form onSubmit={handleSubmit}>
        <input
          name="budget"
          type="number"
          className="u-full-width"
          placeholder="Enter your budget"
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Set budget"
          className="button-primary u-full-width"
        />
      </form>
    </Fragment>
  );
}

export default Question;
