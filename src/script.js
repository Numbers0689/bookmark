const myLibrary = [];

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