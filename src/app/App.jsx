import React, { Component } from "react";
import "sass/app.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Error404 from "@/Error404";

import IniciarSesionPage from "app/pages/usuarios/IniciarSesionPage";
import RegistrarsePage from "app/pages/usuarios/RegistrarsePage";
import OrdenesPage from "app/pages/ordenes/OrdenesPage";

class App extends Component {
  render() {
    return (
      <div id="App">
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/">
              <Redirect to="/iniciar-sesion" />
            </Route>
            <Route path="/iniciar-sesion" component={IniciarSesionPage} />
            <Route path="/registrarse" component={RegistrarsePage} />
            <Route path="/ordenes" component={OrdenesPage} />
            <Route component={Error404} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
