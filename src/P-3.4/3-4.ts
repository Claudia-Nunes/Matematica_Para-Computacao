// Definindo a estrutura das regras
interface Rule {
    symptoms: string[];
    disease: string;
  }
  
  // Definindo o sistema especialista
  class ExpertSystem {
    private rules: Rule[] = [];
  
    // Adiciona uma regra ao sistema
    addRule(symptoms: string[], disease: string) {
      this.rules.push({ symptoms, disease });
    }
  
    // Verifica se o usuário tem sintomas de alguma doença com base nas regras
    diagnose(symptoms: string[]): string | null {
      for (const rule of this.rules) {
        if (symptoms.every((symptom) => rule.symptoms.includes(symptom)) &&
            rule.symptoms.every((symptom) => symptoms.includes(symptom))) {
          return rule.disease;
        }
      }
      return null;
    }
  }
  
  // Exemplo de uso do sistema especialista
  const expertSystem = new ExpertSystem();
  
  // Configurando regras para a gripe e alergia
  expertSystem.addRule(['febre', 'tosse', 'dor de cabeça'], 'Gripe');
  expertSystem.addRule(['coceira', 'espirros', 'olhos lacrimejantes'], 'Alergia');
  
  // Simulando sintomas do usuário
  const userSymptoms1 = ['febre', 'tosse'];
  const userSymptoms2 = ['coceira', 'espirros', 'olhos lacrimejantes'];
  const userSymptoms3 = ['febre', 'olhos lacrimejantes']; // Sintomas mistos
  
  // Realizando diagnóstico
  const diagnosis1 = expertSystem.diagnose(userSymptoms1);
  const diagnosis2 = expertSystem.diagnose(userSymptoms2);
  const diagnosis3 = expertSystem.diagnose(userSymptoms3);
  
  // Exibindo resultados
  console.log(`Usuário 1: ${diagnosis1 || 'Sem diagnóstico'}`);
  console.log(`Usuário 2: ${diagnosis2 || 'Sem diagnóstico'}`);
  console.log(`Usuário 3: ${diagnosis3 || 'Sem diagnóstico'}`);
  