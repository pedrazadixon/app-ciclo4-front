import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "app/utils/axios";
import { toast } from "react-toastify";
import LayoutDashboard from "app/layouts/LayoutDashboard";

function PrecioKmPage() {
  const [form, setForm] = useState({});

  useEffect(() => {
    getFormData();
  }, []);

  const getFormData = async () => {
    let res = await axios.get(`/config/precio_km`);

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
    const res = await axios.put(`/config/precio_km`, form);

    if (res.data && res.data.status === "success") {
      return toast.success("Guardado correctamente.");
    }
    toast.error("Ocurrio un error.");
  };

  return (
    <LayoutDashboard>
      <div className="row my-4">
        <div className="col-12 d-flex justify-content-between">
          <h3>Precio por Kilometro recorrido</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p>Por favor diligencie el precio por cada kilometro recorrido.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Precio por 1 kilometro recorrido:
                      </label>
                      <input
                        type="hidden"
                        value={form.nombre || "precio_km"}
                        name="nombre"
                        onChange={handleChange}
                        className="form-control form-control-lg"
                      />

                      <input
                        type="number"
                        required
                        value={form.valor || "0"}
                        name="valor"
                        onChange={handleChange}
                        className="form-control form-control-lg"
                      />
                    </div>
                  </div>

                  <div className="col-12 d-flex justify-content-end my-3">
                    <Link className="btn btn-danger ms-3" to="/destinos">
                      Volver
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

export default PrecioKmPage;
