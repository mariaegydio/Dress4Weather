// js/script.js
document.getElementById("weatherForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const temp = parseFloat(document.getElementById("temperature").value);
  const rain = document.getElementById("rain").value;
  const wind = document.getElementById("wind").value;
  const suggestion = document.getElementById("suggestion");

  let roupa = "";

  if (temp < 10) {
    roupa = "Use um casaco pesado, cachecol e calça.";
  } else if (temp < 20) {
    roupa = "Use uma jaqueta leve e calça.";
  } else if (temp < 30) {
    roupa = "Use camiseta e bermuda.";
  } else {
    roupa = "Use roupas leves, como regata e shorts.";
  }

  if (rain === "sim") {
    roupa += " Leve um guarda-chuva ou capa de chuva.";
  }

  if (wind === "sim") {
    roupa += " Proteja-se com um corta-vento.";
  }

  suggestion.textContent = roupa;
});
