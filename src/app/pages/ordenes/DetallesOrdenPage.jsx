import * as React from "react";
import { Link, useParams } from "react-router-dom";
import LayoutDashboard from "app/layouts/LayoutDashboard";

function DetallesOrdenPage() {
  let { id: ordenId } = useParams();

  return (
    <LayoutDashboard>
      <div className="row my-4">
        <div className="col-12 d-flex justify-content-between">
          <h3>Detalles Orden {ordenId} </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p>A continuacion se relacionan los detalles de la orden.</p>
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
                      <td className="fw-bold">Cracion</td>
                      <td>2021-01-01 17:54:15</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">nombre</td>
                      <td>Recogida material</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">descripcion</td>
                      <td>Recoger materiales para entregar en obra.</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">peso kg</td>
                      <td>61</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">vehiculos</td>
                      <td>3</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">recogida</td>
                      <td>bosa</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">entrega</td>
                      <td>fontibon</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">estado</td>
                      <td>pendiente</td>
                    </tr>
                  </tbody>
                </table>

                <div className="col-12 d-flex justify-content-end my-2">
                  <Link to="/ordenes">
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

export default DetallesOrdenPage;
