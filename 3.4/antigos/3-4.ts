class SistemaEspecialista {
    private baseDeRegras: { [doenca: string]: string[] } = {};

    adicionarRegra(doenca: string, sintomas: string[]) {
        this.baseDeRegras[doenca] = sintomas;
    }

    fazerDiagnostico(sintomasUsuario: string[]): string {
        for (const doenca in this.baseDeRegras) {
            if (
                sintomasUsuario.every((sintoma) =>
                    this.baseDeRegras[doenca].includes(sintoma)
                )
            ) {
                return `O usuário pode estar com ${doenca}.`;
            }
        }
        return 'Não foi possível fazer um diagnóstico.';
    }
}

// Criando uma instância do sistema especialista
const sistema = new SistemaEspecialista();

// Adicionando regras para doenças
sistema.adicionarRegra('Gripe', ['Febre', 'Dor de garganta', 'Tosse']);
sistema.adicionarRegra('Diabetes', ['Sede excessiva', 'Fome excessiva', 'Urinar frequentemente']);

// Sintomas informados pelo usuário
const sintomasUsuario = ['Febre', 'Tosse', 'Dor de garganta'];

// Fazendo o diagnóstico
const resultado = sistema.fazerDiagnostico(sintomasUsuario);

console.log(resultado);
