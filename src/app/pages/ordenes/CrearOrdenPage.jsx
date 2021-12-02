import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "app/utils/axios";
import { toast } from "react-toastify";
import LayoutDashboard from "app/layouts/LayoutDashboard";

function CrearOrdenPage() {
  const history = useHistory();

  const usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));

  const [form, setForm] = useState({});
  const [recorridos, setRecorridos] = useState([]);

  useEffect(() => {
    makeRecorridosOptions();
  }, []);

  const makeRecorridosOptions = async () => {
    let res = await axios.get(
      `${process.env.REACT_APP_MINTIC_API_URL}/destinos`
    );
    setRecorridos(res.data.data);
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

    let ordenData = {
      ...form,
      usuario: usuarioLogueado._id, // todo: cambiar por id usuario logueado
      estado: "Pendiente aceptación",
    };

    const res = await axios.post(
      `${process.env.REACT_APP_MINTIC_API_URL}/ordenes`,
      ordenData
    );

    if (res.data && res.data.status === "success") {
      toast.success("Guardado correctamente.");
      return history.push("/ordenes");
    }
    toast.error("Ocurrio un error.");
  };

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
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Descripcion</label>
                      <input
                        type="text"
                        required
                        name="descripcion"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Peso Kg.</label>
                      <input
                        type="number"
                        required
                        min="1"
                        name="peso_kg"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Vehiculos necesarios</label>
                      <input
                        type="number"
                        required
                        min="1"
                        name="cant_vehiculos"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Recorrido</label>
                      <select
                        required
                        className="form-select"
                        name="destino"
                        onChange={handleChange}
                      >
                        <option value="">Seleccionar...</option>
                        {recorridos.map((r) => (
                          <option key={r._id} value={r._id}>
                            {r.origen} -> {r.destino} ({r.distancia_km} km)
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-12 d-flex justify-content-end my-3">
                    <Link className="btn btn-danger ms-3" to="/ordenes">
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

export default CrearOrdenPage;
