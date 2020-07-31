import React, { useState } from "react";
import Error from "./Error";

const Pregunta = ({ setPresupuesto, setRestante, setPregunta }) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };

  const agregarPresupuesto = (e) => {
    e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setPregunta(false);
  };

  return (
    <>
      <h2>Place your Budget</h2>
      {error ? (
        <Error
          mensaje="
The budget is wrong"
        />
      ) : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Place your budget"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Define project"
        />
      </form>
    </>
  );
};

export default Pregunta;
