import React from "react";

const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <>
      <div className="alert alert-primary">Budget: ${presupuesto}</div>
      <div className="alert">Remaining ${restante}</div>
    </>
  );
};

export default ControlPresupuesto;
