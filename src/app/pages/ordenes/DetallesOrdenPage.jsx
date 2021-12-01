import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import LayoutDashboard from "app/layouts/LayoutDashboard";

function DetallesOrdenPage() {
  let { id: ordenId } = useParams();

  const [detalles, setDetalles] = useState({ usuario: {}, destino: {} });

  useEffect(() => {
    getDetalles();
  }, []);

  const getDetalles = async () => {
    let res = await axios.get(
      `${process.env.REACT_APP_MINTIC_API_URL}/ordenes/${ordenId}`
    );
    setDetalles(res.data.data);
  };

  return (
    <LayoutDashboard>
      <div className="row my-4">
        <div className="col-12 d-flex justify-content-between">
          <h3>Detalles de Orden</h3>
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
                <table className="table table-hover">
                  <tbody>
                    <tr>
                      <td className="fw-bold">ID</td>
                      <td>{detalles._id}</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">Cracion</td>
                      <td></td>
                    </tr>

                    <tr>
                      <td className="fw-bold">Nombre del usuario</td>
                      <td>{detalles.usuario.nombres}</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">Descripcion</td>
                      <td>{detalles.descripcion}</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">Peso (kg)</td>
                      <td>{detalles.peso_kg}</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">Vehiculos</td>
                      <td>{detalles.cant_vehiculos}</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">Recogida</td>
                      <td>{detalles.destino.origen}</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">Entrega</td>
                      <td>{detalles.destino.destino}</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">Durcion (minutos)</td>
                      <td>{detalles.destino.minutos}</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">Distancia (kms)</td>
                      <td>{detalles.destino.distancia_km}</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">Estado</td>
                      <td>{detalles.estado}</td>
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
