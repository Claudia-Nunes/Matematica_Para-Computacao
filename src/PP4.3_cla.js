// Definição da tabela de usuários
var usuarios = [
    { Nome: "fabrício", Telefone: 111 },
    { Nome: "beatriz", Telefone: 222 },
    { Nome: "fabíola", Telefone: 333 },
];
// Consulta para obter todos os registros
function consultaTodosUsuarios() {
    return usuarios;
}
// Consulta para obter um registro específico (por exemplo, "beatriz")
function consultaUsuarioPorNome(nome) {
    var resultado = usuarios.find(function (usuario) { return usuario.Nome === nome; });
    return resultado || null;
}
// Consulta para obter dois registros (por exemplo, "fabrício" e "fabíola")
function consultaUsuariosPorNomes(nomes) {
    var resultado = usuarios.filter(function (usuario) { return nomes.includes(usuario.Nome); });
    return resultado;
}
// Exemplo de uso das consultas
console.log("Todos os usuários:");
console.log(consultaTodosUsuarios());
console.log("\nUsuário específico (beatriz):");
console.log(consultaUsuarioPorNome("beatriz"));
console.log("\nDois usuários (fabrício e fabíola):");
console.log(consultaUsuariosPorNomes(["fabrício", "fabíola"]));
