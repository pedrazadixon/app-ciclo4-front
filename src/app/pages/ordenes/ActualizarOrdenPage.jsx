import * as React from "react";
import { Link, useParams } from "react-router-dom";
import LayoutDashboard from "app/layouts/LayoutDashboard";

function ActualizarOrdenPage() {
  let { id: ordenId } = useParams();

  return (
    <LayoutDashboard>
      <div className="row my-4">
        <div className="col-12 d-flex justify-content-between">
          <h3>Actualizar Orden {ordenId} </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p>Por favor seleccione el nuevo estado de esta orden.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label">Nombre de la orden</label>
                    <input
                      type="email"
                      readOnly
                      className="form-control"
                      value="Recogida material"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label">Descripcion</label>
                    <input
                      type="email"
                      readOnly
                      className="form-control"
                      value="Recoger materiales para entregar en obra."
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="mb-3">
                    <label className="form-label">Estado</label>
                    <select className="form-select">
                      <option value="">Pendiente</option>
                      <option value="1">Opcion 1</option>
                      <option value="2">Opcion 2</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-end my-3">
                  <Link to="/ordenes">
                    <button className="btn btn-danger ms-3">Cancelar</button>
                  </Link>
                  <Link to="/ordenes">
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

export default ActualizarOrdenPage;
