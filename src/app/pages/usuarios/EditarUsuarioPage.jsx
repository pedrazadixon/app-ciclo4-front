import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "app/utils/axios";
import { toast } from "react-toastify";
import LayoutDashboard from "app/layouts/LayoutDashboard";
import MostrarA from "app/utils/MostrarA";

const EditarUsuarioPage = function () {
  let { id: usuarioId } = useParams();

  const history = useHistory();

  const [form, setForm] = useState({});

  useEffect(() => {
    getFormData();
  }, []);

  const getFormData = async () => {
    let res = await axios.get(`/usuarios/${usuarioId}`);

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
    const res = await axios.put(`/usuarios/${usuarioId}`, form);

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
          <h3>Editar Usuario</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p>Por favor diligencie los datos del Usuario.</p>
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
                      <label className="form-label">Nombres</label>
                      <input
                        required
                        value={form.nombres || ""}
                        name="nombres"
                        type="text"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Apellidos</label>
                      <input
                        required
                        value={form.apellidos || ""}
                        name="apellidos"
                        type="text"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        required
                        value={form.email || ""}
                        name="email"
                        type="email"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <MostrarA roles={["Administrador"]}>
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label">Rol</label>
                        <select
                          required
                          className="form-select"
                          name="rol"
                          value={form.rol || ""}
                          onChange={handleChange}
                        >
                          <option value="">Seleccionar...</option>
                          <option value="Usuario Interno">
                            Usuario Interno
                          </option>
                          <option value="Usuario Externo">
                            Usuario Externo
                          </option>
                          <option value="Administrador">Administrador</option>
                          ))
                        </select>
                      </div>
                    </div>
                  </MostrarA>

                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-label">Contrase??a</label>
                      <input
                        name="contrasena"
                        minLength={6}
                        type="password"
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
};

export default EditarUsuarioPage;
