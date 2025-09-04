document.addEventListener("DOMContentLoaded", () => {
  const naam = localStorage.getItem("spelerNaam") || "[Teamnaam]";

  // Span bovenaan
  const output = document.getElementById("output");
  if (output) output.textContent = naam;

  // H1 tekst aanpassen
  const titel = document.querySelector(".quiz-title");
  if (titel) titel.innerHTML = `Hallo ${naam}<br>Welke quiz wil je spelen?`;
});
