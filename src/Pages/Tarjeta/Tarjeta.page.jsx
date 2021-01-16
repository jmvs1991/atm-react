import React from "react";
import { connect } from "react-redux";
import TecladoComponent from "./../../Shared/Componentes/Teclado/Teclado.component";
import * as TarjetaActions from "./../../Core/Actions/Tarjeta.actions";
import "./Tarjeta.page.scss";

class TarjetaPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Numero: "",
      NumeroMask: "",
    };
  }

  componentDidMount() {
    this.setState({
      Numero: "",
      NumeroMask: "",
    });
  }

  handleClickNumero = async (valor) => {
    const { Numero } = this.state;

    if (Numero.length < 16) {
      const NumeroNuevo = `${Numero}${valor}`;

      await this.setState({
        Numero: NumeroNuevo,
      });
      this.MaskString();
    }
  };

  handleClickBorrar = async () => {
    const { Numero } = this.state;
    const NumeroNuevo = Numero.substring(0, Numero.length - 1);

    await this.setState({
      Numero: NumeroNuevo,
    });

    this.MaskString();
  };

  handleClickAceptar = async () => {
    const { validarNumeroTarjeta } = this.props;
    const { Numero } = this.state;

    await validarNumeroTarjeta(Numero);
  }

  MaskString = () => {
    const { Numero } = this.state;
    let strPartes = ["", "", "", ""];

    let contador = 0;
    let parte = 0;

    Numero.split("").forEach((char, index) => {
      contador++;
      if (contador === 4 || Numero.length - 1 === index) {
        let strP = strPartes[parte];
        strP += char.toString();
        strPartes[parte] = strP.toString();
        contador = 0;
        parte++;
      }
    });

    const numeroMask = `${strPartes[0] || ""} - ${strPartes[1] || ""} - ${
      strPartes[2] || ""
    } - ${strPartes[3] || ""}`;

    this.setState({
      NumeroMask: numeroMask,
    });
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
                  : this.state.Numero}
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <TecladoComponent
              clickNumero={this.handleClickNumero}
              clickBorrar={this.handleClickBorrar}
              clickAceptar={this.handleClickAceptar}
            />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ TarjetaReducer }) => {
  return {
    TarjetaReducer,
  };
};

const mapDispatchToProps = { ...TarjetaActions };

export default connect(mapStateToProps, mapDispatchToProps)(TarjetaPage);
