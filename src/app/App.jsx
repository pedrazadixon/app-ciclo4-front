import React from "react";
import "sass/app.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
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

const App = function () {
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
          <ProtectedRoute path="/ordenes" exact component={OrdenesPage} />
          <Route path="/ordenes/crear" exact component={CrearOrdenPage} />
          <ProtectedRoute
            path="/ordenes/actualizar/:id"
            exact
            component={ActualizarOrdenPage}
          />
          <ProtectedRoute
            path="/ordenes/detalles/:id"
            exact
            component={DetallesOrdenPage}
          />
          <ProtectedRoute
            path="/ordenes/factura/:id"
            exact
            component={FacturaOrdenPage}
          />
          <ProtectedRoute path="/destinos" exact component={DestinosPage} />
          <ProtectedRoute
            path="/destinos/crear"
            exact
            component={CrearDestinoPage}
          />
          <ProtectedRoute
            path="/destinos/precio-km"
            exact
            component={PrecioKmPage}
          />
          <ProtectedRoute
            path="/destinos/editar/:id"
            exact
            component={EditarDestinoPage}
          />
          <ProtectedRoute path="/usuarios" exact component={UsuariosPage} />
          <Route path="/usuarios/crear" exact component={CrearUsuarioPage} />
          <ProtectedRoute
            path="/usuarios/editar/:id"
            exact
            component={EditarUsuarioPage}
          />
          <ProtectedRoute
            path="/usuarios/detalles/:id"
            exact
            component={DetallesUsuarioPage}
          />
          <ProtectedRoute exact component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
