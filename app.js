// Catalogo
// const vinylRecords = [
//   {
//     artist: "Queen",
//     album: "A Night At The Opera",
//     genre: "Pop/Rock",
//     release: 1975,
//     tracks: [
//       "Death On Two Legs (Dedicated To)",
//       "Lazing on a Sunday Afternoon",
//       "I'm in Love with My Car",
//       "Your My Best Friend",
//       "'39",
//     ],
//     coverImage: "./images/A Night At The Opera.jpg",
//     price: 45,
//     stock: 1,
//   },
//   {
//     artist: "Stevie Wonder",
//     album: "Songs in the Key of Life",
//     genre: "R&B",
//     release: 1976,
//     tracks: [
//       "Love's in Need of Love Today",
//       "Isn't She Lovely",
//       "Ebony Eyes",
//       "As",
//       "All Day Sucker",
//     ],
//     coverImage: "./images/Songs in the Key of Life.jpg",
//     price: 32,
//     stock: 6,
//   },
//   {
//     artist: "Journey",
//     album: "Escape",
//     genre: "Pop/Rock",
//     release: 1981,
//     tracks: [
//       "Don't Stop Believing",
//       "Stone in Love",
//       "Still They Ride",
//       "Escape",
//       "Keep on Runnin'",
//     ],
//     coverImage: "./images/Escape.jpg",
//     price: 15,
//     stock: 3,
//   },
//   {
//     artist: "James Brown",
//     album: "Cold Sweat",
//     genre: "R&B",
//     release: 1967,
//     tracks: [
//       "Fever",
//       "Stagger Lee",
//       "Mona Lisa",
//       "I Want to Be Around",
//       "Nature Boy",
//     ],
//     coverImage: "./images/Cold Sweat.jpg",
//     price: 20,
//     stock: 4,
//   },
// ];
// console.log(vinylRecords);
const vinylRecords = JSON.parse(`[
  {
    "artist": "Pink Floyd",
    "album": "The Dark Side of the Moon",
    "genre": "Progressive Rock",
    "release": "1973",
    "tracks": [
      "Speak to Me",
      "Breathe",
      "On the Run",
      "Time",
      "The Great Gig in the Sky",
      "Money",
      "Us and Them",
      "Any Colour You Like",
      "Brain Damage",
      "Eclipse"
    ],
    "coverImage": "./images/the-dark-side-of-the-moon.jpg",
    "price": 29.99,
    "stock": 10
  },
  {
    "artist": "The Beatles",
    "album": "Abbey Road",
    "genre": "Rock",
    "release": "1969",
    "tracks": [
      "Come Together",
      "Something",
      "Maxwell's Silver Hammer",
      "Oh! Darling",
      "Octopus's Garden",
      "I Want You (She's So Heavy)",
      "Here Comes the Sun",
      "Because",
      "You Never Give Me Your Money",
      "Sun King",
      "Mean Mr. Mustard",
      "Polythene Pam",
      "She Came in Through the Bathroom Window",
      "Golden Slumbers",
      "Carry That Weight",
      "The End",
      "Her Majesty"
    ],
    "coverImage": "./images/abbey-road.jpg",
    "price": 24.99,
    "stock": 5
  },
  {
    "artist": "Led Zeppelin",
    "album": "Led Zeppelin IV",
    "genre": "Hard Rock",
    "release": "1971",
    "tracks": [
      "Black Dog",
      "Rock and Roll",
      "The Battle of Evermore",
      "Stairway to Heaven",
      "Misty Mountain Hop",
      "Four Sticks",
      "Going to California",
      "When the Levee Breaks"
    ],
    "coverImage": "./images/led-zeppelin-iv.jpg",
    "price": 27.99,
    "stock": 7
  },
  {
    "artist": "Michael Jackson",
    "album": "Thriller",
    "genre": "Pop",
    "release": "1982",
    "tracks": [
      "Wanna Be Startin' Somethin'",
      "Baby Be Mine",
      "The Girl Is Mine",
      "Thriller",
      "Beat It",
      "Billie Jean",
      "Human Nature",
      "P.Y.T. (Pretty Young Thing)",
      "The Lady in My Life"
    ],
    "coverImage": "./images/thriller.jpg",
    "price": 21.99,
    "stock": 3
  },
  {
    "artist": "David Bowie",
    "album": "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
    "genre": "Rock",
    "release": "1972",
    "tracks": [
      "Five Years",
      "Soul Love",
      "Moonage Daydream",
      "Starman",
      "It Ain't Easy",
      "Lady Stardust",
      "Star",
      "Hang On to Yourself",
      "Ziggy Stardust",
      "Suffragette City",
      "Rock 'n' Roll Suicide"
    ],
    "coverImage": "./images/the-rise-and-fall-of-ziggy-stardust-and-the-spiders-from-mars.jpg",
    "price": 19.99,
    "stock": 8
  },
  {
    "artist": "The Rolling Stones",
    "album": "Exile on Main St.",
    "genre": "Rock",
    "release": "1972",
    "tracks": [
      "Rocks Off",
      "Rip This Joint",
      "Shake Your Hips",
      "Casino Boogie",
      "Tumbling Dice",
      "Sweet Virginia",
      "Torn and Frayed",
      "Sweet Black Angel",
      "Loving Cup",
      "Happy",
      "Turd on the Run",
      "Ventilator Blues",
      "I Just Want to See His Face",
      "Let It Loose",
      "All Down the Line",
      "Stop Breaking Down",
      "Shine a Light",
      "Soul Survivor"
    ],
    "coverImage": "./images/exile-on-main-st.jpg",
    "price": 23.99,
    "stock": 6
  },
  {
    "artist": "Bob Dylan",
    "album": "Highway 61 Revisited",
    "genre": "Folk Rock",
    "release": "1965",
    "tracks": [
      "Like a Rolling Stone",
      "Tombstone Blues",
      "It Takes a Lot to Laugh, It Takes a Train to Cry",
      "From a Buick 6",
      "Ballad of a Thin Man",
      "Queen Jane Approximately",
      "Highway 61 Revisited",
      "Just Like Tom Thumb's Blues",
      "Desolation Row"
    ],
    "coverImage": "./images/highway-61-revisited.jpg",
    "price": 18.99,
    "stock": 9
  },
  {
    "artist": "Nirvana",
    "album": "Nevermind",
    "genre": "Grunge",
    "release": "1991",
    "tracks": [
      "Smells Like Teen Spirit",
      "In Bloom",
      "Come as You Are",
      "Breed",
      "Lithium",
      "Polly",
      "Territorial Pissings",
      "Drain You",
      "Lounge Act",
      "Stay Away",
      "On a Plain",
      "Something in the Way"
    ],
    "coverImage": "./images/nevermind.jpg",
    "price": 22.99,
    "stock": 4
  },
  {
    "artist": "Queen",
    "album": "A Night at the Opera",
    "genre": "Rock",
    "release": "1975",
    "tracks": [
      "Death on Two Legs (Dedicated to...)",
      "Lazing on a Sunday Afternoon",
      "I'm in Love with My Car",
      "You're My Best Friend",
      "'39",
      "Sweet Lady",
      "Seaside Rendezvous",
      "The Prophet's Song",
      "Love of My Life",
      "Good Company",
      "Bohemian Rhapsody",
      "God Save the Queen"
    ],
    "coverImage": "./images/a-night-at-the-opera.jpg",
    "price": 26.99,
    "stock": 12
  },
  {
    "artist": "Fleetwood Mac",
    "album": "Rumours",
    "genre": "Rock",
    "release": "1977",
    "tracks": [
      "Second Hand News",
      "Dreams",
      "Never Going Back Again",
      "Don't Stop",
      "Go Your Own Way",
      "Songbird",
      "The Chain",
      "You Make Loving Fun",
      "I Don't Want to Know",
      "Oh Daddy",
      "Gold Dust Woman"
    ],
    "coverImage": "./images/rumours.jpg",
    "price": 25.99,
    "stock": 7
  },
  {
    "artist": "Jimi Hendrix",
    "album": "Are You Experienced",
    "genre": "Rock",
    "release": "1967",
    "tracks": [
      "Purple Haze",
      "Manic Depression",
      "Hey Joe",
      "Love or Confusion",
      "May This Be Love",
      "I Don't Live Today",
      "The Wind Cries Mary",
      "Fire",
      "Third Stone from the Sun",
      "Foxey Lady",
      "Are You Experienced"
    ],
    "coverImage": "./images/are-you-experienced.jpg",
    "price": 20.99,
    "stock": 5
  },
  {
    "artist": "Radiohead",
    "album": "OK Computer",
    "genre": "Alternative Rock",
    "release": "1997",
    "tracks": [
      "Airbag",
      "Paranoid Android",
      "Subterranean Homesick Alien",
      "Exit Music (For a Film)",
      "Let Down",
      "Karma Police",
      "Fitter Happier",
      "Electioneering",
      "Climbing Up the Walls",
      "No Surprises",
      "Lucky",
      "The Tourist"
    ],
    "coverImage": "./images/ok-computer.jpg",
    "price": 24.99,
    "stock": 3
  },
  {
    "artist": "Prince",
    "album": "Purple Rain",
    "genre": "Pop",
    "release": "1984",
    "tracks": [
      "Let's Go Crazy",
      "Take Me with U",
      "The Beautiful Ones",
      "Computer Blue",
      "Darling Nikki",
      "When Doves Cry",
      "I Would Die 4 U",
      "Baby I'm a Star",
      "Purple Rain"
    ],
    "coverImage": "./images/purple-rain.jpg",
    "price": 22.99,
    "stock": 6
  },
  {
    "artist": "The Clash",
    "album": "London Calling",
    "genre": "Punk Rock",
    "release": "1979",
    "tracks": [
      "London Calling",
      "Brand New Cadillac",
      "Jimmy Jazz",
      "Hateful",
      "Rudie Can't Fail",
      "Spanish Bombs",
      "The Right Profile",
      "Lost in the Supermarket",
      "Clampdown",
      "The Guns of Brixton",
      "Wrong 'Em Boyo",
      "Death or Glory",
      "Koka Kola",
      "The Card Cheat",
      "Lover's Rock",
      "Four Horsemen",
      "I'm Not Down",
      "Revolution Rock",
      "Train in Vain"
    ],
    "coverImage": "./images/london-calling.jpg",
    "price": 19.99,
    "stock": 10
  },
  {
    "artist": "Amy Winehouse",
    "album": "Back to Black",
    "genre": "Soul",
    "release": "2006",
    "tracks": [
      "Rehab",
      "You Know I'm No Good",
      "Me & Mr Jones",
      "Just Friends",
      "Back to Black",
      "Love Is a Losing Game",
      "Tears Dry on Their Own",
      "Wake Up Alone",
      "Some Unholy War",
      "He Can Only Hold Her",
      "Addicted"
    ],
    "coverImage": "./images/back-to-black.jpg",
    "price": 21.99,
    "stock": 7
  },
  {
    "artist": "Bruce Springsteen",
    "album": "Born to Run",
    "genre": "Rock",
    "release": "1975",
    "tracks": [
      "Thunder Road",
      "Tenth Avenue Freeze-Out",
      "Night",
      "Backstreets",
      "Born to Run",
      "She's the One",
      "Meeting Across the River",
      "Jungleland"
    ],
    "coverImage": "./images/born-to-run.jpg",
    "price": 23.99,
    "stock": 4
  },
  {
    "artist": "Elton John",
    "album": "Goodbye Yellow Brick Road",
    "genre": "Pop Rock",
    "release": "1973",
    "tracks": [
      "Funeral for a Friend/Love Lies Bleeding",
      "Candle in the Wind",
      "Bennie and the Jets",
      "Goodbye Yellow Brick Road",
      "This Song Has No Title",
      "Grey Seal",
      "Jamaica Jerk-Off",
      "I've Seen That Movie Too",
      "Sweet Painted Lady",
      "The Ballad of Danny Bailey (1909-1934)",
      "Dirty Little Girl",
      "All the Girls Love Alice",
      "Your Sister Can't Twist (But She Can Rock 'n Roll)",
      "Saturday Night's Alright for Fighting",
      "Roy Rogers",
      "Social Disease",
      "Harmony"
    ],
    "coverImage": "./images/goodbye-yellow-brick-road.jpg",
    "price": 26.99,
    "stock": 9
  },
  {
    "artist": "The Smiths",
    "album": "The Queen Is Dead",
    "genre": "Indie Rock",
    "release": "1986",
    "tracks": [
      "The Queen Is Dead",
      "Frankly, Mr. Shankly",
      "I Know It's Over",
      "Never Had No One Ever",
      "Cemetry Gates",
      "Bigmouth Strikes Again",
      "The Boy with the Thorn in His Side",
      "Vicar in a Tutu",
      "There Is a Light That Never Goes Out",
      "Some Girls Are Bigger Than Others"
    ],
    "coverImage": "./images/the-queen-is-dead.jpg",
    "price": 18.99,
    "stock": 5
  },
  {
    "artist": "Johnny Cash",
    "album": "At Folsom Prison",
    "genre": "Country",
    "release": "1968",
    "tracks": [
      "Folsom Prison Blues",
      "Dark as a Dungeon",
      "I Still Miss Someone",
      "Cocaine Blues",
      "25 Minutes to Go",
      "Orange Blossom Special",
      "The Long Black Veil",
      "Send a Picture of Mother",
      "The Wall",
      "Dirty Old Egg-Sucking Dog",
      "Flushed from the Bathroom of Your Heart",
      "Jackson",
      "Give My Love to Rose",
      "I Got Stripes",
      "Green, Green Grass of Home",
      "Greystone Chapel"
    ],
    "coverImage": "./images/at-folsom-prison.jpg",
    "price": 20.99,
    "stock": 7
  }
]`);
// -----------Asignarle un ID a cada record en mi catálogo !Important!-----------
const aID = [];
vinylRecords.forEach((r, i) => {
  aID.push((r.albumID = i));
});

