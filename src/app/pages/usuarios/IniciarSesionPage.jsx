import * as React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const IniciarSesionPage = function () {
  const history = useHistory();

  const [form, setForm] = useState({});

  const [disableLoginBtn, setDisableLoginBtn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async function (event) {
    event.preventDefault();

    setDisableLoginBtn(true);

    let timeoutBtnLogin = setTimeout(() => {
      setDisableLoginBtn(false);
    }, 1500);

    const res = await axios.post(
      `${process.env.REACT_APP_MINTIC_API_URL}/usuarios/iniciar-sesion`,
      form
    );

    if (res.data && res.data.status === "success") {
      toast.success("Bienvenido.");

      localStorage.setItem("usuario", JSON.stringify(res.data.data));

      clearTimeout(timeoutBtnLogin);

      return history.push("/ordenes");
    }
    toast.error("Credenciales incorrectas.");
  };

  return (
    <main>
      <div className="container d-flex justify-content-center">
        <div className="card mt-5" style={{ width: "40rem" }}>
          <div className="card-header text-center">Iniciar sesion</div>

          <div className="card-body">
            <form onSubmit={handleSubmit} className="px-5 py-3">
              <div className="form-group mb-3">
                <label>Usuario</label>
                <input
                  onChange={handleChange}
                  required
                  name="email"
                  type="email"
                  className="form-control"
                />
              </div>
              <div className="form-group mb-3">
                <label>Contraseña</label>
                <input
                  onChange={handleChange}
                  required
                  name="contrasena"
                  type="password"
                  className="form-control"
                />
              </div>
              <div className="mt-3 text-end">
                <button
                  type="submit"
                  disabled={disableLoginBtn}
                  className="btn btn-dark"
                >
                  Iniciar sesion
                </button>
              </div>
              <div className="text-end mt-1">
                <small>
                  <span> o </span>
                  <Link to="/registrarse" className="text-dark">
                    registrarse
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

export default IniciarSesionPage;
