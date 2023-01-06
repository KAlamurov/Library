let myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

   const title = document.getElementById('title').value;
   const author = document.getElementById('author').value;
   const pages = document.getElementById('pages').value;
   const read = "Not yet";

    const userBook = new Book(`${title}`, `${author}`, `${pages}`, `${read}`);
   myLibrary.push(userBook);

    const bookTable = document.getElementById('books');
  
        const row = bookTable.insertRow(-1);
        const cell = row.insertCell(-1);
        const cell2 = row.insertCell(-1);
        const cell3 = row.insertCell(-1);
        const cell4 = row.insertCell(-1);
        cell.innerHTML = title;
        cell2.innerHTML = author;
        cell3.innerHTML = pages;
        cell4.innerHTML = read;

}

function openForm() {
    document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

const form = document.querySelector(".btn");

form.addEventListener("click", btnclick, false);

function btnclick(event) {
    event.preventDefault();
    closeForm();
}