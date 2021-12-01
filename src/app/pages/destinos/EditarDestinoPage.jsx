import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import LayoutDashboard from "app/layouts/LayoutDashboard";

function EditarDestinoPage() {
  let { id: destinoId } = useParams();

  const history = useHistory();

  const [form, setForm] = useState({});

  useEffect(() => {
    getFormData();
  }, []);

  const getFormData = async () => {
    let res = await axios.get(
      `${process.env.REACT_APP_MINTIC_API_URL}/destinos/${destinoId}`
    );

    delete res.data.data._id;
    delete res.data.data.__v;

    setForm(res.data.data);
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
    const res = await axios.put(
      `${process.env.REACT_APP_MINTIC_API_URL}/destinos/${destinoId}`,
      form
    );

    if (res.data && res.data.status === "success") {
      toast.success("Guardado correctamente.");
      return history.push("/destinos");
    }
    toast.error("Ocurrio un error.");
  };

  return (
    <LayoutDashboard>
      <div className="row my-4">
        <div className="col-12 d-flex justify-content-between">
          <h3>Editar Destino</h3>
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
              <form onSubmit={handleSubmit} id="Form1">
                <div className="row">
                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Punto de origen</label>
                      <input
                        required
                        value={form.origen || ""}
                        name="origen"
                        type="text"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Punto de destino</label>
                      <input
                        required
                        value={form.destino || ""}
                        name="destino"
                        type="text"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Distancia (kms)</label>
                      <input
                        required
                        value={form.distancia_km || ""}
                        name="distancia_km"
                        type="number"
                        min="1"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Tiempo (minutos)</label>
                      <input
                        required
                        value={form.minutos || ""}
                        name="minutos"
                        type="number"
                        min="1"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-12 d-flex justify-content-end my-3">
                    <Link className="btn btn-danger ms-3" to="/destinos">
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

export default EditarDestinoPage;
