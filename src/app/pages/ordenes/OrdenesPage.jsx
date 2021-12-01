import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LayoutDashboard from "app/layouts/LayoutDashboard";
import { MDBDataTableV5 } from "mdbreact";

const OrdenesPage = function () {
  const [dataTable, setDataTable] = useState(null);

  useEffect(() => {
    makeTable();
  }, []);

  const makeTable = async () => {
    let res = await axios.get(
      `${process.env.REACT_APP_MINTIC_API_URL}/ordenes`
    );
    let columns = [
      {
        label: "descripcion",
        field: "descripcion",
        width: 150,
      },
      {
        label: "nombre",
        field: "_usuario",
        width: 100,
      },
      {
        label: "origen",
        field: "_origen",
        width: 100,
      },
      {
        label: "destino",
        field: "_destino",
        width: 100,
      },
      {
        label: "peso_kg",
        field: "peso_kg",
        width: 100,
      },
      {
        label: "cant_vehiculos",
        field: "cant_vehiculos",
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
    ];

    console.log(res.data.data);

    let rows = res.data.data;

    // agrego botones de acciones
    rows.map((obj) => {
      obj._usuario = `${obj.usuario.nombres} ${obj.usuario.apellidos}`;
      obj._origen = `${obj.destino.origen}`;
      obj._destino = `${obj.destino.destino}`;
      obj.acciones = (
        <React.Fragment>
          <Link
            to={`/ordenes/actualizar/${obj._id}`}
            className="btn btn-sm m-1 btn-secondary"
          >
            Actualizar
          </Link>
          {/* <button
            onClick={() => eliminar(obj)}
            className="btn btn-sm m-1 btn-danger"
          >
            Eliminar
          </button> */}
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
