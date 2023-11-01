"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Conjunto = /** @class */ (function () {
    function Conjunto() {
        this.elementos = [];
    }
    // Método para inserir um elemento no conjunto
    Conjunto.prototype.inserir = function (elemento) {
        if (!this.pertence(elemento)) {
            this.elementos.push(elemento);
        }
    };
    // Método para verificar se um elemento pertence ao conjunto
    Conjunto.prototype.pertence = function (elemento) {
        return this.elementos.includes(elemento);
    };
    // Método para realizar a união de dois conjuntos
    Conjunto.prototype.uniao = function (outroConjunto) {
        var novoConjunto = new Conjunto();
        this.elementos.forEach(function (elemento) { return novoConjunto.inserir(elemento); });
        outroConjunto.elementos.forEach(function (elemento) { return novoConjunto.inserir(elemento); });
        return novoConjunto;
    };
    // Método para realizar a interseção de dois conjuntos
    Conjunto.prototype.intersecao = function (outroConjunto) {
        var novoConjunto = new Conjunto();
        this.elementos.forEach(function (elemento) {
            if (outroConjunto.pertence(elemento)) {
                novoConjunto.inserir(elemento);
            }
        });
        return novoConjunto;
    };
    return Conjunto;
}());
// Exemplo de uso da classe Conjunto
var conjuntoA = new Conjunto();
conjuntoA.inserir(1);
conjuntoA.inserir(2);
conjuntoA.inserir(3);
var conjuntoB = new Conjunto();
conjuntoB.inserir(2);
conjuntoB.inserir(3);
conjuntoB.inserir(4);
var uniaoAB = conjuntoA.uniao(conjuntoB);
var intersecaoAB = conjuntoA.intersecao(conjuntoB);
console.log("Conjunto A: " + conjuntoA); // Saída: Conjunto A: [1, 2, 3]
console.log("Conjunto B: " + conjuntoB); // Saída: Conjunto B: [2, 3, 4]
console.log("União de A e B: " + uniaoAB); // Saída: União de A e B: [1, 2, 3, 4]
console.log("Interseção de A e B: " + intersecaoAB); // Saída: Interseção de A e B: [2, 3]
