import * as React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import MostrarA from "app/utils/MostrarA";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faCopy,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function AppNavbar() {
  const location = useLocation();
  const history = useHistory();

  const usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));

  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    history.push("/iniciar-sesion");
  };

  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <img
            src={process.env.PUBLIC_URL + "/img/logo_misiontic.png"}
            height="54px"
            alt="logo"
          />

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-lg-4">
            <li>
              {/* <Link to="/ordenes" className="nav-link text-secondary"> */}
              <Link
                to="/ordenes"
                className={`nav-link ${
                  location.pathname.includes("ordenes")
                    ? "text-white"
                    : "text-secondary"
                }`}
              >
                <FontAwesomeIcon
                  icon={faCopy}
                  size="2x"
                  className="d-block mx-auto mb-1"
                />
                Ordenes
              </Link>
            </li>

            <MostrarA roles={["Administrador", "Usuario Interno"]}>
              <li>
                <Link
                  to="/destinos"
                  className={`nav-link ${
                    location.pathname.includes("destinos")
                      ? "text-white"
                      : "text-secondary"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={faMapMarkedAlt}
                    size="2x"
                    className="d-block mx-auto mb-1"
                  />
                  Destinos
                </Link>
              </li>
            </MostrarA>

            <li>
              <Link
                to="/usuarios"
                className={`nav-link ${
                  location.pathname.includes("usuarios")
                    ? "text-white"
                    : "text-secondary"
                }`}
              >
                <FontAwesomeIcon
                  icon={faUsers}
                  size="2x"
                  className="d-block mx-auto mb-1"
                />
                Usuarios
              </Link>
            </li>
          </ul>

          <div>
            <p className="my-0 me-3">
              {usuarioLogueado ? usuarioLogueado.nombres : ""}{" "}
              {usuarioLogueado ? usuarioLogueado.apellidos : ""} (
              {usuarioLogueado ? usuarioLogueado.rol : ""})
            </p>
          </div>

          <div className="text-end">
            <button
              onClick={cerrarSesion}
              type="button"
              className="btn btn-outline-light"
            >
              Cerrar Sesion
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppNavbar;
