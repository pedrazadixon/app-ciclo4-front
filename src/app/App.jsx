import React, { Component } from "react";
import "sass/app.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AppNavbar from "@/AppNavbar";
import AppFooter from "@/AppFooter";
import Home from "@/Home";
import Error404 from "@/Error404";

import LoginPage from "app/pages/usuarios/LoginPage";
import OrdenesPage from "app/pages/ordenes/OrdenesPage";

class App extends Component {
  render() {
    return (
      <div id="App">
        {/* <AppNavbar /> */}

        <BrowserRouter>
          <Switch>
            {/* <Route path="/" component={Home} exact={true} /> */}
            <Route exact={true} path="/">
              <Redirect to="/iniciar-sesion" />
            </Route>
            <Route path="/iniciar-sesion" component={LoginPage} />
            <Route path="/ordenes" component={OrdenesPage} />
            <Route component={Error404} />
          </Switch>
        </BrowserRouter>

        {/* <AppFooter /> */}
      </div>
    );
  }
}

export default App;
