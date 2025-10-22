const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const caminhoUsuarios = path.join(__dirname, "data", "usuarios.json");

function lerUsuarios() {
  return JSON.parse(fs.readFileSync(caminhoUsuarios, "utf-8"));
}

function salvarUsuarios(usuarios) {
  fs.writeFileSync(caminhoUsuarios, JSON.stringify(usuarios, null, 2));
}

// Cadastro
app.post("/usuarios/cadastrar", (req, res) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha)
    return res.status(400).json({ erro: "Todos os campos são obrigatórios" });

  const usuarios = lerUsuarios();
  if (usuarios.find((u) => u.email === email))
    return res.status(400).json({ erro: "Email já cadastrado" });

  const novoUsuario = { id: Date.now().toString(), nome, email, senha };
  usuarios.push(novoUsuario);
  salvarUsuarios(usuarios);

  res.json({ mensagem: "Cadastro realizado com sucesso!" });
});

// Login
app.post("/usuarios/login", (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha)
    return res.status(400).json({ erro: "Email e senha são obrigatórios" });

  const usuarios = lerUsuarios();
  const usuario = usuarios.find((u) => u.email === email && u.senha === senha);
  if (!usuario)
    return res.status(400).json({ erro: "Email ou senha inválidos" });

  res.json({ mensagem: `Login bem-sucedido! Bem-vindo ${usuario.nome}` });
});

// Listar usuários (opcional)
app.get("/usuarios", (req, res) => {
  const usuarios = lerUsuarios();
  res.json(usuarios.map((u) => ({ id: u.id, nome: u.nome, email: u.email })));
});

app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);