// -----------Función principal para mostrar mi catálogo al crear las cartas-----------
function showProducts(items) {
  const catalogueContainer = document.querySelector("#catalogueContainer");
  // catalogueContainer.innerHTML = "";

  const fragment = document.createDocumentFragment();

  items.forEach((r, i) => {
    // console.log(tracks);
    const columnDiv = document.createElement("div");
    columnDiv.classList.add("col", "card-box");

    const card = document.createElement("div");
    card.classList.add("card", "h-100", "text-bg-dark", "border-warning");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const accordion = document.createElement("div");
    accordion.innerHTML = `
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
        Tracks
      </button>
    </h2>
    <div id="collapse${i}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <ul class="tracks-list" id="tracksList">
        </ul>
      </div>
    </div>
  </div>`;

    r.tracks.forEach((track) => {
      const ulList = accordion.querySelector("#tracksList");
      const listItems = document.createElement("li");
      listItems.innerHTML = track;
      ulList.appendChild(listItems);
    });

    const elements = [
      {
        type: "img",
        src: r.coverImage,
        alt: r.album,
        className: "card-img-top",
      },
      { type: "h5", text: r.album, className: "card-title mt-3" },
      { type: "h6", text: r.artist, className: "card-subtitle" },
      { type: "p", text: `$${r.price}`, className: "card-text" },
      {
        type: "button",
        text: "Add to Cart",
        className: "btn btn-primary",
        id: "cartBtns",
        albumID: aID[i],
      },
    ];

    elements.forEach(({ type, text, src, alt, className, id, albumID }) => {
      const element = document.createElement(type);
      element.textContent = text ?? "";
      element.src = src ?? "";
      element.alt = alt ?? "";
      element.className = className ?? "";
      element.id = id ?? "";
      if ("data-albumid" !== undefined) {
        element.setAttribute("data-albumid", albumID);
        columnDiv.setAttribute("data-albumid", albumID);
      }
      cardBody.appendChild(element);
      card.appendChild(cardBody);
      card.append(accordion);
      columnDiv.appendChild(card);
    });

    fragment.appendChild(columnDiv);
  });

  catalogueContainer.appendChild(fragment);

  catalogueContainer.addEventListener("click", function (event) {
    const target = event.target;
    if (target.matches("#cartBtns")) {
      const albumID = target.getAttribute("data-albumid");
      const record = vinylRecords[albumID];
      addToCart(record);
    }
  });
}
showProducts(vinylRecords);

