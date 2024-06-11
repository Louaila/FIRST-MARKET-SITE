/*!
 * Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

//incrementer le bouton//

let nb_items = 0;
let cart = [];

const boutons = document.getElementsByClassName("btn_add_to-cart");
const displayNbOfItems = document.getElementById("cart-nb-items");
const total = document.getElementById("totalPrice");

// interation utilisateur //

for (let i = 0; i < boutons.length; i++) {
  const bouton = boutons[i];
  bouton.addEventListener("click", add);
}

// mis à jour de l'affichage

function displayMyCart() {
  document.getElementById("myList").innerHTML = "";
  let totalPrice = 0;

  cart.forEach((item) => {
    const productLi = document.createElement("li");
    const productLiText = document.createTextNode(item.name + " ");
    const liTotalPrice = item.price * item.quantity;
    const productLiPriceText = document.createTextNode(
      liTotalPrice.toFixed(2) + " "
    );
    const productLiquantityText = document.createTextNode(item.quantity);

    productLi.appendChild(productLiText);
    productLi.appendChild(productLiPriceText);
    productLi.appendChild(productLiquantityText);
    document.getElementById("myList").appendChild(productLi);

    productLi.appendChild(productLiText);
    document.getElementById("myList").appendChild(productLi);
    totalPrice += item.price * item.quantity;
  });

  document.getElementById("cart-nb-items").innerHTML = cart.length;

  const litotal = document.createElement("li");
  const litotaltext = document.createTextNode(
    "Total: " + totalPrice.toFixed(2) + " €"
  );
  litotal.appendChild(litotaltext);
  document.getElementById("myList").appendChild(litotal);
}

//  mise à jour du stockage

function add(event) {
  const originButton = event.target;
  const productLabel = originButton.dataset.product;
  const productPrice = parseFloat(originButton.dataset.price);

  const existingProduct = cart.find((item) => item.name === productLabel);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    const product = {
      name: productLabel,
      price: productPrice,
      quantity: 1,
    };

    cart.push(product);
  }
  displayMyCart();
}
