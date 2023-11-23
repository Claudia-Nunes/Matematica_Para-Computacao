// Definindo o sistema especialista
var ExpertSystem = /** @class */ (function () {
    function ExpertSystem() {
        this.rules = [];
    }
    // Adiciona uma regra ao sistema
    ExpertSystem.prototype.addRule = function (symptoms, disease) {
        this.rules.push({ symptoms: symptoms, disease: disease });
    };
    // Verifica se o usuário tem sintomas de alguma doença com base nas regras
    ExpertSystem.prototype.diagnose = function (symptoms) {
        var _loop_1 = function (rule) {
            if (symptoms.every(function (symptom) { return rule.symptoms.includes(symptom); }) &&
                rule.symptoms.every(function (symptom) { return symptoms.includes(symptom); })) {
                return { value: rule.disease };
            }
        };
        for (var _i = 0, _a = this.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            var state_1 = _loop_1(rule);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return null;
    };
    return ExpertSystem;
}());
// Exemplo de uso do sistema especialista
var expertSystem = new ExpertSystem();
// Configurando regras para a gripe e alergia
expertSystem.addRule(['febre', 'tosse', 'dor de cabeça'], 'Gripe');
expertSystem.addRule(['coceira', 'espirros', 'olhos lacrimejantes'], 'Alergia');
// Simulando sintomas do usuário
var userSymptoms1 = ['febre', 'tosse'];
var userSymptoms2 = ['coceira', 'espirros', 'olhos lacrimejantes'];
var userSymptoms3 = ['febre', 'olhos lacrimejantes']; // Sintomas mistos
// Realizando diagnóstico
var diagnosis1 = expertSystem.diagnose(userSymptoms1);
var diagnosis2 = expertSystem.diagnose(userSymptoms2);
var diagnosis3 = expertSystem.diagnose(userSymptoms3);
// Exibindo resultados
console.log("Usu\u00E1rio 1: ".concat(diagnosis1 || 'Sem diagnóstico'));
console.log("Usu\u00E1rio 2: ".concat(diagnosis2 || 'Sem diagnóstico'));
console.log("Usu\u00E1rio 3: ".concat(diagnosis3 || 'Sem diagnóstico'));
