let editBooksButton = document.querySelector("#edit-books");
let books = document.querySelector("#all-books");
let editDisplay = "none";
editBooksButton.addEventListener("click", toggleEdit);


let myLibrary = [];

function Book(title, author, pages, status) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function () {
    return title + " by " + author + ", " + pages + " pages long, " + status + ".";
  };

}
//create new obj with Book constructor adds to library array
//displays on the page
function addBookToLibrary(title, author, pages, status) {
  let newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook)

}

function submitForm(ev) {
  ev.preventDefault();

  let userBook = document.getElementById('title').value;
  let userAuthor = document.getElementById('author').value;
  let userPage = document.getElementById('pages').value;
  let userStatus = document.getElementById('userStatus').value;

  addBookToLibrary(userBook, userAuthor, userPage, userStatus);
  document.forms[0].reset();
  console.log(myLibrary);

  displayAll();
}

function toggleEdit() {
  if (editDisplay === "none") {
    editDisplay = "block";
  } else {
    editDisplay = "none";
  }
  displayAll();
}

function displayAll() {

  books.innerHTML = "";
  deleteIndex = 0;
  for (e in myLibrary) {
    books.innerHTML += "<div class='book-card'>" +
      "<div class='card-top'><span class='title'>" + myLibrary[e].title + "</span>" +
      "<span class='author'> by " + myLibrary[e].author + "</span></div>" +
      "<div class='card-bottom'><span class='pages'>" + myLibrary[e].pages + " pages</span>" +
      "<span class='read-status'> Read? " + myLibrary[e].status + "</span></div>" +
      "<div style='background: darkred; color: white; padding: 7px; cursor: pointer; display: " + editDisplay + "' onclick='deleteBook(" + deleteIndex + ")'> Delete</div></div>"
      +"<div style='background: green; color: yellow; padding: 7px; cursor: pointer; display: " + "' onclick='readStatus(" + deleteIndex + ")'> Read</div></div>";
    
    deleteIndex++;
  };
}

function deleteBook(item) {
  myLibrary.splice(item, 1);
  displayAll();
};

function readStatus(item){ 
  myLibrary[item] 

  
var ele = document.getElementsByClassName("card-top");
 return ele[item].style.setProperty("text-decoration", "line-through"); 
}
 
const book1 = new Book("Harr Potter", " jk roland", " 234", 'false');
// const book1done = book1.info();
myLibrary.push(book1);


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', submitForm);
});