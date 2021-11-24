import React, { Component } from "react";
import "sass/app.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Error404 from "@/Error404";

import IniciarSesionPage from "app/pages/usuarios/IniciarSesionPage";
import RegistrarsePage from "app/pages/usuarios/RegistrarsePage";
import OrdenesPage from "app/pages/ordenes/OrdenesPage";
import CrearOrdenPage from "app/pages/ordenes/CrearOrdenPage";
import ActualizarOrdenPage from "app/pages/ordenes/ActualizarOrdenPage";
import DetallesOrdenPage from "app/pages/ordenes/DetallesOrdenPage";

class App extends Component {
  render() {
    return (
      <div id="App">
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/">
              <Redirect to="/iniciar-sesion" />
            </Route>
            <Route path="/iniciar-sesion" exact component={IniciarSesionPage} />
            <Route path="/registrarse" exact component={RegistrarsePage} />
            <Route path="/ordenes" exact component={OrdenesPage} />
            <Route path="/ordenes/crear" exact component={CrearOrdenPage} />
            <Route path="/ordenes/actualizar/:id" exact component={ActualizarOrdenPage} />
            <Route path="/ordenes/detalles/:id" exact component={DetallesOrdenPage} />
            <Route exact component={Error404} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
