import * as React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import LayoutDashboard from "app/layouts/LayoutDashboard";


const CrearUsuarioPage = function () {
  const history = useHistory();

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async function (event) {
    event.preventDefault();
    const res = await axios.post(
      `${process.env.REACT_APP_MINTIC_API_URL}/usuarios`,
      form
    );

    if (res.data && res.data.status === "success") {
      toast.success("Guardado correctamente.");
      return history.push("/usuarios");
    }
    toast.error("Ocurrio un error.");
  };

  return (
    <LayoutDashboard>
      <div className="row my-4">
        <div className="col-12 d-flex justify-content-between">
          <h3>Nuevo Usuario</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <p>Por favor diligencie la informacion del usuario.</p>
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
                      <label className="form-label">Nombres</label>
                      <input
                        type="text"
                        required
                        name="nombres"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Apellidos</label>
                      <input
                        type="text"
                        required
                        name="apellidos"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        required
                        name="email"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Rol</label>
                      <select
                        required
                        className="form-select"
                        name="rol"
                        onChange={handleChange}
                      >
                        <option value="">Seleccionar...</option>
                        <option value="UsuarioExterno">Usuario Externo</option>
                        <option value="Administrador">Administrador</option>

                        ))
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Contraseña</label>
                      <input
                        type="password"
                        required
                        name="contrasena"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-12 d-flex justify-content-end my-3">
                    <Link className="btn btn-danger ms-3" to="/usuarios">
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

export default CrearUsuarioPage;
