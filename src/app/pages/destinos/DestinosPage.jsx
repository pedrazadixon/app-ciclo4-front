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
      label: "origen",
      field: "origen",
      width: 150,
    },
    {
      label: "destino",
      field: "destino",
      width: 150,
    },
    {
      label: "distancia kms.",
      field: "distancia",
      width: 150,
    },
    {
      label: "tiempo mins.",
      field: "tiempo",
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
      origen: "bosa",
      destino: "fontibon",
      distancia: 5.5,
      tiempo: 90,
      acciones: (
        <React.Fragment>
          <Link
            to="/destinos/editar/1"
            className="btn btn-sm m-1 btn-secondary"
          >
            Editar
          </Link>
        </React.Fragment>
      ),
    },
    {
      id: 1,
      origen: "bosa",
      destino: "fontibon",
      distancia: 5.5,
      tiempo: 90,
      acciones: (
        <React.Fragment>
          <Link
            to="/destinos/editar/1"
            className="btn btn-sm m-1 btn-secondary"
          >
            Editar
          </Link>
        </React.Fragment>
      ),
    },
    {
      id: 1,
      origen: "bosa",
      destino: "fontibon",
      distancia: 5.5,
      tiempo: 90,
      acciones: (
        <React.Fragment>
          <Link
            to="/destinos/editar/1"
            className="btn btn-sm m-1 btn-secondary"
          >
            Editar
          </Link>
        </React.Fragment>
      ),
    },
    {
      id: 1,
      origen: "bosa",
      destino: "fontibon",
      distancia: 5.5,
      tiempo: 90,
      acciones: (
        <React.Fragment>
          <Link
            to="/destinos/editar/1"
            className="btn btn-sm m-1 btn-secondary"
          >
            Editar
          </Link>
        </React.Fragment>
      ),
    },
    {
      id: 1,
      origen: "bosa",
      destino: "fontibon",
      distancia: 5.5,
      tiempo: 90,
      acciones: (
        <React.Fragment>
          <Link
            to="/destinos/editar/1"
            className="btn btn-sm m-1 btn-secondary"
          >
            Editar
          </Link>
        </React.Fragment>
      ),
    },
    {
      id: 1,
      origen: "bosa",
      destino: "fontibon",
      distancia: 5.5,
      tiempo: 90,
      acciones: (
        <React.Fragment>
          <Link
            to="/destinos/editar/1"
            className="btn btn-sm m-1 btn-secondary"
          >
            Editar
          </Link>
        </React.Fragment>
      ),
    },
  ],
};

class DestinosPage extends React.Component {
  render() {
    return (
      <LayoutDashboard>
        <div className="row my-4">
          <div className="col-12 d-flex justify-content-between">
            <h3>Lista de Destinos</h3>
            <div>
              <Link to="/destinos/precio-km" className="btn btn-primary me-2">
                <i className="fas fa-dollar-sign me-2"></i>
                Precio Kilometro ($5.500)
              </Link>
              <Link to="/destinos/crear" className="btn btn-dark">
                <i className="fas fa-map-marked-alt me-2"></i>
                Nuevo Destino
              </Link>
            </div>
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

export default DestinosPage;
