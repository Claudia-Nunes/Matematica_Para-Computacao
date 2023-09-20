var SistemaEspecialista = /** @class */ (function () {
    function SistemaEspecialista() {
        this.baseDeRegras = {};
    }
    SistemaEspecialista.prototype.adicionarRegra = function (doenca, sintomas) {
        this.baseDeRegras[doenca] = sintomas;
    };
    SistemaEspecialista.prototype.fazerDiagnostico = function (sintomasUsuario) {
        var _this = this;
        var _loop_1 = function (doenca) {
            if (sintomasUsuario.every(function (sintoma) {
                return _this.baseDeRegras[doenca].includes(sintoma);
            })) {
                return { value: "O usu\u00E1rio pode estar com ".concat(doenca, ".") };
            }
        };
        for (var doenca in this.baseDeRegras) {
            var state_1 = _loop_1(doenca);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return 'Não foi possível fazer um diagnóstico.';
    };
    return SistemaEspecialista;
}());
// Criando uma instância do sistema especialista
var sistema = new SistemaEspecialista();
// Adicionando regras para doenças
sistema.adicionarRegra('Gripe', ['Febre', 'Dor de garganta', 'Tosse']);
sistema.adicionarRegra('Diabetes', ['Sede excessiva', 'Fome excessiva', 'Urinar frequentemente']);
// Sintomas informados pelo usuário
var sintomasUsuario = ['Febre', 'Tosse', 'Dor de garganta'];
// Fazendo o diagnóstico
var resultado = sistema.fazerDiagnostico(sintomasUsuario);
console.log(resultado);
