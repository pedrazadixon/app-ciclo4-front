import React, { Component } from "react";
import "sass/app.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error404 from "@/Error404";
import IniciarSesionPage from "app/pages/usuarios/IniciarSesionPage";
import RegistrarsePage from "app/pages/usuarios/RegistrarsePage";
import OrdenesPage from "app/pages/ordenes/OrdenesPage";
import CrearOrdenPage from "app/pages/ordenes/CrearOrdenPage";
import ActualizarOrdenPage from "app/pages/ordenes/ActualizarOrdenPage";
import DetallesOrdenPage from "app/pages/ordenes/DetallesOrdenPage";
import FacturaOrdenPage from "app/pages/ordenes/FacturaOrdenPage";
import DestinosPage from "app/pages/destinos/DestinosPage";
import CrearDestinoPage from "app/pages/destinos/CrearDestinoPage";
import PrecioKmPage from "app/pages/destinos/PrecioKmPage";
import EditarDestinoPage from "app/pages/destinos/EditarDestinoPage";
import UsuariosPage from "app/pages/usuarios/UsuariosPage";
import CrearUsuarioPage from "app/pages/usuarios/CrearUsuarioPage";
import EditarUsuarioPage from "app/pages/usuarios/EditarUsuarioPage";
import DetallesUsuarioPage from "app/pages/usuarios/DetallesUsuarioPage";

class App extends Component {
  render() {
    return (
      <div id="App">
        <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
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
            <Route
              path="/ordenes/factura/:id"
              exact
              component={FacturaOrdenPage}
            />
            <Route path="/destinos" exact component={DestinosPage} />
            <Route path="/destinos/crear" exact component={CrearDestinoPage} />
            <Route path="/destinos/precio-km" exact component={PrecioKmPage} />
            <Route
              path="/destinos/editar/:id"
              exact
              component={EditarDestinoPage}
            />
            <Route path="/usuarios" exact component={UsuariosPage} />
            <Route path="/usuarios/crear" exact component={CrearUsuarioPage} />
            <Route
              path="/usuarios/editar/:id"
              exact
              component={EditarUsuarioPage}
            />
            <Route
              path="/usuarios/detalles/:id"
              exact
              component={DetallesUsuarioPage}
            />
            <Route exact component={Error404} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
