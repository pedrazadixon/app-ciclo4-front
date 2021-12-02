import * as React from "react";
import { useState, useEffect } from "react";
import axios from "app/utils/axios";
import { Link } from "react-router-dom";
import LayoutDashboard from "app/layouts/LayoutDashboard";
import { MDBDataTableV5 } from "mdbreact";
import { toast } from "react-toastify";

const UsuariosPage = function () {
  const [dataTable, setDataTable] = useState(null);

  useEffect(() => {
    makeTable();
  }, []);

  const eliminar = async (obj) => {
    await axios.delete(`/usuarios/${obj._id}`);
    setDataTable((state) => {
      let newRows = state.rows.filter(function (row) {
        return row._id !== obj._id;
      });
      return { columns: state.columns, rows: newRows };
    });
    toast.success("Eliminado correctamente.");
  };

  const makeTable = async () => {
    let res = await axios.get(`/usuarios`);
    let columns = [
      {
        label: "Nombres",
        field: "nombres",
        width: 100,
      },
      {
        label: "Apellidos",
        field: "apellidos",
        width: 100,
      },
      {
        label: "Email",
        field: "email",
        width: 120,
      },
      {
        label: "Rol",
        field: "rol",
        width: 100,
      },
      {
        label: "Acciones",
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
            to={`/usuarios/detalles/${obj._id}`}
            className="btn btn-sm m-1 btn-warning"
          >
            Detalles
          </Link>
          <Link
            to={`/usuarios/editar/${obj._id}`}
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

export default UsuariosPage;
