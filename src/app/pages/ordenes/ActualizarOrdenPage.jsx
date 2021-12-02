import * as React from "react";
import { useState, useEffect } from "react";
import axios from "app/utils/axios";
import { toast } from "react-toastify";
import { Link, useHistory, useParams } from "react-router-dom";
import LayoutDashboard from "app/layouts/LayoutDashboard";

function ActualizarOrdenPage() {
  const history = useHistory();

  let { id: ordenId } = useParams();

  const [detalles, setDetalles] = useState({ usuario: {}, destino: {} });

  const [form, setForm] = useState({});

  useEffect(() => {
    getDetalles();
  }, []);

  const getDetalles = async () => {
    let res = await axios.get(`/ordenes/${ordenId}`);
    setDetalles(res.data.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async function (event) {
    event.preventDefault();
    const res = await axios.patch(`/ordenes/${ordenId}`, form);

    if (res.data && res.data.status === "success") {
      toast.success("Guardado correctamente.");
      return history.push("/ordenes");
    }
    toast.error("Ocurrio un error.");
  };

  return (
    <LayoutDashboard>
      {JSON.stringify(form)}
      <div className="row my-4">
        <div className="col-12 d-flex justify-content-between">
          <h3>Actualizar Orden</h3>
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
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Nombre de usuario</label>
                      <input
                        type="text"
                        readOnly
                        className="form-control"
                        value={detalles.usuario.nombres || ""}
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Descripcion</label>
                      <input
                        type="text"
                        readOnly
                        className="form-control"
                        value={detalles.descripcion || ""}
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Origen</label>
                      <input
                        type="text"
                        readOnly
                        className="form-control"
                        value={detalles.destino.origen || ""}
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Destino</label>
                      <input
                        type="text"
                        readOnly
                        className="form-control"
                        value={detalles.destino.destino || ""}
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="mb-1">
                      <label className="form-label">
                        <b>
                          Estado Actual: <i>{detalles.estado}</i>
                        </b>
                      </label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="mb-3">
                      <label className="form-label">Nuevo estado:</label>
                      <select
                        name="estado"
                        required
                        className="form-select"
                        onChange={handleChange}
                      >
                        <option value="">Seleccionar...</option>
                        <option value="Pendiente por despacho">
                          Pendiente por despacho
                        </option>
                        <option value="Despachada">Despachada</option>
                        <option value="Finalizada">Finalizada</option>
                        <option value="Cancelada">Cancelada</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-end my-3">
                    <Link to="/ordenes" className="btn btn-danger ms-3">
                      Cancelar
                    </Link>
                    <button type="submit" className="btn btn-success ms-3">
                      Guardar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </LayoutDashboard>
  );
}

export default ActualizarOrdenPage;
