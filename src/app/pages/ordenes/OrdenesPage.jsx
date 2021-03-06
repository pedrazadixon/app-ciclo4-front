import * as React from "react";
import { useState, useEffect } from "react";
import axios from "app/utils/axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import LayoutDashboard from "app/layouts/LayoutDashboard";
import { MDBDataTableV5 } from "mdbreact";
import MostrarA from "app/utils/MostrarA";

const OrdenesPage = function () {
  const [dataTable, setDataTable] = useState(null);

  useEffect(() => {
    makeTable();
  }, []);

  const eliminar = async (obj) => {
    await axios.delete(`/ordenes/${obj._id}`);
    setDataTable((state) => {
      let newRows = state.rows.filter(function (row) {
        return row._id !== obj._id;
      });
      return { columns: state.columns, rows: newRows };
    });
    toast.success("Eliminado correctamente.");
  };

  const makeTable = async () => {
    let res = await axios.get(`/ordenes`);
    let columns = [
      {
        label: "Descripcion",
        field: "descripcion",
        width: 150,
      },
      {
        label: "Nombre",
        field: "_usuario",
        width: 100,
      },
      {
        label: "Origen",
        field: "_origen",
        width: 100,
      },
      {
        label: "Destino",
        field: "_destino",
        width: 100,
      },
      {
        label: "Peso (Kgs)",
        field: "peso_kg",
        width: 100,
      },
      {
        label: "Vehiculos",
        field: "cant_vehiculos",
        width: 100,
      },
      {
        label: "Estado",
        field: "estado",
        width: 100,
      },
      {
        label: "Acciones",
        field: "acciones",
        sort: "disabled",
        width: 330,
      },
    ];

    let rows = res.data.data;

    // agrego botones de acciones
    rows.map((obj) => {
      obj._usuario = `${obj.usuario.nombres} ${obj.usuario.apellidos}`;
      obj._origen = `${obj.destino.origen}`;
      obj._destino = `${obj.destino.destino}`;
      obj.acciones = (
        <React.Fragment>
          <Link
            to={`/ordenes/detalles/${obj._id}`}
            className="btn btn-sm m-1 btn-warning"
          >
            Detalles
          </Link>

          <MostrarA roles={["Administrador", "Usuario Interno"]}>
            <Link
              to={`/ordenes/actualizar/${obj._id}`}
              className="btn btn-sm m-1 btn-secondary"
            >
              Actualizar
            </Link>
          </MostrarA>

          <Link
            to={`/ordenes/factura/${obj._id}`}
            className="btn btn-sm m-1 btn-primary"
          >
            Factura
          </Link>

          <MostrarA roles={["Administrador", "Usuario Interno"]}>
            <button
              onClick={() => eliminar(obj)}
              className="btn btn-sm m-1 btn-danger"
            >
              Eliminar
            </button>
          </MostrarA>
        </React.Fragment>
      );
      return obj;
    });

    setDataTable({ columns, rows });
  };

  return (
    <LayoutDashboard>
      <div className="row my-4">
        <div className="col-12 d-flex justify-content-between">
          <h3>Lista de Ordenes</h3>
          <Link to="/ordenes/crear" className="btn btn-dark">
            <i className="fas fa-copy me-2"></i>
            Nueva Orden
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              {(() => {
                if (dataTable == null) {
                  return (
                    <div className="row">
                      <div className="col-12 text-center my-3">
                        <div className="spinner-border" role="status">
                          <span className="sr-only">Cargando...</span>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <MDBDataTableV5
                      hover
                      entries={5}
                      data={dataTable}
                      searchTop
                      searchBottom={false}
                      scrollX
                      searchLabel="Buscar..."
                      noRecordsFoundLabel="No se encontraron datos."
                    />
                  );
                }
              })()}
            </div>
          </div>
        </div>
      </div>
    </LayoutDashboard>
  );
};

export default OrdenesPage;
