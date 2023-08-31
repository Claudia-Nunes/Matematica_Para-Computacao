import { VeiculoEletrico } from "./VeiculoEletrico";

class VeiculoEletricoVoador extends VeiculoEletrico {
  private altitude: number;

  constructor(longitude: number, latitude: number, capacidadeBateria: number) {
    super(longitude, latitude, capacidadeBateria);
    this.altitude = 0;
  }

  mudarAltitude(novaAltitude: number) {
    this.altitude = novaAltitude;
  }
}

export{VeiculoEletricoVoador}