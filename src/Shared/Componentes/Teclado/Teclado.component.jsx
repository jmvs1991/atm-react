import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Teclado.component.scss";

const TecladoComponent = ({
  clickNumero = () => {},
  clickAceptar = () => {},
  clickBorrar = () => {},
}) => {
  const handleClickNumero = (e) => {
    const { value } = e.target;
    clickNumero(value);
  };

  const handleClickAceptar = () => {
    clickAceptar();
  };

  const handleClickBorrar = () => {
    clickBorrar();
  };

  return (
    <>
      <div className="Teclado__Fila">
        <div className="Teclado__Fila--Contenedor">
          <button
            type="button"
            className="Teclado__Fila--Contenedor-Nro"
            value="7"
            onClick={handleClickNumero}
          >
            7
          </button>
        </div>
        <div className="Teclado__Fila--Contenedor">
          <button
            type="button"
            className="Teclado__Fila--Contenedor-Nro"
            value="8"
            onClick={handleClickNumero}
          >
            8
          </button>
        </div>
        <div className="Teclado__Fila--Contenedor">
          <button
            type="button"
            className="Teclado__Fila--Contenedor-Nro"
            value="9"
            onClick={handleClickNumero}
          >
            9
          </button>
        </div>
      </div>
      <div className="Teclado__Fila">
        <div className="Teclado__Fila--Contenedor">
          <button
            type="button"
            className="Teclado__Fila--Contenedor-Nro"
            value="4"
            onClick={handleClickNumero}
          >
            4
          </button>
        </div>
        <div className="Teclado__Fila--Contenedor">
          <button
            type="button"
            className="Teclado__Fila--Contenedor-Nro"
            value="5"
            onClick={handleClickNumero}
          >
            5
          </button>
        </div>
        <div className="Teclado__Fila--Contenedor">
          <button
            type="button"
            className="Teclado__Fila--Contenedor-Nro"
            value="6"
            onClick={handleClickNumero}
          >
            6
          </button>
        </div>
      </div>
      <div className="Teclado__Fila">
        <div className="Teclado__Fila--Contenedor">
          <button
            type="button"
            className="Teclado__Fila--Contenedor-Nro"
            value="1"
            onClick={handleClickNumero}
          >
            1
          </button>
        </div>
        <div className="Teclado__Fila--Contenedor">
          <button
            type="button"
            className="Teclado__Fila--Contenedor-Nro"
            value="2"
            onClick={handleClickNumero}
          >
            2
          </button>
        </div>
        <div className="Teclado__Fila--Contenedor">
          <button
            type="button"
            className="Teclado__Fila--Contenedor-Nro"
            value="3"
            onClick={handleClickNumero}
          >
            3
          </button>
        </div>
      </div>
      <div className="Teclado__Fila">
        <div className="Teclado__Fila--Cero">
          <button
            type="button"
            className="Teclado__Fila--Cero-Nro"
            value="0"
            onClick={handleClickNumero}
          >
            0
          </button>
        </div>
        <div className="Teclado__Fila--Borrar">
          <button
            type="button"
            className="Teclado__Fila--Borrar-Borrar"
            onClick={handleClickBorrar}
          >
            <FontAwesomeIcon
              icon={["fas", "backspace"]}
              size="2x"
              className="mt-2 mb-2"
            />
          </button>
        </div>
        <div className="Teclado__Fila--Aceptar">
          <button
            type="button"
            className="Teclado__Fila--Aceptar-Aceptar"
            onClick={handleClickAceptar}
          >
            <FontAwesomeIcon
              icon={["fas", "check"]}
              size="2x"
              className="mt-2 mb-2"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default TecladoComponent;
