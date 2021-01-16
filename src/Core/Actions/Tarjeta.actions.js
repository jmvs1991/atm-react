import { Error, Cargando, ValidarNroTarjeta } from "./../Type/Tarjeta.type";
import { __Url } from "./../environment";
import { dispatchController } from "./index.actions";

export const validarNumeroTarjeta = (numero) => async (dispatch) => {
  try {
    dispatch({
      type: Cargando,
    });

    const numeroObj = {
      Numero: numero,
    };

    console.log(JSON.stringify(numeroObj));

    const peticion = {
      method: "POST",
      body: JSON.stringify(numeroObj),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const resultado = await fetch(`${__Url}/tarjeta/ValidarNro`, peticion);
    const json = await resultado.json();
    console.log(json);
  } catch (error) {
    dispatch({
      type: Error,
      Mensaje: error.message,
    });
  }
};
