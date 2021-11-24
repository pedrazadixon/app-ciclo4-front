import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faCopy,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function AppNavbar() {
  let location = useLocation();

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
                    ? "text-secondary"
                    : "text-white"
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
            <li>
              <Link
                to="/destinos"
                className={`nav-link ${
                  location.pathname.includes("destinos")
                    ? "text-secondary"
                    : "text-white"
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
            <li>
              <Link
                to="/usuarios"
                className={`nav-link ${
                  location.pathname.includes("usuarios")
                    ? "text-secondary"
                    : "text-white"
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
            <p className="my-0 me-3">Nombre Apellido (Rol)</p>
          </div>

          <div className="text-end">
            <Link to="/iniciar-sesion">
              <button type="button" className="btn btn-outline-light">
                Cerrar Sesion
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppNavbar;
