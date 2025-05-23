document.getElementById("weatherForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const temp = parseFloat(document.getElementById("temperature").value);
  const rain = document.getElementById("rain").value;
  const wind = document.getElementById("wind").value;
  const suggestion = document.getElementById("suggestion");
  const suggestionList = document.getElementById("suggestion-list");

  suggestionList.innerHTML = "";
  
  let suggestions = [];

  if (temp < 0) {
    suggestions.push("❄️ Casaco térmico e roupa de frio intenso");
    suggestions.push("🧤 Luvas e gorros de lã");
    suggestions.push("🧦 Meias grossas e botas impermeáveis");
  } else if (temp < 10) {
    suggestions.push("🧥 Casaco pesado");
    suggestions.push("🧣 Cachecol e gorro");
    suggestions.push("👖 Calça jeans ou de tecido grosso");
  } else if (temp < 20) {
    suggestions.push("🧥 Jaqueta leve ou moletom");
    suggestions.push("👕 Camisa de manga longa");
    suggestions.push("👖 Calça comum");
  } else if (temp < 30) {
    suggestions.push("👕 Camiseta");
    suggestions.push("🩳 Bermuda ou saia");
    suggestions.push("🧢 Boné ou chapéu para o sol");
  } else {
    suggestions.push("👚 Roupas leves e folgadas");
    suggestions.push("🧴 Protetor solar");
    suggestions.push("💧 Mantenha-se hidratado");
  }

  if (rain === "sim") {
    suggestions.push("☔ Guarda-chuva ou capa de chuva");
    suggestions.push("👟 Calçados impermeáveis");
  }

  if (wind === "sim") {
    suggestions.push("🧥 Corta-vento ou jaqueta impermeável");
    suggestions.push("🧣 Evite acessórios que possam voar");
  }

  if ((temp < 5 && rain === "sim") || (temp < 5 && wind === "sim")) {
    suggestions.push("⚠️ Tome cuidado com hipotermia");
  }

  suggestions.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    suggestionList.appendChild(li);
  });

  suggestion.classList.remove("hidden");
});