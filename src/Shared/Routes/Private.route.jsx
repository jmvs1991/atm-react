import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { __Rutas } from "./../../Core/environment";
import TarjetaPage from "./../../Pages/Tarjeta/Tarjeta.page";

const PrivateRoute = () => {
  return (
    <Switch>
      <Redirect from={__Rutas.Root} to={__Rutas.Tarjeta} />
      <Route exact path={__Rutas.Tarjeta} component={TarjetaPage} />
    </Switch>
  );
};

export default PrivateRoute;
