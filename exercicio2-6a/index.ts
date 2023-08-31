enum MesesDoAno {
    Janeiro = 1,
    Fevereiro = 2,
    Março = 3,
    Abril = 4,
    Maio = 5,
    Junho,
    Julho,
    Agosto = 8,
    Setembro,
    Outubro,
    Novembro,
    Dezembro,
}
const mesAtual: MesesDoAno = MesesDoAno.Agosto;
console.log(`Estamos no mês:  ${mesAtual}-${MesesDoAno[mesAtual]}`);
