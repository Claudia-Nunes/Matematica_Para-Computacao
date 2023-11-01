// Importe o tipo SetModel do arquivo set_model.ts
import { SetModel } from "./SetModel";

class Conjunto<T> implements SetModel<T> {
  private elementos: T[] = [];

  // Método para inserir um elemento no conjunto
  inserir(elemento: T): void {
    if (!this.pertence(elemento)) {
      this.elementos.push(elemento);
    }
  }

  // Método para verificar se um elemento pertence ao conjunto
  pertence(elemento: T): boolean {
    return this.elementos.includes(elemento);
  }

  // Método para realizar a união de dois conjuntos
  uniao(outroConjunto: Conjunto<T>): Conjunto<T> {
    const novoConjunto = new Conjunto<T>();
    this.elementos.forEach((elemento) => novoConjunto.inserir(elemento));
    outroConjunto.elementos.forEach((elemento) => novoConjunto.inserir(elemento));
    return novoConjunto;
  }

  // Método para realizar a interseção de dois conjuntos
  intersecao(outroConjunto: Conjunto<T>): Conjunto<T> {
    const novoConjunto = new Conjunto<T>();
    this.elementos.forEach((elemento) => {
      if (outroConjunto.pertence(elemento)) {
        novoConjunto.inserir(elemento);
      }
    });
    return novoConjunto;
  }
}

// Exemplo de uso da classe Conjunto
const conjuntoA = new Conjunto<number>();
conjuntoA.inserir(1);
conjuntoA.inserir(2);
conjuntoA.inserir(3);

const conjuntoB = new Conjunto<number>();
conjuntoB.inserir(2);
conjuntoB.inserir(3);
conjuntoB.inserir(4);

const uniaoAB = conjuntoA.uniao(conjuntoB);
const intersecaoAB = conjuntoA.intersecao(conjuntoB);

console.log("Conjunto A: " + conjuntoA); // Saída: Conjunto A: [1, 2, 3]
console.log("Conjunto B: " + conjuntoB); // Saída: Conjunto B: [2, 3, 4]
console.log("União de A e B: " + uniaoAB); // Saída: União de A e B: [1, 2, 3, 4]
console.log("Interseção de A e B: " + intersecaoAB); // Saída: Interseção de A e B: [2, 3]
