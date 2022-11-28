document.addEventListener("DOMContentLoaded", function () {
  let selection = document.querySelectorAll("li");
  let commande = new Map();

  const boutonPaiement = document.querySelector(".boutonPaiement");

  selection.forEach((pizza, i) => {
    commande.set(pizza.dataset.type, 0);

    pizza.querySelector(".plus").addEventListener("click", () => {
      pizza.querySelector(".quantite").innerHTML++;
      pizza.querySelector(".prixLigne").innerHTML =
        pizza.querySelector(".quantite").innerHTML * pizza.dataset.prix;
      document.querySelector(".total").innerHTML =
        Number(document.querySelector(".total").innerHTML) +
        Number(pizza.dataset.prix);
      if (Number(document.querySelector(".total").innerHTML) > 0) {
        boutonPaiement.classList.add("visible");
        commande.set(
          pizza.dataset.type,
          Number(pizza.querySelector(".quantite").innerHTML)
        );

        affichercommande(commande);
      }
    });

    pizza.querySelector(".moins").addEventListener("click", () => {
      if (pizza.querySelector(".quantite").innerHTML > 0) {
        pizza.querySelector(".quantite").innerHTML--;
        pizza.querySelector(".prixLigne").innerHTML =
          pizza.querySelector(".quantite").innerHTML * pizza.dataset.prix;
        document.querySelector(".total").innerHTML =
          Number(document.querySelector(".total").innerHTML) -
          Number(pizza.dataset.prix);

        if (Number(document.querySelector(".total").innerHTML) == 0) {
          boutonPaiement.classList.remove("visible");
        }
        commande.set(
          pizza.dataset.type,
          Number(pizza.querySelector(".quantite").innerHTML)
        );

        affichercommande(commande);
      }
    });

    function affichercommande(commande) {
      let commandeFinale = "";
      for (var [key, value] of commande) {
        if (value != 0) commandeFinale += `  \n${key} ${value} `;
      }
      document.querySelector("#récapCommande").value = commandeFinale;
    }
  });
});
