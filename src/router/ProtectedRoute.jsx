import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  let usuarioAuth = localStorage.getItem("usuario");

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        usuarioAuth !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to="/iniciar-sesion" />
        )
      }
    />
  );
}

export default ProtectedRoute;
