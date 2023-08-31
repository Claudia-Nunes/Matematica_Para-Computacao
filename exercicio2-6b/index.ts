enum DiaDaSemanas {
    Domingo = 1,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
  }
  
  const diaatual: DiaDaSemanas = DiaDaSemanas.Quarta;
  console.log(`Estamos no dia da Semana:  ${diaatual}-${DiaDaSemanas[diaatual]}-feira`);
  