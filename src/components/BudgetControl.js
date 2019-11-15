import React, { Fragment } from "react";
import { revisarPresupuesto } from "../helper/budget.helper";

function BudgetControl({ budget, balance }) {
  return (
    <Fragment>
      <div className="alert alert-primary">Budget: ${budget}</div>
      <div className={revisarPresupuesto(budget, balance)}>
        Balance: ${balance}
      </div>
    </Fragment>
  );
}

export default BudgetControl;
