import { VeiculoEletricoVoador } from "./VeiculoEletricoVoador";

const veiculoVoador = new VeiculoEletricoVoador(0, 0, 100);
veiculoVoador.mover(10, 20);
veiculoVoador.carregarBateria(80);
veiculoVoador.mudarAltitude(50);

console.log("Coordenadas:", veiculoVoador);
console.log("Bateria:", veiculoVoador);
console.log("Altitude:", veiculoVoador);
