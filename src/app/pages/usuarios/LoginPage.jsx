import * as React from "react";

const cardStyle = {
  width: "40rem",
};

class LoginPage extends React.Component {
  render() {
    return (
      <main>
        <div className="container d-flex justify-content-center">
          <div className="card mt-5" style={cardStyle}>
            <div className="card-header text-center">Iniciar sesion</div>

            <div
              className="alert shadow-sm mx-4 mt-3 mb-0 alert-success"
              role="alert"
            >
              <div>
                <strong> Inicio correcto </strong>
              </div>
            </div>

            <div className="card-body">
              <form action="##" method="POST" className="px-5 py-3">
                <div className="form-group mb-3">
                  <label>Usuario</label>
                  <input
                    required
                    name="usu_usuario"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Contraseña</label>
                  <input
                    required
                    name="usu_password"
                    type="password"
                    className="form-control"
                  />
                </div>
                <div className="mt-3 text-end">
                  <button type="submit" className="btn btn-dark">
                    Iniciar sesion
                  </button>
                </div>
                <div className="text-end mt-1">
                  <small>
                    <span> o </span>
                    <a className="text-dark" href="##">
                      registrarse
                    </a>
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

export default LoginPage;
