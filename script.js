const editBooksButton = document.querySelector("#edit-books");
const showFormButton = document.querySelector("#show-form");
const addBookForm = document.querySelector("#add-book");
const closeFormButton = document.querySelector("#close-form")
const books = document.querySelector("#all-books");
const addBookButton = document.querySelector("#btn")
const editDisplay = "none";

editBooksButton.addEventListener("click", toggleEdit);
showFormButton.addEventListener("click", toggleForm);
closeFormButton.addEventListener("click", toggleForm)
addBookButton.addEventListener("click", submitForm)


const myLibrary = [];

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
  const newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook)

}

function submitForm(ev) {
  ev.preventDefault();
  const userBook = document.getElementById('title').value;
  const userAuthor = document.getElementById('author').value;
  const userPage = document.getElementById('pages').value;

  if (userBook != "" && userAuthor != "" && typeof (Number(userPage)) === "number") {
    addBookToLibrary(userBook, userAuthor, userPage);
    document.forms[0].reset();
    toggleForm();
    displayAll();
    //saving to local storage
    localStorage.setItem('MyLibraryList', JSON.stringify(myLibrary));
    
  } else {
    alert("Please fill all fields")
  }
}

function toggleForm() {
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

function deleteBook(item) {
  myLibrary.splice(item, 1);
  displayAll();
};

function readStatus(item) {
  const eachCard = document.getElementsByClassName("card-info");
  return eachCard[item].style.setProperty("text-decoration", "line-through");

}

function displayAll() {

  books.innerHTML = "";
  eachIndex = 0;
  for (e in myLibrary) {
    books.innerHTML += "<div class='book-card'>" + "<div class= 'card-info'>" +
      "<div class='card-top'><span class='title'>" + myLibrary[e].title + "</span>" +
      "<span class='author'> by " + myLibrary[e].author + "</span></div>" +
      "<div class='card-bottom'><span class='pages'>" + myLibrary[e].pages + " pages</span>" + "</div> </div>" +
      "<div class = 'edit-buttons' style='display: " + editDisplay + "' onclick='deleteBook(" + eachIndex + ")'> Delete</div>" +
      "<div class = 'edit-buttons'  style='background: rgb(48, 185, 128);  cursor: pointer; display: " + editDisplay + "' onclick='readStatus(" + eachIndex + ")'> Read ✔</div></div></div>"
    eachIndex++;
  };
}



const book5 = new Book("Harr Potter", " jk roland", " 234", 'false');
const book1 = new Book("The Client", "John Grisham", "498", "Yes");
const book2 = new Book("A Tale of Two Cities", "Charles Dickens", "835", "No");
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "218", "Yes");
const book4 = new Book("Breathless", "Dean Koontz", "434", "Yes");
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);
myLibrary.push(book5);

displayAll();