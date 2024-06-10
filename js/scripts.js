/*!
 * Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

//incrementer le bouton//
let nb_items = 0;
const boutons = document.getElementsByClassName("btn_add_to-cart");
const displayNbOfItems = document.getElementById("cart-nb-items");

for (let i = 0; i < boutons.length; i++) {
  const bouton = boutons[i];
  bouton.addEventListener("click", add);
}

function add(event) {

  const originButton = event.target;
  const productLabel = originButton.dataset.product;

  // on met a jour le nom d'élément dans le panier//
  nb_items++;
  displayNbOfItems.innerHTML = nb_items;

  //ajouter un produit à la liste //
  const node = document.createElement("li");
  // node = <li>myList</li>
  const textnode = document.createTextNode(productLabel);
  node.appendChild(textnode);

  document.getElementById("myList").appendChild(node);

  const dropdownList = document.getElementById("myList");
  const existingItem = dropdownList.querySelector("#firstLiDropdown");
  if (existingItem) {
      dropdownList.removeChild(existingItem);
  }
}
