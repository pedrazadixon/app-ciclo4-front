import * as React from "react";
import { Link } from "react-router-dom";
import LayoutDashboard from "app/layouts/LayoutDashboard";

class CrearOrdenPage extends React.Component {
  render() {
    return (
      <LayoutDashboard>
        <div className="row my-4">
          <div className="col-12 d-flex justify-content-between">
            <h3>Nueva Orden</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <p>Por favor diligencie la informacion de la orden.</p>
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
                      <input type="email" className="form-control" />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Descripcion</label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Peso Kg.</label>
                      <input type="number" className="form-control" />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Vehiculos necesarios</label>
                      <input type="number" className="form-control" />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Punto recogida</label>
                      <select className="form-select">
                        <option value="">Seleccionar...</option>
                        <option value="1">Opcion 1</option>
                        <option value="2">Opcion 2</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Punto destino</label>
                      <select className="form-select">
                        <option value="">Seleccionar...</option>
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
}

export default CrearOrdenPage;
