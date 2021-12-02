import * as React from "react";

const MostrarA = function (props) {
  let usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));

  if (props.roles.includes(usuarioLogueado.rol)) {
    return <React.Fragment>{props.children}</React.Fragment>;
  }
  return <React.Fragment></React.Fragment>;
};

export default MostrarA;
