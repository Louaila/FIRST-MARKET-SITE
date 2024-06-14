const data = [
  {
    id: "MXT-001",
    label: "La compil!",
    description: "Le meilleur du son version décodeuses !",
    stock: 24,
    price: 10,
    image: "cassette-tape-mockup.png",
    sale: true,
    discount: 10,
    related: [],
    rating: 4,
  },
  {
    id: "PZA-002",
    label: "Pizza",
    description: "Pour les petits creux des développeuses",
    stock: 1000,
    price: 4.99,
    image: "closed-pizza-box.png",
    sale: false,
    discount: 0,
    related: ["CFE-003", "PLA-010"],
    rating: 3,
  },
  {
    id: "CFE-003",
    label: "Café",
    description: "Morning routine",
    stock: 100,
    price: 12.1,
    image: "coffee-bag-mockup.png",
    sale: true,
    discount: 10,
    related: ["PZA-002", "PLA-010"],
    rating: 5,
  },
  {
    id: "CRM-004",
    label: "Anti-cerne",
    description: "Après une nuit passée à coder...",
    stock: 12,
    price: 54.2,
    image: "cosmetic-jar-mockup.png",
    sale: false,
    related: [],
    rating: 1,
  },
  {
    id: "CQE-005",
    label: "Coque iphone",
    description: "Passez ses appels avec style",
    stock: 300,
    price: 69,
    image: "iphone-14-case-mockup.png",
    sale: false,
    related: [],
    rating: 5,
  },
  {
    id: "LPT-006",
    label: "Laptop",
    description: "L'outil de base",
    stock: 4,
    price: 1990,
    image: "laptop-cover-mockup.png",
    sale: false,
    related: [],
    rating: 3,
  },
  {
    id: "SAC-007",
    label: "Sac de course",
    description: "Parce qu'il n'y a pas que le shopping en ligne",
    stock: 478,
    price: 12.9,
    image: "market-bag-mockup.png",
    sale: false,
    related: [],
    rating: 2,
  },
  {
    id: "PST-008",
    label: "Carte postale",
    description: "Communication analogique du siècle dernier",
    stock: 5820,
    price: 1.8,
    image: "paper-above-envelope-mockup.png",
    sale: false,
    related: [],
    rating: 0,
  },
  {
    id: "AFF-009",
    label: "Affiche encadrée",
    description: "Se taper l'affiche",
    stock: 84,
    price: 44,
    image: "picture-prame-stand-mockup.png",
    sale: true,
    discount: 5,
    related: [],
    rating: 4,
  },
  {
    id: "PLA-010",
    label: "Plat préparé",
    description: "Healthy snack for healthy dev",
    stock: 214,
    price: 12.75,
    image: "plastic-food-container-mockup.png",
    sale: false,
    discount: 0,
    related: ["CFE-003", "PZA-002"],
    rating: 5,
  },
  {
    id: "TSH-011",
    label: "T-shirt",
    description: "Le must-have de l'été",
    stock: 6004,
    price: 24,
    image: "simple-t-shirt-mockup.png",
    sale: true,
    discount: 50,
    related: ["SNK-012"],
    rating: 4,
  },
  {
    id: "SNK-012",
    label: "Sneakers",
    description: "se lever du bon pied",
    stock: 104,
    price: 32,
    image: "sneakers-side-view-mockup.png",
    sale: true,
    discount: 30,
    related: ["TSH-011"],
    rating: 5,
  },
  {
    id: "CLN-013",
    label: "Cleaner",
    description: "Pour un code toujours plus propre",
    stock: 600000,
    price: 5.6,
    image: "window-cleaner-mockup.png",
    sale: false,
    related: [],
    rating: 5,
  },
  {
    id: "CAR-014",
    label: "Carnet de notes",
    description: "Au cas où le formateur dit un truc passionnant",
    stock: 250,
    price: 22,
    image: "wire-bound-notebook-mockup.png",
    sale: false,
    related: [],
    rating: 3,
  },
];

const itemElement = document.getElementById("productContainer");

data.forEach((item) => {
  let template = `
     <div class="col mb-5">
     <div class="card h-100"> 

   `;

  if (item.sale) {
    template += `
      <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
    `;
  }

  template += `
    <img class="card-img-top" src="images/${item.image}" alt="..." />         
     <div class="card-body p-4">
     <div class="text-center">
          <a href="detail.html?id=${item.id}"><h5 class="fw-bolder">${item.label}!</h5>   </a> 
          <div class="d-flex justify-content-center small text-warning mb-2 ">
     
    `;

  for (i = 0; i < item.rating; i++) {
    template += `      
            <div class="bi-star-fill"></div>
        `;
  }

  template += `        
            </div>  
   `;
   if (!item.sale) {
    template += `
                €${item.price}
`;
} else {
    template += `
                    <!-- Product price-->          
            <span class="text-muted text-decoration-line-through">${item.price}</span>
             €${item.price - ( item.price * item.discount / 100)}
        `;
}
   template +=`
        </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center"><a class="btn_add_to-cart btn btn-outline-dark mt-auto" data-product="${item.label}" data-price="${item.price}" href="#">Add to cart</a></div>
    </div>
    </div>

`;
  itemElement.innerHTML += template;
});



