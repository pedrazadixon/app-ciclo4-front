import * as React from "react";
import { useState, useEffect } from "react";
import axios from "app/utils/axios";
import { Link, useParams } from "react-router-dom";
import LayoutDashboard from "app/layouts/LayoutDashboard";

const DetallesUsuarioPage = function () {
  let { id: usuarioId } = useParams();
  const [detalles, setDetalles] = useState({ usuario: {}, destino: {} });

  useEffect(() => {
    getDetalles();
  }, []);

  const getDetalles = async () => {
    let res = await axios.get(`/usuarios/${usuarioId}`);
    setDetalles(res.data.data);
  };

  return (
    <LayoutDashboard>
      <div className="row my-4">
        <div className="col-12 d-flex justify-content-between">
          <h3>
            Detalles Usuario {detalles.nombres} {detalles.apellidos}
          </h3>
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
                <table className="table table-hover">
                  <tbody>
                    <tr>
                      <td className="fw-bold">ID</td>
                      <td>{detalles._id}</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">Nombres</td>
                      <td>{detalles.nombres}</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">Apellidos</td>
                      <td>{detalles.apellidos}</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">Email</td>
                      <td>{detalles.email}</td>
                    </tr>

                    <tr>
                      <td className="fw-bold">Rol</td>
                      <td>{detalles.rol}</td>
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
};

export default DetallesUsuarioPage;
