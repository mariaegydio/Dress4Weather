import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const resposta = await axios.post("http://localhost:3000/register", {
        nome,
        email,
        senha,
      });
      setMensagem("Cadastro realizado com sucesso!");
      console.log(resposta.data);
    } catch (erro) {
      setMensagem("Erro no cadastro.");
      console.error(erro);
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
      <p>{mensagem}</p>
    </div>
  );
}
