// Validação do cadastro
function validarCadastro(nome, email, senha) {
  if (!nome || !email || !senha) {
    alert("Todos os campos são obrigatórios!");
    return false;
  }

  // Regex simples de email
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    alert("Email inválido!");
    return false;
  }

  if (senha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres!");
    return false;
  }

  return true;
}

// Validação do login
function validarLogin(email, senha) {
  if (!email || !senha) {
    alert("Email e senha são obrigatórios!");
    return false;
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    alert("Email inválido!");
    return false;
  }

  return true;
}
