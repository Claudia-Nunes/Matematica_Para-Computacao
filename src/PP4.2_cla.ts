// Definição da tabela de usuários
const usuarios: { Nome: string, Telefone: number }[] = [
  { Nome: "fabrício", Telefone: 111 },
  { Nome: "beatriz", Telefone: 222 },
  { Nome: "fabíola", Telefone: 333 },
];

// Consulta para obter todos os registros
function consultaTodosUsuarios(): { Nome: string, Telefone: number }[] {
  return usuarios;
}

// Consulta para obter um registro específico (por exemplo, "beatriz")
function consultaUsuarioPorNome(nome: string): { Nome: string, Telefone: number } | null {
  const resultado = usuarios.find(usuario => usuario.Nome === nome);
  return resultado || null;
}

// Consulta para obter dois registros (por exemplo, "fabrício" e "fabíola")
function consultaUsuariosPorNomes(nomes: string[]): { Nome: string, Telefone: number }[] {
  const resultado = usuarios.filter(usuario => nomes.includes(usuario.Nome));
  return resultado;
}

// Exemplo de uso das consultas
console.log("Todos os usuários:");
console.log(consultaTodosUsuarios());

console.log("\nUsuário específico (beatriz):");
console.log(consultaUsuarioPorNome("beatriz"));

console.log("\nDois usuários (fabrício e fabíola):");
console.log(consultaUsuariosPorNomes(["fabrício", "fabíola"]));
