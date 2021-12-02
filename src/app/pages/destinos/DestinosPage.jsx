import * as React from "react";
import { useState, useEffect } from "react";
import axios from "app/utils/axios";
import { Link } from "react-router-dom";
import { MDBDataTableV5 } from "mdbreact";
import { toast } from "react-toastify";
import LayoutDashboard from "app/layouts/LayoutDashboard";

function DestinosPage() {
  const [dataTable, setDataTable] = useState(null);
  const [precioPorKm, setPrecioPorKm] = useState(0);

  const eliminar = async (obj) => {
    await axios.delete(`/destinos/${obj._id}`);
    setDataTable((state) => {
      let newRows = state.rows.filter(function (row) {
        return row._id !== obj._id;
      });
      return { columns: state.columns, rows: newRows };
    });
    toast.success("Eliminado correctamente.");
  };

  const makeTable = async () => {
    let res = await axios.get(`/destinos`);
    let columns = [
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
        field: "distancia_km",
        width: 150,
      },
      {
        label: "tiempo mins.",
        field: "minutos",
        width: 100,
      },
      {
        label: "acciones",
        field: "acciones",
        sort: "disabled",
        width: 180,
      },
    ];
    let rows = res.data.data;

    // agrego botones de acciones
    rows.map((obj) => {
      return (obj.acciones = (
        <React.Fragment>
          <Link
            to={`/destinos/editar/${obj._id}`}
            className="btn btn-sm m-1 btn-secondary"
          >
            Editar
          </Link>
          <button
            onClick={() => eliminar(obj)}
            className="btn btn-sm m-1 btn-danger"
          >
            Eliminar
          </button>
        </React.Fragment>
      ));
    });

    setDataTable({ columns, rows });
  };

  useEffect(() => {
    getPrecioKm();
    makeTable();
  }, []);

  const getPrecioKm = async () => {
    let res = await axios.get(`/config/precio_km`);
    setPrecioPorKm(res.data.data.valor);
  };

  return (
    <LayoutDashboard>
      <div className="row my-4">
        <div className="col-12 d-flex justify-content-between">
          <h3>Lista de Destinos</h3>
          <div>
            <Link to="/destinos/precio-km" className="btn btn-primary me-2">
              <i className="fas fa-dollar-sign me-2"></i>
              Precio Kilometro (${precioPorKm})
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
}

export default DestinosPage;
