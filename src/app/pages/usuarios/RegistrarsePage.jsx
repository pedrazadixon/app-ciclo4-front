import * as React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "app/utils/axios";

const RegistrarsePage = () => {
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
    const res = await axios.post(`/usuarios/registro`, form);

    console.log(res);

    if (res.data && res.data.status === "success") {
      toast.success("Registro completado. Ahora puede iniciar sesion.");
      return history.push("/iniciar-sesion");
    }
    toast.error("Ocurrio un error.");
  };

  return (
    <main>
      <div className="container d-flex justify-content-center">
        <div className="card mt-5" style={{ width: "40rem" }}>
          <div className="card-header text-center">Registrarse</div>

          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label>Nombres</label>
                <input
                  required
                  onChange={handleChange}
                  name="nombres"
                  className="form-control"
                  type="text"
                />
              </div>

              <div className="form-group mb-3">
                <label>Apellidos</label>
                <input
                  required
                  onChange={handleChange}
                  name="apellidos"
                  className="form-control"
                  type="text"
                />
              </div>

              <div className="form-group mb-3">
                <label>Email</label>
                <input
                  required
                  onChange={handleChange}
                  name="email"
                  className="form-control"
                  type="email"
                />
              </div>

              <div className="form-group mb-3">
                <label>Contraseña</label>
                <input
                  required
                  onChange={handleChange}
                  name="contrasena"
                  minLength={6}
                  className="form-control"
                  type="password"
                />
              </div>

              <div className="mt-3 text-end">
                <button type="submit" className="btn btn-dark">
                  Registrarse
                </button>
              </div>
              <div className="text-end mt-1">
                <small>
                  <span> o </span>
                  <Link to="/iniciar-sesion" className="text-dark">
                    iniciar sesion
                  </Link>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegistrarsePage;
