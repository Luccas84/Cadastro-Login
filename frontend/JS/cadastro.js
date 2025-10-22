const url = "http://localhost:3000/usuarios";

// Função para cadastrar usuário
async function cadastrar() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("emailCadastro").value;
  const senha = document.getElementById("senhaCadastro").value;
  const msg = document.getElementById("msgCadastro");

  // Validar inputs
  if (!validarCadastro(nome, email, senha)) return;

  try {
    const res = await fetch(`${url}/cadastrar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, senha }),
    });
    const data = await res.json();

    if (res.ok) {
      msg.style.color = "green";
      msg.innerText = data.mensagem;
      // Limpar campos
      document.getElementById("nome").value = "";
      document.getElementById("emailCadastro").value = "";
      document.getElementById("senhaCadastro").value = "";
    } else {
      msg.style.color = "red";
      msg.innerText = data.erro;
    }
  } catch (err) {
    msg.style.color = "red";
    msg.innerText = "Erro de conexão!";
  }
}
