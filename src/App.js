import React, { useState, useEffect } from "react";

import Question from "./components/Question";
import Form from "./components/Form";
import MovementList from "./components/MovementList";
import BudgetControl from "./components/BudgetControl";

function App() {
  const [budget, setBudget] = useState(0);
  const [balance, setBalance] = useState(0);
  const [movements, setMovements] = useState([]);
  const [isBudget, setIsBudget] = useState(false);

  const updateBudget = amount => {
    setBudget(amount);
    setBalance(amount);
    setIsBudget(true);
  };

  const addMovement = movement => {
    const currentMovements = movements;
    setMovements([...currentMovements, movement]);
  };

  useEffect(() => {
    const currentMovements = movements;
    const costs = currentMovements.reduce((previus, current) => {
      return previus - current.amount;
    }, budget);
    setBalance(costs);
  }, [movements, budget]);

  return (
    <div className="App container">
      <header>
        <h1>Weekly Budget</h1>
      </header>
      <div className="contenido-principal contenido">
        {!isBudget ? (
          <Question updateBudget={updateBudget} />
        ) : (
          <div className="row">
            <div className="one-half column">
              <Form addMovement={addMovement} />
            </div>
            <div className="one-half column">
              <MovementList movements={movements} balance={balance} />
              <BudgetControl budget={budget} balance={balance} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
