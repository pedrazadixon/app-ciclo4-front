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
      label: "creacion",
      field: "creacion",
      width: 100,
    },
    {
      label: "nombre",
      field: "nombre",
      width: 100,
    },
    {
      label: "descripcion",
      field: "descripcion",
      width: 150,
    },
    {
      label: "peso kg",
      field: "peso",
      width: 100,
    },
    {
      label: "vehiculos",
      field: "vehiculos",
      width: 100,
    },
    {
      label: "recogida",
      field: "recogida",
      width: 100,
    },
    {
      label: "entrega",
      field: "entrega",
      width: 100,
    },
    {
      label: "estado",
      field: "estado",
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
      creacion: "2021-01-01 17:54:15",
      nombre: "Recogida material",
      descripcion: "Recoger materiales para entregar en obra.",
      peso: "61",
      vehiculos: "3",
      recogida: "bosa",
      entrega: "fontibon",
      estado: <b>Pendiente</b>,
      acciones: (
        <React.Fragment>
          <Link to="/ordenes/detalles/1" className="btn btn-sm m-1 btn-warning">
            Detalles
          </Link>
          <Link
            to="/ordenes/actualizar/1"
            className="btn btn-sm m-1 btn-secondary"
          >
            Actualizar
          </Link>
        </React.Fragment>
      ),
    },
    {
      id: 1,
      creacion: "2021-01-01 17:54:15",
      nombre: "Recogida material",
      descripcion: "Recoger materiales para entregar en obra.",
      peso: "61",
      vehiculos: "3",
      recogida: "bosa",
      entrega: "fontibon",
      estado: <b>Pendiente</b>,
      acciones: (
        <React.Fragment>
          <Link to="/ordenes/detalles/1" className="btn btn-sm m-1 btn-warning">
            Detalles
          </Link>
          <Link
            to="/ordenes/actualizar/1"
            className="btn btn-sm m-1 btn-secondary"
          >
            Actualizar
          </Link>
        </React.Fragment>
      ),
    },
    {
      id: 1,
      creacion: "2021-01-01 17:54:15",
      nombre: "Recogida material",
      descripcion: "Recoger materiales para entregar en obra.",
      peso: "61",
      vehiculos: "3",
      recogida: "bosa",
      entrega: "fontibon",
      estado: <b>Pendiente</b>,
      acciones: (
        <React.Fragment>
          <Link to="/ordenes/detalles/1" className="btn btn-sm m-1 btn-warning">
            Detalles
          </Link>
          <Link
            to="/ordenes/actualizar/1"
            className="btn btn-sm m-1 btn-secondary"
          >
            Actualizar
          </Link>
        </React.Fragment>
      ),
    },
    {
      id: 1,
      creacion: "2021-01-01 17:54:15",
      nombre: "Recogida material",
      descripcion: "Recoger materiales para entregar en obra.",
      peso: "61",
      vehiculos: "3",
      recogida: "bosa",
      entrega: "fontibon",
      estado: <b>Pendiente</b>,
      acciones: (
        <React.Fragment>
          <Link to="/ordenes/detalles/1" className="btn btn-sm m-1 btn-warning">
            Detalles
          </Link>
          <Link
            to="/ordenes/actualizar/1"
            className="btn btn-sm m-1 btn-secondary"
          >
            Actualizar
          </Link>
        </React.Fragment>
      ),
    },
    {
      id: 1,
      creacion: "2021-01-01 17:54:15",
      nombre: "Recogida material",
      descripcion: "Recoger materiales para entregar en obra.",
      peso: "61",
      vehiculos: "3",
      recogida: "bosa",
      entrega: "fontibon",
      estado: <b>Pendiente</b>,
      acciones: (
        <React.Fragment>
          <Link to="/ordenes/detalles/1" className="btn btn-sm m-1 btn-warning">
            Detalles
          </Link>
          <Link
            to="/ordenes/actualizar/1"
            className="btn btn-sm m-1 btn-secondary"
          >
            Actualizar
          </Link>
        </React.Fragment>
      ),
    },
    {
      id: 1,
      creacion: "2021-01-01 17:54:15",
      nombre: "Recogida material",
      descripcion: "Recoger materiales para entregar en obra.",
      peso: "61",
      vehiculos: "3",
      recogida: "bosa",
      entrega: "fontibon",
      estado: <b>Pendiente</b>,
      acciones: (
        <React.Fragment>
          <Link to="/ordenes/detalles/1" className="btn btn-sm m-1 btn-warning">
            Detalles
          </Link>
          <Link
            to="/ordenes/actualizar/1"
            className="btn btn-sm m-1 btn-secondary"
          >
            Actualizar
          </Link>
        </React.Fragment>
      ),
    },
    {
      id: 1,
      creacion: "2021-01-01 17:54:15",
      nombre: "Recogida material",
      descripcion: "Recoger materiales para entregar en obra.",
      peso: "61",
      vehiculos: "3",
      recogida: "bosa",
      entrega: "fontibon",
      estado: <b>Pendiente</b>,
      acciones: (
        <React.Fragment>
          <Link to="/ordenes/detalles/1" className="btn btn-sm m-1 btn-warning">
            Detalles
          </Link>
          <Link
            to="/ordenes/actualizar/1"
            className="btn btn-sm m-1 btn-secondary"
          >
            Actualizar
          </Link>
        </React.Fragment>
      ),
    },
  ],
};

class OrdenesPage extends React.Component {
  render() {
    return (
      <LayoutDashboard>
        <div className="row my-4">
          <div className="col-12 d-flex justify-content-between">
            <h3>Lista de Ordenes</h3>
            <Link to="/ordenes/crear" className="btn btn-dark">
              <i className="fas fa-plus me-2"></i>
              Nueva Orden
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

export default OrdenesPage;
