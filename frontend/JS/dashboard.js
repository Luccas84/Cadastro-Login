function mostrarDashboard(usuario) {
  // Esconder login e cadastro
  document.getElementById("cadastro").style.display = "none";
  document.getElementById("login").style.display = "none";

  // Exibir dashboard
  const dash = document.getElementById("dashboard");
  dash.style.display = "block";

  // Mensagem de boas-vindas
  document.getElementById("bemVindo").innerText = `Bem-vindo, ${usuario.nome}!`;
}

// Função para logout
function logout() {
  // Esconder dashboard
  document.getElementById("dashboard").style.display = "none";

  // Mostrar login e cadastro
  document.getElementById("cadastro").style.display = "block";
  document.getElementById("login").style.display = "block";

  // Limpar mensagens
  document.getElementById("msgLogin").innerText = "";
  document.getElementById("msgCadastro").innerText = "";
}
