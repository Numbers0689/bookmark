const myLibrary = [1, 2, 3, 4, 5, 6];

function Book(name, author, pages, isbn, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isbn = isbn;
  this.read = Boolean(read);
}

function addBookToLibrary() {
  const tempbook = new Book(m, a, p, i, r);
  myLibrary.push(tempbook)
}

let grid = document.querySelector(".book-grid");

function test(my) {
  for (let c in my) {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    grid.appendChild(newCard);
  }
};

test(myLibrary);