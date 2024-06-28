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
  addCard(b, no);
  console.log(myLibrary[no]);
};

function addCard(book, no) {
  const newCard = document.createElement("div");
  newCard.classList.add("card", "data");
  newCard.setAttribute("data-index", `${no}`);

  const ctitle = document.createElement("div");
  ctitle.textContent = book.name;
  ctitle.classList.add("cardTitle");

  const cauth = document.createElement("div");
  cauth.textContent = "By " + book.author;
  cauth.classList.add("cardAuthor");

  const cpg = document.createElement("div");
  cpg.textContent = book.pages + " pages";
  cpg.classList.add("cardPages");

  const readbtn = document.createElement("button");
  readbtn.textContent = "Read";
  readbtn.classList.add("readTog");
  if (book.read) {
    readbtn.classList.add("true");
  }

  const delbtn = document.createElement("button");
  delbtn.textContent = "Remove";
  delbtn.classList.add("delBook");

  const idata = document.createElement("div");
  idata.append(ctitle, cauth, cpg); 

  const btns = document.createElement("div");
  btns.classList.add("btns");
  btns.append(readbtn, delbtn);

  newCard.append(idata, btns);
  grid.appendChild(newCard);
};

function setCard(lib) {
  for (let i = 0; i < lib.length; i++) {
    addCard(lib[i], i);
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
  if (form.checkValidity()) {
    let readBool = false;
    if (read.checked == true) {
      readBool = true;
    }
    addBookToLibrary(title.value, author.value, pages.value, readBool);
    form.reset();
    dialog.close();
  } else {
    form.reportValidity();
  }
});

// card handling

const readTogbtns = document.querySelectorAll(".readTog");
const delBookbtns = document.querySelectorAll(".delBook");

readTogbtns.forEach(button => {
  button.addEventListener("click", function() {
    this.classList.toggle("true");
    const parentBook = this.parentElement.parentElement;
    let bID = parentBook.getAttribute("data-index");
    if (myLibrary[bID].read) {
      myLibrary[bID].read = false;
    } else {
      myLibrary[bID].read = true;
    }
    console.log(myLibrary[bID]);
  });
});

delBookbtns.forEach(button => {
  button.addEventListener("click", function() {
    const parentBook = this.parentElement.parentElement;
    let bID = parentBook.getAttribute("data-index");
    myLibrary.splice(bID, 1);
    console.log(myLibrary);
    parentBook.remove();
  });
});