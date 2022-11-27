document.addEventListener("DOMContentLoaded", function () {
  let selection = document.querySelectorAll("li");
  let commande = new Map();
  selection.forEach((pizza, i) => {
    commande.set(pizza.dataset.type, 0);

    pizza.querySelector(".plus").addEventListener("click", () => {
      pizza.querySelector(".quantite").innerHTML++;
      pizza.querySelector(".prixLigne").innerHTML =
        pizza.querySelector(".quantite").innerHTML * pizza.dataset.prix;
      document.querySelector(".total").innerHTML =
        Number(document.querySelector(".total").innerHTML) +
        Number(pizza.dataset.prix);
    });

    pizza.querySelector(".moins").addEventListener("click", () => {
      if (pizza.querySelector(".quantite").innerHTML > 0) {
        pizza.querySelector(".quantite").innerHTML--;
        pizza.querySelector(".prixLigne").innerHTML =
          pizza.querySelector(".quantite").innerHTML * pizza.dataset.prix;
        document.querySelector(".total").innerHTML =
          Number(document.querySelector(".total").innerHTML) -
          Number(pizza.dataset.prix);
      }
    });
  });
});
//Number(document.querySelector(".total").value.innerHTML) +
