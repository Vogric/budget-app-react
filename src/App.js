import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [pregunta, setPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setcrearGasto] = useState(false);

  useEffect(() => {
    if (crearGasto) {
      setGastos([...gastos, gasto]);
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);
      setcrearGasto(false);
    }
  }, [gasto, crearGasto, gastos, restante]);

  return (
    <div className="container animate__animated animate__fadeIn">
      <header>
        <h1>MyBudget</h1>
        <div className="contenido-principal contenido">
          {pregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setPregunta={setPregunta}
            />
          ) : (
            <div className="row animate__animated animate__fadeIn">
              <div className="one-half column">
                <Formulario setGasto={setGasto} setcrearGasto={setcrearGasto} />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
