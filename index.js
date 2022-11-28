document.addEventListener("DOMContentLoaded", function () {
  let selection = document.querySelectorAll("li");
  let commande = new Map();

  const boutonPaiement = document.querySelector(".boutonPaiement");

  selection.forEach((pizza, i) => {
    commande.set(pizza.dataset.type, 0);
    console.log(commande);

    pizza.querySelector(".plus").addEventListener("click", () => {
      pizza.querySelector(".quantite").innerHTML++;
      pizza.querySelector(".prixLigne").innerHTML =
        pizza.querySelector(".quantite").innerHTML * pizza.dataset.prix;
      document.querySelector(".total").innerHTML =
        Number(document.querySelector(".total").innerHTML) +
        Number(pizza.dataset.prix);

      boutonPaiement.classList.add("visible");
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
