// Catalogo
const vinylRecords = [
  {
    artist: "Queen",
    album: "A Night At The Opera",
    genre: "Pop/Rock",
    release: 1975,
    tracks: [
      "Death On Two Legs (Dedicated To)",
      "Lazing on a Sunday Afternoon",
      "I'm in Love with My Car",
      "Your My Best Friend",
      "'39",
    ],
    coverImage: "A Night At The Opera.jpg",
    price: 45,
    stock: 1,
  },
  {
    artist: "Stevie Wonder",
    album: "Songs in the Key of Life",
    genre: "R&B",
    release: 1976,
    tracks: [
      "Love's in Need of Love Today",
      "Isn't She Lovely",
      "Ebony Eyes",
      "As",
      "All Day Sucker",
    ],
    coverImage: "Songs in the Key of Life.jpg",
    price: 32,
    stock: 6,
  },
  {
    artist: "Journey",
    album: "Escape",
    genre: "Pop/Rock",
    release: 1981,
    tracks: [
      "Don't Stop Believing",
      "Stone in Love",
      "Still They Ride",
      "Escape",
      "Keep on Runnin'",
    ],
    coverImage: "Escape.jpg",
    price: 15,
    stock: 3,
  },
  {
    artist: "James Brown",
    album: "Cold Sweat",
    genre: "R&B",
    release: 1967,
    tracks: [
      "Fever",
      "Stagger Lee",
      "Mona Lisa",
      "I Want to Be Around",
      "Nature Boy",
    ],
    coverImage: "Cold Sweat.jpg",
    price: 20,
    stock: 4,
  },
];

// Mostrar catalogo en alert
alert("Welcome to Blast From The Past!");

// Boton de mostrar catalogo
const shopBtn = document.createElement("button");
shopBtn.innerHTML = `
Show Products
`;
document.body.appendChild(shopBtn);
shopBtn.onclick = () => showProducts();

// Iterar productos
const showProducts = () => {
  let record = `Available Vinyl Records:\n\n`;

  vinylRecords.forEach((r) => {
    record += `${r.album} - ${r.artist}: $${r.price}\n\n`;
  });

  alert(record);
};

// Filtrar catalogo por decada
const filterBtn = document.createElement("button");
filterBtn.innerHTML = `Filter By Decades`;
document.body.appendChild(filterBtn);
filterBtn.onclick = () => filterAlbum();

function filterAlbum() {
  let selectedRecord;

  while (true) {
    const decade = prompt(`Choose the desired decade from:\n
1. 60s
2. 70s
3. 80s
`);
    switch (decade) {
      case "1":
        selectedRecord = vinylRecords.filter(
          (record) => record.release >= 1960 && record.release < 1970
        );
        break;
      case "2":
        selectedRecord = vinylRecords.filter(
          (record) => record.release >= 1970 && record.release < 1980
        );
        break;
      case "3":
        selectedRecord = vinylRecords.filter(
          (record) => record.release >= 1980 && record.release < 1990
        );
        break;
      default:
        alert("Please input a number from the list");
        continue;
    }
    for (const record of selectedRecord) {
      alert(`These are the available records from that decade:\n
    ${record.album}: ${record.release}
    `);
    }
    break;
  }
}

// Añadir al carrito
const cart = [];

const addToCart = (record) => {
  const cartItem = cart.find((item) => item.record.album === record.album);
  if (cartItem) {
    if (cartItem.quantity < record.stock) {
      cartItem.quantity += 1;
      cartItem.totalPrice += record.price;
    } else {
      alert(`Can't add more of this vinyl to cart`);
      return;
    }
  } else {
    cart.push({ record, quantity: 1, totalPrice: record.price });
  }
  alert(`${record.album} from ${record.artist} added to cart`);
  console.log(cart);
};

// Botones de añadir al carrito
const addToCartBtns = vinylRecords.forEach(function (record, i) {
  const albumBtn = document.createElement("button");
  albumBtn.innerHTML = `
  Add "${record.album}" to Cart
  `;
  document.body.appendChild(albumBtn);
  albumBtn.onclick = function () {
    addToCart(vinylRecords[i]);
  };
});

// Boton del carrito
const cartBtn = document.createElement("button");
cartBtn.innerHTML = `
Show Cart
`;
document.body.appendChild(cartBtn);
// Mostrar carrito
cartBtn.onclick = () => showCart();

function showCart() {
  let productInCard = `Items in cart:\n`;

  cart.forEach((cartItem) => {
    productInCard += `${cartItem.quantity} --> ${cartItem.record.album} - ${cartItem.record.artist}: $${cartItem.totalPrice}\n`;
  });

  if (cart.length > 0) {
    alert(productInCard);
  } else {
    alert(`No products added to your cart!`);
  }
}