// -----------Filtrar catalogo por decada-----------
const decadeCheckboxes = document.querySelectorAll(".form-check-input");

// Devolver un array de records dependiendo de la decada seleccionada con el checkbox de cada valor (1960, 1970, 1980, etc)
function filterAlbum() {
  const selectedDecades = [];

  decadeCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedDecades.push(checkbox.value);
    }
  });

  const selectedRecord = [];

  selectedDecades.forEach((decade) => {
    switch (decade) {
      case "1960s":
        selectedRecord.push(
          vinylRecords.filter(
            (record) => record.release >= 1960 && record.release < 1970
          )
        );
        break;
      case "1970s":
        selectedRecord.push(
          vinylRecords.filter(
            (record) => record.release >= 1970 && record.release < 1980
          )
        );
        break;
      case "1980s":
        selectedRecord.push(
          vinylRecords.filter(
            (record) => record.release >= 1980 && record.release < 1990
          )
        );
        break;
      case "1990s":
        selectedRecord.push(
          vinylRecords.filter(
            (record) => record.release >= 1990 && record.release < 2000
          )
        );
        break;
      case "2000s":
        selectedRecord.push(
          vinylRecords.filter(
            (record) => record.release >= 2000 && record.release < 2010
          )
        );
        break;
      default:
        console.log("Invalid decade");
        break;
    }
  });
  // Convertir mi array selectedRecords en un array con menos profundidad (o menos niveles)
  const filteredRecords = selectedRecord.flat();

  // Conseguir todos mis divs de records
  const divs = document.querySelectorAll(".col");

  // Iterar los divs y guardar su albumID que es único por record
  divs.forEach((div) => {
    const albumID = parseInt(div.getAttribute("data-albumid"));

    let isMatch = false;

    // Iterar mis records filtrados y comparar sus ids con los ids de mis divs
    filteredRecords.forEach((filteredAlbum) => {
      if (filteredAlbum.albumID === albumID) {
        isMatch = true;
        return;
      }
    });

    // Esconder los divs que no hagan match
    if (!isMatch) {
      div.style.display = "none";
    } else {
      div.style.display = "";
    }
  });

  // Chequear si ningun checkbox está chequado y mostrar todos los records
  const noneSelected = !Array.from(decadeCheckboxes).some(
    (checkbox) => checkbox.checked
  );

  if (noneSelected) {
    divs.forEach((div) => {
      div.style.display = "";
    });
  }
}

