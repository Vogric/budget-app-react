import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

const Formulario = ({ setGasto, setcrearGasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };
    setGasto(gasto);
    setcrearGasto(true);
    setNombre("");
    setCantidad(0);
  };
  return (
    <form onSubmit={agregarGasto}>
      <h2>Add your expenses here</h2>
      {error ? (
        <Error
          mensaje="
Both inputs are required or incorrect quote"
        />
      ) : null}
      <div className="campo">
        <label>Name of the expense</label>
        <input
          type="text"
          className="u-full width"
          placeholder="Ex: Transportation"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label>Amount of expense</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ex: 400"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value, 10)}
        />
        <input type="submit" className="button-primary u-full-width" />
      </div>
    </form>
  );
};

export default Formulario;
