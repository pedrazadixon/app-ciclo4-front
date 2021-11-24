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
import DestinosPage from "app/pages/destinos/DestinosPage";
import CrearDestinoPage from "app/pages/destinos/CrearDestinoPage";
import PrecioKmPage from "app/pages/destinos/PrecioKmPage";
import EditarDestinoPage from "app/pages/destinos/EditarDestinoPage";

class App extends Component {
  render() {
    return (
      <div id="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Redirect to="/iniciar-sesion" />
            </Route>
            <Route path="/iniciar-sesion" exact component={IniciarSesionPage} />
            <Route path="/registrarse" exact component={RegistrarsePage} />
            <Route path="/ordenes" exact component={OrdenesPage} />
            <Route path="/ordenes/crear" exact component={CrearOrdenPage} />
            <Route
              path="/ordenes/actualizar/:id"
              exact
              component={ActualizarOrdenPage}
            />
            <Route
              path="/ordenes/detalles/:id"
              exact
              component={DetallesOrdenPage}
            />
            <Route path="/destinos" exact component={DestinosPage} />
            <Route path="/destinos/crear" exact component={CrearDestinoPage} />
            <Route path="/destinos/precio-km" exact component={PrecioKmPage} />
            <Route
              path="/destinos/editar/:id"
              exact
              component={EditarDestinoPage}
            />
            <Route exact component={Error404} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
