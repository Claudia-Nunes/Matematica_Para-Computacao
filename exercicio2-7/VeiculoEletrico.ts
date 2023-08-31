import { Veiculo } from "./Veiculo";

class VeiculoEletrico extends Veiculo {
  private bateria: number;

  constructor(longitude: number, latitude: number, capacidadeBateria: number) {
    super(longitude, latitude);
    this.bateria = capacidadeBateria;
  }

  carregarBateria(novoNivel: number) {
    this.bateria = novoNivel;
  }
}

export{Veiculo,VeiculoEletrico,}