import * as React from "react";
import { Link } from "react-router-dom";
import LayoutDashboard from "app/layouts/LayoutDashboard";
import { MDBDataTableV5 } from "mdbreact";

const datatable = {
  columns: [
    {
      label: "id",
      field: "id",
      width: 50,
    },
    {
      label: "nombres",
      field: "nombres",
      width: 100,
    },
    {
      label: "apellidos",
      field: "apellidos",
      width: 100,
    },
    {
      label: "email",
      field: "email",
      width: 120,
    },
    {
      label: "rol",
      field: "rol",
      width: 100,
    },
    {
      label: "acciones",
      field: "acciones",
      sort: "disabled",
      width: 180,
    },
  ],
  rows: [
    {
      id: 1,
      nombres: "manuel armando",
      apellidos: "puertas rojas",
      email: "usuario@mail.test",
      rol: "usuario_final",
      acciones: (
        <React.Fragment>
          <Link
            to="/usuarios/detalles/1"
            className="btn btn-sm m-1 btn-warning"
          >
            Detalles
          </Link>
          <Link
            to="/usuarios/editar/1"
            className="btn btn-sm m-1 btn-secondary"
          >
            Editar
          </Link>
          <Link to="/usuarios/eliminar/1" className="btn btn-sm m-1 btn-danger">
            Eliminar
          </Link>
        </React.Fragment>
      ),
    },
    {
      id: 1,
      nombres: "manuel armando",
      apellidos: "puertas rojas",
      email: "usuario@mail.test",
      rol: "usuario_final",
      acciones: (
        <React.Fragment>
          <Link
            to="/usuarios/detalles/1"
            className="btn btn-sm m-1 btn-warning"
          >
            Detalles
          </Link>
          <Link
            to="/usuarios/editar/1"
            className="btn btn-sm m-1 btn-secondary"
          >
            Editar
          </Link>
          <Link to="/usuarios/eliminar/1" className="btn btn-sm m-1 btn-danger">
            Eliminar
          </Link>
        </React.Fragment>
      ),
    },
    {
      id: 1,
      nombres: "manuel armando",
      apellidos: "puertas rojas",
      email: "usuario@mail.test",
      rol: "usuario_final",
      acciones: (
        <React.Fragment>
          <Link
            to="/usuarios/detalles/1"
            className="btn btn-sm m-1 btn-warning"
          >
            Detalles
          </Link>
          <Link
            to="/usuarios/editar/1"
            className="btn btn-sm m-1 btn-secondary"
          >
            Editar
          </Link>
          <Link to="/usuarios/eliminar/1" className="btn btn-sm m-1 btn-danger">
            Eliminar
          </Link>
        </React.Fragment>
      ),
    },
    {
      id: 1,
      nombres: "manuel armando",
      apellidos: "puertas rojas",
      email: "usuario@mail.test",
      rol: "usuario_final",
      acciones: (
        <React.Fragment>
          <Link
            to="/usuarios/detalles/1"
            className="btn btn-sm m-1 btn-warning"
          >
            Detalles
          </Link>
          <Link
            to="/usuarios/editar/1"
            className="btn btn-sm m-1 btn-secondary"
          >
            Editar
          </Link>
          <Link to="/usuarios/eliminar/1" className="btn btn-sm m-1 btn-danger">
            Eliminar
          </Link>
        </React.Fragment>
      ),
    },
    {
      id: 1,
      nombres: "manuel armando",
      apellidos: "puertas rojas",
      email: "usuario@mail.test",
      rol: "usuario_final",
      acciones: (
        <React.Fragment>
          <Link
            to="/usuarios/detalles/1"
            className="btn btn-sm m-1 btn-warning"
          >
            Detalles
          </Link>
          <Link
            to="/usuarios/editar/1"
            className="btn btn-sm m-1 btn-secondary"
          >
            Editar
          </Link>
          <Link to="/usuarios/eliminar/1" className="btn btn-sm m-1 btn-danger">
            Eliminar
          </Link>
        </React.Fragment>
      ),
    },
    {
      id: 1,
      nombres: "manuel armando",
      apellidos: "puertas rojas",
      email: "usuario@mail.test",
      rol: "usuario_final",
      acciones: (
        <React.Fragment>
          <Link
            to="/usuarios/detalles/1"
            className="btn btn-sm m-1 btn-warning"
          >
            Detalles
          </Link>
          <Link
            to="/usuarios/editar/1"
            className="btn btn-sm m-1 btn-secondary"
          >
            Editar
          </Link>
          <Link to="/usuarios/eliminar/1" className="btn btn-sm m-1 btn-danger">
            Eliminar
          </Link>
        </React.Fragment>
      ),
    },
    {
      id: 1,
      nombres: "manuel armando",
      apellidos: "puertas rojas",
      email: "usuario@mail.test",
      rol: "usuario_final",
      acciones: (
        <React.Fragment>
          <Link
            to="/usuarios/detalles/1"
            className="btn btn-sm m-1 btn-warning"
          >
            Detalles
          </Link>
          <Link
            to="/usuarios/editar/1"
            className="btn btn-sm m-1 btn-secondary"
          >
            Editar
          </Link>
          <Link to="/usuarios/eliminar/1" className="btn btn-sm m-1 btn-danger">
            Eliminar
          </Link>
        </React.Fragment>
      ),
    },
  ],
};

class UsuariosPage extends React.Component {
  render() {
    return (
      <LayoutDashboard>
        <div className="row my-4">
          <div className="col-12 d-flex justify-content-between">
            <h3>Lista de Usuarios</h3>
            <Link to="/usuarios/crear" className="btn btn-dark">
              <i className="fas fa-user-plus me-2"></i>
              Nueva Usuario
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <MDBDataTableV5
                  hover
                  entries={5}
                  data={datatable}
                  searchTop
                  searchBottom={false}
                  scrollX
                  searchLabel="Buscar..."
                />
              </div>
            </div>
          </div>
        </div>
      </LayoutDashboard>
    );
  }
}

export default UsuariosPage;
