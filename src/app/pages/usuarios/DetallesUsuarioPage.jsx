import * as React from "react";
import { Link, useParams } from "react-router-dom";
import LayoutDashboard from "app/layouts/LayoutDashboard";

function DetallesUsuarioPage() {
  let { id: usuarioId } = useParams();

  return (
    <LayoutDashboard>
      <div className="row my-4">
        <div className="col-12 d-flex justify-content-between">
          <h3>Detalles Usuario {usuarioId} </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p>A continuacion se relacionan los detalles del usuario.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body px-4">
              <div className="row">
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="fw-bold">ID</td>
                      <td>1</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">Nombres</td>
                      <td>manuel armando</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">Apellidos</td>
                      <td>puertas rojas</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">Email</td>
                      <td>uusuario@mail.com</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">Rol</td>
                      <td>usuario_final</td>
                    </tr>
                  </tbody>
                </table>

                <div className="col-12 d-flex justify-content-end my-2">
                  <Link to="/usuarios">
                    <button className="btn btn-danger ms-3">Volver</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutDashboard>
  );
}

export default DetallesUsuarioPage;
