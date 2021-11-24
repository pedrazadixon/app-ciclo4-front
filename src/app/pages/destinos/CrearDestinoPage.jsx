import * as React from "react";
import { Link } from "react-router-dom";
import LayoutDashboard from "app/layouts/LayoutDashboard";

function CrearDestinoPage() {
  return (
    <LayoutDashboard>
      <div className="row my-4">
        <div className="col-12 d-flex justify-content-between">
          <h3>Crear Destino</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p>Por favor diligencie los datos del destino.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label">Punto de rigen</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label">Punto de destino</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label">Distancia (kms)</label>
                    <input type="number" className="form-control" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-3">
                    <label className="form-label">Tiempo (minutos)</label>
                    <input type="number" className="form-control" />
                  </div>
                </div>

                <div className="col-12 d-flex justify-content-end my-3">
                  <Link to="/destinos">
                    <button className="btn btn-danger ms-3">Cancelar</button>
                  </Link>
                  <Link to="/destinos">
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

export default CrearDestinoPage;
