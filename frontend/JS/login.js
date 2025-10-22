async function login() {
  const email = document.getElementById("emailLogin").value;
  const senha = document.getElementById("senhaLogin").value;
  const msg = document.getElementById("msgLogin");

  // Validar inputs
  if (!validarLogin(email, senha)) return;

  try {
    const res = await fetch(`${url}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });
    const data = await res.json();

    if (res.ok) {
      msg.style.color = "green";
      msg.innerText = data.mensagem;

      // Chamar dashboard
      mostrarDashboard({ nome: email.split("@")[0] }); // exemplo simples
    } else {
      msg.style.color = "red";
      msg.innerText = data.erro;
    }
  } catch (err) {
    msg.style.color = "red";
    msg.innerText = "Erro de conexão!";
  }
}
