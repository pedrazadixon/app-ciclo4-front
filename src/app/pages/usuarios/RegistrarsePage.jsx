import * as React from "react";

import { Link } from "react-router-dom";

const cardStyle = {
  width: "40rem",
};

class RegistrarsePage extends React.Component {
  render() {
    return (
      <main>
        <div className="container d-flex justify-content-center">
          <div className="card mt-5" style={cardStyle}>
            <div className="card-header text-center">Registrarse</div>

            <div
              className="alert shadow-sm mx-4 mt-3 mb-0 alert-danger"
              role="alert"
            >
              <div>
                {" "}
                <strong> Mensaje al usuario </strong>{" "}
              </div>
            </div>

            <div className="card-body">
              <form action="##" method="POST" className="px-5 py-3">
                <div className="form-group mb-3">
                  <label>Nombres</label>
                  <input className="form-control" type="text" />
                </div>

                <div className="form-group mb-3">
                  <label>Apellidos</label>
                  <input className="form-control" type="text" />
                </div>

                <div className="form-group mb-3">
                  <label>Email</label>
                  <input className="form-control" type="text" />
                </div>

                <div className="form-group mb-3">
                  <label>Usuario</label>
                  <input className="form-control" type="text" />
                </div>

                <div className="form-group mb-3">
                  <label>Contraseña</label>
                  <input className="form-control" type="text" />
                </div>

                <div className="form-group mb-3">
                  <label>Confirme su contraseña</label>
                  <input className="form-control" type="text" />
                </div>

                <div className="mt-3 text-end">
                  {/* <button type="submit" className="btn btn-dark">
                    Registrarse
                  </button> */}
                  <Link to="/ordenes" className="btn btn-dark">
                    Iniciar sesion
                  </Link>
                </div>
                <div className="text-end mt-1">
                  <small>
                    <span> o </span>
                    <Link to="/iniciar-sesion" className="text-dark">
                      iniciar sesion
                    </Link>
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default RegistrarsePage;