// -----------Añadir al carrito-----------
const cart = [];
function getStorageCart() {
  const cartFromJSON = sessionStorage.getItem("cart");
  const parsedCart = JSON.parse(cartFromJSON);
  return parsedCart;
}
function setStorageCart() {
  const cartJSON = JSON.stringify(cart);
  sessionStorage.setItem("cart", cartJSON);
}
setStorageCart();
const cartBody = document.querySelector("#cartBody");

const addToCart = (record) => {
  const cartItem = cart.find((item) => item.record.albumID === record.albumID);
  if (cartItem) {
    if (cartItem.quantity < record.stock) {
      cartItem.quantity += 1;
      cartItem.totalPrice += record.price;
      setStorageCart();
    } else {
      Swal.fire({
        icon: "error",
        title: "Sorry...",
        text: "No more stock!",
      });
      return;
    }
  } else {
    cart.push({
      record,
      quantity: 1,
      totalPrice: record.price,
      id: record.albumID,
    });
    setStorageCart();
  }
  createCart();

  Toastify({
    text: `${record.album} from ${record.artist} added to cart`,
    duration: 2000,
    destination: "",
    newWindow: false,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#ffc107",
      color: "rgb(28, 28, 28)",
      fontWeight: "semibold",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
  const toast = document.querySelector(".toastify");
  toast.setAttribute("data-bs-toggle", "offcanvas");
  toast.setAttribute("data-bs-target", "#offcanvasWithBothOptions");
  toast.setAttribute("aria-controls", "offcanvasWithBothOptions");
};

function showEmptyCart() {
  if (cartBody.innerHTML === "") {
    const emptyCartCard = document.createElement("div");
    emptyCartCard.classList.add("card", "empty-cart");

    const emptyCartCardBody = document.createElement("div");
    emptyCartCardBody.classList.add("card-body");
    emptyCartCardBody.innerHTML = "No items added to Cart";

    emptyCartCard.appendChild(emptyCartCardBody);
    cartBody.appendChild(emptyCartCard);
  }
}
showEmptyCart();

// Carrito
function createCart() {
  const cartBody = document.querySelector("#cartBody");

  const cartFragment = document.createDocumentFragment();

  const existingCards = new Map();

  const parsedCart = getStorageCart();

  parsedCart.forEach((cartItem, i) => {
    const cartItemID = cartItem.record.albumID;
    const existingCard = existingCards.get(cartItemID);

    if (existingCard) {
      const quantityElement = existingCard.querySelector(".card-text-quant");
      const totalPriceElement = existingCard.querySelector(".card-total-price");
      cartItem.quantity += 1;
      cartItem.totalPrice += cartItem.record.price;

      quantityElement.textContent = `Quantity: ${cartItem.quantity}`;
      totalPriceElement.textContent = `$${cartItem.totalPrice.toFixed(2)}`;
    } else {
      const cardCont = document.createElement("div");
      cardCont.classList.add("card", "mb-3", "text-bg-dark", "border-warning");
      cardCont.style.maxWidth = "540px";

      const row = document.createElement("div");
      row.classList.add("row", "g-0");

      const img = document.createElement("div");
      img.classList.add("col-md-4");

      const innerCard = document.createElement("div");
      innerCard.classList.add("col-md-8");

      const cartCardBody = document.createElement("div");
      cartCardBody.classList.add("card-body");

      const buttonDiv = document.createElement("div");
      buttonDiv.classList.add("d-grid", "gap-2");

      const elements = [
        {
          type: "h5",
          text: cartItem.record.album,
          className: "card-title",
        },
        {
          type: "h6",
          text: cartItem.record.artist,
          className: "card-subtitle",
        },
        {
          type: "p",
          text: `Quantity: ${cartItem.quantity}`,
          className: "card-text-quant mt-2 d-inline-flex pe-5",
        },
        {
          type: "p",
          text: `$${cartItem.totalPrice.toFixed(2)}`,
          className: "card-total-price d-inline-flex",
        },
      ];

      elements.forEach(({ type, text, src, alt, className, id, albumID }) => {
        const element = document.createElement(type);
        element.textContent = text ?? "";
        element.src = src ?? "";
        element.alt = alt ?? "";
        element.className = className ?? "";
        element.id = id ?? "";
        if ("data-cartid" !== undefined) {
          cardCont.setAttribute("data-cartid", parsedCart[i].id);
        }
        cartCardBody.appendChild(element);
        innerCard.appendChild(cartCardBody);
        row.appendChild(img);
        row.appendChild(innerCard);
        row.appendChild(buttonDiv);
        img.innerHTML = `
          <img src=${parsedCart[i].record.coverImage} alt="${parsedCart[i].record.album}" class="img-fluid rounded-start">
          `;
        buttonDiv.innerHTML = `
          <button class="btn btn-danger" id="removeBtns" data-cartid="${parsedCart[i].id}" >Remove</button>
          `;
        cardCont.appendChild(row);
      });
      existingCards.set(cartItemID, cardCont);
      cartFragment.appendChild(cardCont);
    }
  });
  cartBody.innerHTML = "";
  cartBody.appendChild(cartFragment);
  showEmptyCart();
}
cartBody.addEventListener("click", function (event) {
  const target = event.target;
  if (target.matches("#removeBtns")) {
    const albumID = parseInt(target.getAttribute("data-cartid"));
    removeFromCart(albumID);
  }
});

const removeFromCart = (albumID) => {
  const item = cart.find((item) => item.id === albumID);
  const index = cart.indexOf(item);
  item.quantity -= 1;
  item.totalPrice -= item.record.price;
  if (item.quantity < 1) {
    cart.splice(index, 1);
  }
  setStorageCart();
  createCart();
};
