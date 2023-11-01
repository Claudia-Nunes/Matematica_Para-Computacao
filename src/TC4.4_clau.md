## Cardinalidade de Tabelas e Conjuntos de Resultados ex4.4 Claudia Nunes

### Cardinalidade de uma Tabela no Banco de Dados

Uma tabela em um banco de dados relacional, na qual todas as combinações de valores nas colunas são únicas, pode ser considerada como um conjunto. Nesse caso, a cardinalidade desse conjunto é igual ao número de linhas (tuplas) na tabela.

Se tivermos uma tabela com "n" linhas, a cardinalidade desse conjunto é igual a "n".

### Cardinalidade do Conjunto de Resultados de Consultas

A cardinalidade do conjunto de resultados de todas as consultas possíveis depende das consultas específicas formuladas. Se estamos considerando consultas que podem retornar um subconjunto das linhas da tabela original, a cardinalidade do conjunto de resultados será variável e dependente das consultas.

Exemplo numérico simples usando uma tabela com 4 tuplas (linhas):

#### Exemplo Numérico

Considere a seguinte tabela com 4 tuplas:

| ID  | Nome    | Idade | Cidade    |
| --- | ------- | ----- | --------- |
| 1   | Alice   | 25    | New York  |
| 2   | Bob     | 30    | Los Angeles |
| 3   | Carol   | 28    | Chicago   |
| 4   | David   | 35    | San Francisco |

Neste exemplo, a cardinalidade do conjunto representado pela tabela é 4, pois há 4 linhas.

Agora, se consultarmos executar consultas, a cardinalidade dos conjuntos de resultados dependerá do que estamos consultando. Por exemplo:

- Se consultarmos todos os registros de pessoas com idade acima de 30, a cardinalidade do conjunto de resultados será menor ou igual a 4, dependendo de quantas linhas atendem ao critério.
- Se consultar todos os registros de pessoas que vivem em "New York," a cardinalidade do conjunto de resultados pode ser menor ou igual a 1, dependendo de quantas pessoas se encaixam nesse critério.

Em resumo, a cardinalidade do conjunto de resultados de consultas em um banco de dados pode variar dependendo das condições especificadas nas consultas, enquanto a cardinalidade do conjunto representado pela tabela é o número de linhas na tabela.