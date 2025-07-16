export default function History() {
  const historicoFake = [
    {
      data: "15/07/2025",
      temperatura: 19,
      condicao: "Nublado",
      look: "Calça jeans e blusa de tricô",
    },
    {
      data: "14/07/2025",
      temperatura: 27,
      condicao: "Ensolarado",
      look: "Vestido floral e sandália",
    },
    {
      data: "13/07/2025",
      temperatura: 16,
      condicao: "Chuvoso",
      look: "Casaco impermeável e bota",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Histórico de Looks</h2>
      {historicoFake.map((item, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <p><strong>📅 Data:</strong> {item.data}</p>
          <p><strong>🌡️ Temperatura:</strong> {item.temperatura} °C</p>
          <p><strong>🌥️ Clima:</strong> {item.condicao}</p>
          <p><strong>👗 Look:</strong> {item.look}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
