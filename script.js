// document.write("Hello Aki");

let myLibrary = [];

function Book(title, author, pages, status) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function () {
    return (
      " Title: " +
      title +
      " Author: " +
      author +
      " Pages: " +
      pages +
      " Status: " +
      status
    );
  };
}

const book1 = new Book("Harr Potter", " jk roland", " 234", " not read yet");
const book1done = book1.info();
myLibrary.push(book1done);

function addBookToLibrary() {
  // do stuff here
  let userBook = window.prompt("Please add your favourite book?");
  let userAuthor = window.prompt("Who is author?");
  let userpage = window.prompt("How many pages?");
  let userStatus = window.prompt("Have you finished reading it?");
  const newBook1 = new Book(userBook, userAuthor, userpage, userStatus);
  const newBook2 = newBook1.info();
  myLibrary.push(newBook2);
  console.log(myLibrary);
}

addBookToLibrary();

myLibrary.forEach(render);

function render(item, index) {
  document.getElementById("myUl").innerHTML += index + 1 + ":" + item + "<br>";
}
