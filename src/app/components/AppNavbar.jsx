import * as React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt, faCopy } from "@fortawesome/free-solid-svg-icons";

class AppNavbar extends React.Component {
  render() {
    return (
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <img src="https://www.misiontic2022.gov.co/746/channels-645_logo_misiontic.png" alt="" height="54px" />

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-lg-4">
              <li>
                <a href="#" class="nav-link text-secondary">
                  <FontAwesomeIcon
                    icon={faCopy}
                    size="2x"
                    className="d-block mx-auto mb-1"
                  />
                  Ordenes
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  <FontAwesomeIcon
                    icon={faMapMarkedAlt}
                    size="2x"
                    className="d-block mx-auto mb-1"
                  />
                  Destinos
                </a>
              </li>
            </ul>

            <div className="text-end">
              <Link to="iniciar-sesion">
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
}

export default AppNavbar;
