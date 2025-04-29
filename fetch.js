const fetchBooks = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((responseObj) => {
      console.log(responseObj);
      if (responseObj.ok) {
        return responseObj.json();
      }
    })
    .then((books) => {
      const row = document.querySelector(".booksGrid");

      books.forEach((book) => {
        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-md-4 col-lg-3 g-3";

        col.innerHTML = `<div class="card h-100 shadow-sm ">
        <div class="overflow-hidden rounded-top" style="aspect-ratio: 2 / 3;">
        <img src="${book.img}" class="w-100 h-100 object-fit-cover" alt="${book.title}">
        </div>
        <div class="card-body d-flex flex-column">
        <h5 class="card-title text-truncate">${book.title}</h5>
        <p class="card-text mb-4">Prezzo: €${book.price}</p>
        <div class="mt-auto d-grid gap-2">
        <button class="btn btn-primary add-to-cart-btn">
        <i class="bi bi-cart-plus me-1"></i>Add to Cart</button>
        <button class="btn btn-danger discard-btn">
        <i class="bi bi-x-square me-1"></i>Discard</button>
        </div>
        </div>
        </div>`;

        // discard-btn
        col.querySelector(".discard-btn").addEventListener("click", () => {
          col.remove();
        });

        row.appendChild(col);
      });
    })

    // cart-btn to continue

    // catch if error appears
    .catch((error) => {
      console.error("Errore nel caricamento dei libri:", error);
      document.querySelector(".booksGrid").innerHTML = `
          <div class="col-12 text-center text-danger">
            Errore nel caricamento dei libri.
          </div>
          <div class="col-12 text-center text-danger fs-2"
          ><i class="bi bi-emoji-frown"></i></div
         >
        `;
    });
};

window.onload = fetchBooks;
