import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");   

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/login", {
                email,
                senha
            });
            setMensagem(response.data.message);
        } catch (error) {
            setMensagem("Erro ao fazer login. Verifique suas credenciais.");
        }
    };
    
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Entrar</button>
            </form>
            <p>{mensagem}</p>
            </div>
    );
}

