## Problemas e Tipos Numéricos Adequados ex.4.2 Claudia Nunes

### a) Contagem do número de linhas de um arquivo de log:
Para a contagem do número de linhas em um arquivo de log, o tipo numérico mais adequado é o `number` (número), que pode representar valores inteiros.

Exemplo em TypeScript:
```typescript
const numLinhas: number = 1000;  // Um exemplo de contagem de linhas em um arquivo de log.
```

### b) Definição do preço, incluindo centavos, de mercadorias de uma loja:
Para representar preços que incluem centavos, é apropriado utilizar o tipo numérico `number`, que pode representar valores decimais.

Exemplo em TypeScript:
```typescript
const precoProduto: number = 19.99;  // Um exemplo de preço com centavos em dólares.
```

### c) Processamento de sinais de voz ou de comunicação em um sistema de engenharia de telecomunicações:
Para o processamento de sinais de voz ou comunicação em sistemas de engenharia de telecomunicações, geralmente, são usados tipos numéricos `number` ou `complex` (números complexos) para representar dados que envolvem valores analógicos ou complexos, como ondas de áudio e sinais de telecomunicações.

Exemplo em TypeScript:
```typescript
const amostraAudio: number = 0.12345;  // Um exemplo de valor de amostra de áudio em ponto flutuante.
```

### d) Marcação de temperaturas, em graus Celsius, sem considerar frações de graus, em lugares de elevada variação de temperatura entre as estações do ano:
Para marcar temperaturas em graus Celsius sem considerar frações, é apropriado usar o tipo numérico `number`, que pode representar valores inteiros.

Exemplo em TypeScript:
```typescript
const temperatura: number = 25;  // Um exemplo de temperatura em graus Celsius.
```