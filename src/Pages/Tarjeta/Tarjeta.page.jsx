import React from "react";
import TecladoComponent from "./../../Shared/Componentes/Teclado/Teclado.component";
import "./Tarjeta.page.scss";

class TarjetaPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Numero: "",
    };
  }

  componentDidMount() {
    this.setState({
      Numero: "",
    });
  }

  handleClickNumero = (valor) => {
    const { Numero } = this.state;

    if (Numero.length < 16) {
      const NumeroNuevo = `${Numero}${valor}`;

      this.setState({
        Numero: NumeroNuevo,
      });
    }
  };

  handleClickBorrar = () => {
    const { Numero } = this.state;
    const NumeroNuevo = Numero.substring(0, Numero.length - 1);

    this.setState({
      Numero: NumeroNuevo,
    });
  };

  MaskString = (str) => {
    let strFinal = str.split("", str.length).reduce((strMask, char) => {
      strMask += char;
      if (strMask.replace("-", "").length % 4 === 0) {
        strMask += "-";
      }
      return strMask;
    }, "");

    return strFinal;
  };

  render() {
    return (
      <>
        <div className="row">
          <div className="col-12">
            <h1 className="text-white text-center mb-4">
              ATM - Banco Personal
            </h1>
            <div className="bg-white border rounded text-center p-2 shadow">
              <h1>
                {this.state.Numero === ""
                  ? "Número de tarjeta"
                  : this.MaskString(this.state.Numero)}
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <TecladoComponent
              clickNumero={this.handleClickNumero}
              clickBorrar={this.handleClickBorrar}
            />
          </div>
        </div>
      </>
    );
  }
}

export default TarjetaPage;
