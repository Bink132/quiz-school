document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("naamForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // voorkom standaard versturen

    const naam = document.getElementById("naam").value.trim();

    if (naam) {
      // Sla de naam op in localStorage
      localStorage.setItem("spelerNaam", naam);

      // Ga door naar themascherm.html
      window.location.href = "themascherm.html";
    } else {
      alert("Vul je naam in voordat je verder gaat!");
    }
  });
});


