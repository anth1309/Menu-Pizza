document.addEventListener("DOMContentLoaded", function () {
  let selection = document.querySelectorAll("li");
  let commande = new Map();
  selection.forEach((pizza, i) => {
    commande.set(pizza.dataset.type, 0);
    pizza.querySelector(".plus").addEventListener("click", () => {
      pizza.querySelector(".quantite").innerHTML++;
      pizza.querySelector(".prixLigne").innerHTML =
        pizza.querySelector(".quantite").innerHTML * pizza.dataset.prix + "€";
      document.querySelector(".total").value = Number(pizza.dataset.prix) + "€";
      console.log(document.querySelector(".total").value);
    });
  });
});
//Number(document.querySelector(".total").value.innerHTML) +
