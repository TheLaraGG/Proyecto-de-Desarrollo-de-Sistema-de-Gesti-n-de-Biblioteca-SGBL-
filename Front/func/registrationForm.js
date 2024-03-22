const form = document.getElementById("book-registration-form");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const price = document.getElementById("price");
const author = document.getElementById("author");
const releaseDate = document.getElementById("release-date");
const quantity = document.getElementById("quantity");
const review = document.getElementById("review");

const book = {
    titulo:title.value,
    portada:cover.value,
    precio:price.value,
    autor:author.value,
    fecha_salida:releaseDate.value,
    cantidad:quantity.value,
    resena:review.value
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(book.JSON.stringify(book));
    url="http://localhost:3000/books"
fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
})
.then((response) => response.json())
.then((data) => {
    console.log("Success:", data);
})
.catch((error) => {
    console.error("Error:", error);
    
})

});

