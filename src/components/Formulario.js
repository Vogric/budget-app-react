import React, { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);

  const agregarGasto = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={agregarGasto}>
      <h2>Add your expenses here</h2>
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
