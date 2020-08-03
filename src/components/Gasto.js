import React from "react";
import PropTypes from "prop-types";
const Gasto = ({ gasto }) => (
  <li className="gastos animate__animated animate__fadeIn">
    <p>
      {gasto.nombre}{" "}
      <span className="gasto animate__animated animate__headShake">
        {" "}
        $ {gasto.cantidad}{" "}
      </span>
    </p>
  </li>
);
Gasto.propTypes = {
  gasto: PropTypes.object.isRequired,
};
export default Gasto;
