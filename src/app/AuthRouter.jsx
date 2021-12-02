import React from "react";
import { Redirect, Route } from "react-router-dom";
import { toast } from "react-toastify";

class AuthRouter extends Route {
  render() {
    let usuarioAuth = localStorage.getItem("usuario");

    if (usuarioAuth === null) {
      toast.error("Por favor inicie sesion");
      return <Redirect to="/iniciar-sesion"></Redirect>;
    } else {
      return <this.props.component />;
    }
  }
}

export default AuthRouter;
