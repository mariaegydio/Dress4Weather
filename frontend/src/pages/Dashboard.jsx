import { useState } from "react";

export default function Dashboard() {
  const [clima, setClima] = useState({
    temperatura: 22,
    condicao: "Ensolarado",
    look: "Vestido leve e jaqueta jeans",
  });

  const outrasSugestoes = [
    {
      temperatura: 18,
      condicao: "Nublado",
      look: "Calça jeans e blusa de tricô",
    },
    {
      temperatura: 27,
      condicao: "Sol forte",
      look: "Vestido floral e sandália",
    },
    {
      temperatura: 15,
      condicao: "Chuvoso",
      look: "Casaco impermeável e bota",
    },
  ];

  const verOutraSugestao = () => {
    const nova = outrasSugestoes[Math.floor(Math.random() * outrasSugestoes.length)];
    setClima(nova);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      <p><strong>Temperatura:</strong> {clima.temperatura} °C</p>
      <p><strong>Clima:</strong> {clima.condicao}</p>
      <p><strong>Look sugerido:</strong> {clima.look}</p>

      <button onClick={verOutraSugestao}>Ver outra sugestão</button>
    </div>
  );
}
