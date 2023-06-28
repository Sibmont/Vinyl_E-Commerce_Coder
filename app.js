// -----------Asignarle un ID a cada record en mi catálogo !Important!-----------

async function getData() {
  return (await fetch("./vinyls.json")).json();
}

document.addEventListener("DOMContentLoaded", async () => {
  const usernameField = document.querySelector(".dropdown-item-text");
  usernameField.textContent = `Hello, ${sessionStorage.getItem("user")}`;

  let vinylRecords = [];

  vinylRecords = await getData();

  const catalogueContainer = document.querySelector("#catalogueContainer");
  if (catalogueContainer) {
    showProducts(vinylRecords);
  }
  // -----------Función principal para mostrar mi catálogo al crear las cartas-----------
  function showProducts(data) {
    const fragment = document.createDocumentFragment();

    data.forEach((r, i) => {
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
          albumID: r.albumID,
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
  // showProducts(vinylRecords);

  // -----------Filtrar catalogo por decada-----------
  const decadeCheckboxes = document.querySelector("#filterContainer");
  if (decadeCheckboxes) {
    decadeCheckboxes.addEventListener("change", filterAlbum);
  }

  // Devolver un array de records dependiendo de la decada seleccionada con el checkbox de cada valor (1960, 1970, 1980, etc)
  function filterAlbum() {
    const selectedDecades = [];

    decadeCheckboxes
      .querySelectorAll('input[type="checkbox"]')
      .forEach((checkbox) => {
        if (checkbox.checked) {
          selectedDecades.push(checkbox.value);
        }
      });
    console.log(selectedDecades);

    const selectedRecord = [];

    selectedDecades.forEach((decade) => {
      switch (decade) {
        case "1960s":
          selectedRecord.push(
            vinylRecords.filter(
              (record) => record.release >= 1960 && record.release < 1970
            )
          );
          console.log(selectedRecord);
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
    const noneSelected = !decadeCheckboxes.querySelector(
      'input[type="checkbox"]:checked'
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
  if (cart.length === 0) {
    setStorageCart();
  }

  const cartBody = document.querySelector("#cartBody");

  const addToCart = (record) => {
    const cartItem = cart.find(
      (item) => item.record.albumID === record.albumID
    );
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
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#ffc107",
        color: "rgb(28, 28, 28)",
        fontWeight: "semibold",
      },
      onClick: function () {},
    }).showToast();
    const toast = document.querySelector(".toastify");
    toast.setAttribute("data-bs-toggle", "offcanvas");
    toast.setAttribute("data-bs-target", "#offcanvasWithBothOptions");
    toast.setAttribute("aria-controls", "offcanvasWithBothOptions");
  };

  function showEmptyCart() {
    if (cartBody && cartBody.innerHTML === "") {
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

    const buyCart = document.createElement("div");

    const price = [];

    parsedCart.forEach((cartItem, i) => {
      const cartItemID = cartItem.record.albumID;
      const existingCard = existingCards.get(cartItemID);
      price.push(cartItem.totalPrice);
      console.log(price);

      if (existingCard) {
        const quantityElement = existingCard.querySelector(".card-text-quant");
        const totalPriceElement =
          existingCard.querySelector(".card-total-price");
        cartItem.quantity += 1;
        cartItem.totalPrice += cartItem.record.price;

        quantityElement.textContent = `Quantity: ${cartItem.quantity}`;
        totalPriceElement.textContent = `$${cartItem.totalPrice.toFixed(2)}`;
      } else {
        const cardCont = document.createElement("div");
        cardCont.classList.add(
          "card",
          "mb-3",
          "text-bg-dark",
          "border-warning"
        );
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
    if (price.length > 0) {
      const totalCartPrice = price.reduce((total, amount) => total + amount);
      buyCart.innerHTML = `
    <p class="fw-bold fs-5">
    TOTAL PRICE: $${totalCartPrice.toFixed(2)}
    </p>
    <div class="mt-2">
    <button type="button" class="btn btn-warning" id="buyBtn">Buy Cart</button>
    </div>
    `;
      cartBody.appendChild(buyCart);
    }
    showEmptyCart();
  }
  if (cartBody) {
    cartBody.addEventListener("click", function (event) {
      const target = event.target;
      if (target.matches("#removeBtns")) {
        const albumID = parseInt(target.getAttribute("data-cartid"));
        removeFromCart(albumID);
      }
    });
    cartBody.addEventListener("click", function (event) {
      const target = event.target;
      if (target.matches("#buyBtn")) {
        buyCart();
      }
    });
  }

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

  const cartContainer = document.querySelector("#cartBody");
  function buyCart() {
    Swal.fire(
      "Thank you!",
      "We will contact you soon to continue with the payment and shipping process.",
      "success"
    );
    cart.splice(0);
    setStorageCart();
    createCart();
  }
});
