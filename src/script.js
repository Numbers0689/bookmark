// sample books:

let b1 = new Book("The Trial", "Franz Kafka", 258, true);
let b2 = new Book("Crime And Punishment", "Fyodor Dostoevsky", 642, true);
let b3 = new Book("Norwegian Wood", "Haruki Murakami", 225, true);
let b4 = new Book("War and Peace", "Leo Tolstoy", 1206, false);


// library functions:

const myLibrary = [b1, b2, b3, b4];
const grid = document.querySelector(".book-grid");

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = Boolean(read);
};

function addBookToLibrary(title, author, pages, read) {
  let no = myLibrary.length;
  let b = `b${no}`;
  b = new Book(title, author, pages, read);
  myLibrary.push(b);
  
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.setAttribute("data-index", `${no}`)
  grid.appendChild(newCard);
  console.log(myLibrary[no]);
};

function setCard(lib) {
  for (let i = 0; i < lib.length; i++) {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.setAttribute("data-index", `${i}`)
    grid.appendChild(newCard);
    console.log(lib[i]);
  }
};

setCard(myLibrary);

// dialog set up:

const dialog = document.querySelector("dialog");
const logButton = document.querySelector(".logbook");
const closeDialog = document.querySelector(".closeD");
const logCard = document.querySelector(".log");

logButton.addEventListener("click", () => {
  dialog.showModal();
});

logCard.addEventListener("click", () => {
  dialog.showModal();
});

closeDialog.addEventListener("click", () => {
  dialog.close();
});


// form handling

const save = document.querySelector("#submit");
const title = document.querySelector("#bookTitle");
const author = document.querySelector("#auth");
const pages = document.querySelector("#pg");
const read = document.querySelector("#read");
const form = document.querySelector("form");

save.addEventListener("click", (e) => {
  e.preventDefault();
  let readBool = false;
  if (read.checked == true) {
    readBool = true;
  }
  addBookToLibrary(title.value, author.value, pages.value, readBool);
  form.reset();
  dialog.close();
});