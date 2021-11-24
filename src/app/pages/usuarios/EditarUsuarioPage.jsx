import * as React from "react";
import { Link, useParams } from "react-router-dom";
import LayoutDashboard from "app/layouts/LayoutDashboard";

function EditarUsuarioPage() {
  let { id: usuarioId } = useParams();

  return (
    <LayoutDashboard>
      <div className="row my-4">
        <div className="col-12 d-flex justify-content-between">
          <h3>Editar Usuario {usuarioId}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p>Por favor diligencie los datos del usuario.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label">Nombres</label>
                    <input
                      type="text"
                      className="form-control"
                      value="manuel"
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label">Apellidos</label>
                    <input
                      type="text"
                      className="form-control"
                      value="armando"
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value="puertas rojas"
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label">Rol</label>
                    <select className="form-select">
                      {/* <option value="">Seleccionar...</option> */}
                      <option value="1">usuario_final</option>
                      <option value="2">Opcion 2</option>
                    </select>
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label">Nueva Contraseña</label>
                    <input type="password" className="form-control" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label">Repita Contraseña</label>
                    <input type="password" className="form-control" />
                  </div>
                </div>

                <div className="col-12 d-flex justify-content-end my-3">
                  <Link to="/usuarios">
                    <button className="btn btn-danger ms-3">Cancelar</button>
                  </Link>
                  <Link to="/usuarios">
                    <button className="btn btn-success ms-3">Guardar</button>
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

export default EditarUsuarioPage;
