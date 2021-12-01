import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function FacturaOrdenPage() {
  let { id: ordenId } = useParams();

  const [detalles, setDetalles] = useState({ usuario: {}, destino: {} });
  const [precioPorKm, setPrecioPorKm] = useState(0);

  useEffect(() => {
    getDetalles();
    getPrecioKm();
  }, []);

  const imprimir = () => {
    window.print();
  };

  const getPrecioKm = async () => {
    let res = await axios.get(
      `${process.env.REACT_APP_MINTIC_API_URL}/config/precio_km`
    );
    setPrecioPorKm(res.data.data.valor);
  };

  const getDetalles = async () => {
    let res = await axios.get(
      `${process.env.REACT_APP_MINTIC_API_URL}/ordenes/${ordenId}`
    );
    setDetalles(res.data.data);
  };

  return (
    <div className="m-2">
      <div className="row d-flex">
        <div className="" style={{ maxWidth: "950px" }}>
          <div className="card">
            <div className="d-flex flex-row p-2">
              {/* <img src="https://i.imgur.com/vzlPPh3.png" width="48" /> */}
              <i className="fas fa-3x fa-file-invoice-dollar me-3"></i>
              <div className="d-flex flex-column">
                <span className="font-weight-bold">
                  <b>Factura</b>
                </span>
                <small>{detalles._id}</small>
              </div>
            </div>
            <hr />
            <div className="table-responsive p-2">
              <table className="table table-borderless">
                <tbody>
                  <tr className="add">
                    <td>
                      <b>Facturado a:</b>
                    </td>
                    <td>
                      <b>Facturado por:</b>
                    </td>
                  </tr>
                  <tr className="content">
                    <td className="font-weight-bold">
                      {detalles.usuario.nombres} {detalles.usuario.apellidos}
                    </td>
                    <td className="font-weight-bold">MinTic App - Grupo 3</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
            <div className="products p-2">
              <table className="table table-borderless">
                <tbody>
                  <tr className="add">
                    <td>
                      <b>Descripcion</b>
                    </td>
                    <td className="text-center">
                      <b>Distancia (km)</b>
                    </td>
                    <td className="text-center">
                      <b>Precio Und. (Km)</b>
                    </td>
                    <td className="text-center">
                      <b>Subtotal</b>
                    </td>
                  </tr>
                  <tr className="content">
                    <td style={{ maxWidth: "200px" }}>
                      {detalles.descripcion} sadfasdf asdf asdfas fasdf asdf
                      asdf asf asdfasdfasfasfd asf asfa dsfdf sa fasdf asdf
                      asddfasdfas asadf asdf
                    </td>
                    <td className="text-center">
                      {detalles.destino.distancia_km}
                    </td>
                    <td className="text-center">${precioPorKm}</td>
                    <td className="text-center">
                      ${detalles.destino.distancia_km * precioPorKm}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
            <div className="products p-2">
              <table className="table table-borderless">
                <tbody>
                  <tr className="add">
                    <td></td>
                    <td className="text-center">
                      <b>Subtotal</b>
                    </td>
                    <td className="text-center">
                      <b>Iva (19%)</b>
                    </td>
                    <td className="text-center">
                      <b>Total</b>
                    </td>
                  </tr>
                  <tr className="content">
                    <td></td>
                    <td>${detalles.destino.distancia_km * precioPorKm}</td>
                    <td>
                      ${detalles.destino.distancia_km * precioPorKm * 0.19}
                    </td>
                    <td className="text-center">
                      <b>
                        $
                        {detalles.destino.distancia_km * precioPorKm +
                          detalles.destino.distancia_km * precioPorKm * 0.19}
                      </b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
            <div className="address p-2">
              <table className="table table-borderless">
                <tbody>
                  <tr className="add">
                    <td>
                      <b>Consignar en:</b>
                    </td>
                  </tr>
                  <tr className="content">
                    <td>
                      Banco: Banco Nacional de desarrolladores
                      <br />
                      Numero de cuenta: 123456789 <br />
                      A nombre de: Pepito Desarrollado <br />
                      Tipo de cuenta: Pruebas <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-2 d-print-none">
        <div
          className="d-flex justify-content-center"
          style={{ maxWidth: "950px" }}
        >
          <Link to="/ordenes" className="btn btn-danger mx-2">
            Volver
          </Link>
          <button onClick={imprimir} className="btn btn-primary mx-2">
            Imprimir
          </button>
        </div>
      </div>
    </div>
  );
}

export default FacturaOrdenPage;
