export const dispatchController = (type, typeError, dispatch, bodyJson) => {
  const resultado = bodyJson?.Resultado || "N";
  const mensaje = bodyJson?.Mensaje || "";
  const datos = bodyJson?.Datos || [];

  switch (resultado.toUpperCase()) {
    case "E":
      dispatch({
        type: typeError,
        Mensaje: mensaje,
      });
      break;

    default:
      dispatch({
        type: type,
        payload: datos,
        Resultado: resultado,
        Mensaje: mensaje,
      });
      break;
  }
};
