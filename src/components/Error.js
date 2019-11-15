import React from "react";

function Error({ message }) {
  return (
    <div>
      <p className="alert alert-danger error">{message}</p>
    </div>
  );
}

export default Error;
