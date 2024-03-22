const url = "http://localhost:3000/books";
const container = document.querySelector(".libreria");
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const books = data.data || data; // Handle potential nested structure
    let innerHTML = "";
    for (const book of books) {
      if (book.titulo) { // Check for titulo property before accessing
        innerHTML += `<div class="book" id=${book._id}>`;
        innerHTML += `<img src="https://warframe.market/static/assets/user/default-avatar.png">`;
        innerHTML += `<h3 class="title">${book.titulo}</h3>`; // Example: Display title
        innerHTML += `<p class="author">${book.autor}</p>`;// Example: Display author
        innerHTML += `<p class="price">$${book.precio}</p>`; 
        innerHTML += `<p class="release-date">${book.fecha_salida}</p>`;
        innerHTML += `</div>`;
      } else {
        innerHTML += "<p>Book information unavailable</p>"; // Handle missing data
      }
    }

    container.innerHTML = innerHTML;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
