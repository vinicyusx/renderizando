import React, { Component } from "react";
import img from "./img/caqui.jpeg";

class State extends Component {
  state = {
    nome: "Vinicyus",
    idade: 21,
    comida: "Lasanha",
    musicas: ["Dançarina", "Vermelho", "212"]
  };
  render() {
    return (
      <div>
        <h1>Nome:{this.state.nome}</h1>
        <h2>Idade: {this.state.idade}</h2>
        <h3>Comida Favorita: {this.state.comida}</h3>
        <ul>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ul>
        <img src={img} alt="caqui" />
      </div>
    );
  }
}

export default State;
