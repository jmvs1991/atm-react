import { Error, Cargando, ValidarNroTarjeta } from "./../Type/Tarjeta.type";

const INITIAL_STATE = {
  Tarjeta: {},
  Resultado: "",
  Mensaje: "",
  Cargando: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ValidarNroTarjeta:
      return {
        ...state,
        Tarjeta: action.payload,
        Resultado: action.Resultado,
        Mensaje: action.Mensaje,
        Cargando: false,
      };
    case Cargando:
      return {
        ...state,
        Resultado: "",
        Mensaje: "",
        Cargando: true,
      };
    case Error:
      return {
        ...state,
        Resultado: "E",
        Mensaje: action.Mensaje,
        Cargando: false,
      };
    default:
      return state;
  }
};
