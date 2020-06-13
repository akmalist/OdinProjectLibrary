let editBooksButton = document.querySelector("#edit-books");
let showFormButton = document.querySelector("#show-form");
let addBookForm = document.querySelector("#add-book");
let closeFormButton = document.querySelector("#close-form")
let books = document.querySelector("#all-books");
let addBookButton = document.querySelector("#btn")
let editDisplay = "none";

editBooksButton.addEventListener("click", toggleEdit);
showFormButton.addEventListener("click",toggleForm);
closeFormButton.addEventListener("click",toggleForm)
addBookButton.addEventListener("click",submitForm)


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
  // let userStatus = document.getElementById('userStatus').value;

  addBookToLibrary(userBook, userAuthor, userPage);
  document.forms[0].reset();
  toggleForm();
  displayAll();
}

function toggleForm(){
  addBookForm.classList.toggle("hide-form")
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
  eachIndex = 0;
  for (e in myLibrary) {
    books.innerHTML += "<div class='book-card'>" + "<div class= 'card-info'>" +
      "<div class='card-top'><span class='title'>" + myLibrary[e].title + "</span>" +
      "<span class='author'> by " + myLibrary[e].author + "</span></div>" +
      "<div class='card-bottom'><span class='pages'>" + myLibrary[e].pages + " pages</span>" + "</div> </div>" +
      "<div style='background: darkred; color: white; padding: 7px; cursor: pointer; display: " + editDisplay + "' onclick='deleteBook(" + eachIndex + ")'> Delete</div></div>"
      +"<div style='background: green; color: yellow; padding: 7px; cursor: pointer; display: " + editDisplay + "' onclick='readStatus(" + eachIndex + ")'> Read ✔</div></div>";
    
      eachIndex++;
  };
}

function deleteBook(item) {
  myLibrary.splice(item, 1);
  displayAll();
};

function readStatus(item){ 
 let eachCard = document.getElementsByClassName("card-info");
 return eachCard[item].style.setProperty("text-decoration","line-through");

}
 
let book5= new Book("Harr Potter", " jk roland", " 234", 'false');
let book1 = new Book("The Client", "John Grisham", "498", "Yes");
let book2 = new Book("A Tale of Two Cities", "Charles Dickens", "835", "No");
let book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "218", "Yes");
let book4 = new Book("Breathless", "Dean Koontz", "434", "Yes");
myLibrary.push(book1);
myLibrary.push(book2);
// myLibrary.push(book3);
// myLibrary.push(book4);
// myLibrary.push(book5);

displayAll();