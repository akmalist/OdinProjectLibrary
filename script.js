// document.write(myLibrary);

// Add a button on each book’s display to remove the book from the library.
// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
// Add a button on each book’s display to change its read status.
// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.


let myLibrary = [];
function Book(title, author, pages, status) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  
}
//create new obj with Book constructor adds to library array
//displays on the page
function addBookToLibrary(title, author, pages, status){
  let newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook)
 
}



function submitForm(ev){
    ev.preventDefault();

  let userBook = document.getElementById('title').value;
  let userAuthor = document.getElementById('author').value;
  let userPage = document.getElementById('pages').value;
  let userStatus = document.getElementById('userStatus').value;

  addBookToLibrary(userBook, userAuthor, userPage, userStatus);
  document.forms[0].reset();
  console.log(myLibrary);

  // let pre = document.querySelector('#msg');
  // pre.textContent = myLibrary.map(item =>{
  //   console.log(item.title,item.author,item.pages,item.status)
  // })
  
 //display each item from array
  $.each(myLibrary, function(index, value){
    $("#all-books").append(
     '<button>' + index + ": " + value.title + ' ' + value.author+  '</button>' + '<br>' 
      );
});

//   let html = "<table border='1|1'>";

// for (let i =0; i<myLibrary.length; i++){
//   html+="<tr>";
//   html+="<td>"+myLibrary[i].title+"</td>";

  
//   html+="</tr>";
// }
  // localStorage.setItem('My Librari', JSON.stringify(myLibrary) );


}

const book1 = new Book("Harr Potter", " jk roland", " 234", " not read yet");
// const book1done = book1.info();
myLibrary.push(book1);

// Well, think about what you want the app to do. 
// You want it to show you all the books you've added and also show any new books you add. So that means you need it to render your existing books when it loads (in this case you don't have any, so it won't render anything anyway), but it also needs to render each book you add, so make sure you're telling it to do that when you add a book. 
// You're on the right track, you'll just need to play around a little more.

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('btn').addEventListener('click', submitForm);
});



// myLibrary.forEach(render);

// function render(item, index) {
//   // console.log(item, index )
//   document.getElementById("box").innerHTML += index + 1 + ":" + item + "<br>";
// }



// let pre = document.querySelector('#myUl');
// pre.textContent = '\n' + JSON.stringify(myLibrary, '\t', 2);
// localStorage.setItem('My Librari', JSON.stringify(myLibrary) );

// let html = "<table border='1|1'>";

// for (let i =0; i<myLibrary.length; i++){
//   html+="<tr>";
//   html+="<td>"+myLibrary[i].title+"</td>";

  
//   html+="</tr>";
// }



// function addBookToLibrary(ev) {
//   ev.preventDefault();
//   let userBook = document.getElementById('title').value;
//   let userAuthor = document.getElementById('author').value;
//   let userpage = document.getElementById('pages').value;
//   let userStatus = document.getElementById('userStatus')

//   // do stuff here
//   // let userBook = window.prompt("Please add your favourite book?");
//   // let userAuthor = window.prompt("Who is author?");
//   // let userpage = window.prompt("How many pages?");
//   // let userStatus = window.prompt("Have you finished reading it?");


//   const newBook1 = new Book(userBook, userAuthor, userpage, userStatus);
//   const newBook2 = newBook1.info();
//   myLibrary.push(newBook2);
//   document.forms[0].reset();
//   console.log(myLibrary);
// }

// document.addEventListener('DOMContentLoaded', ()=>{
//   document.getElementById('btn').addEventListener('click', addBookToLibrary);
// });



// $("button").on("click", function(){
//   console.log(addBookToLibrary)
// })



// myLibrary.input = $('#input').val();