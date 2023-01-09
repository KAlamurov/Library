let myLibrary = [];

function Book(title, author, pages, read) {
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

    displayBooks();
}

function displayBooks() {

    const bookTable = document.getElementById('books');
    const firstRow = document.getElementById("first");
    bookTable.replaceChildren(firstRow);
    const read = "Not yet";

    for (let i = 0; i < myLibrary.length; i++) {

        const row = bookTable.insertRow(-1);
        const cell = row.insertCell(-1);
        const cell2 = row.insertCell(-1);
        const cell3 = row.insertCell(-1);
        const cell4 = row.insertCell(-1);
        const cell5 = row.insertCell(-1);
        const showTitle = document.createTextNode(myLibrary[i].title);
        const showAuthor = document.createTextNode(myLibrary[i].author);
        const showPages = document.createTextNode(myLibrary[i].pages);
        const showRead = document.createTextNode(read);
        cell.appendChild(showTitle);
        cell2.appendChild(showAuthor);
        cell3.appendChild(showPages);
        cell4.appendChild(showRead);
        const delButton = document.createElement("button");
        delButton.textContent = "Delete";
        delButton.onclick = () => {
            myLibrary.splice(i, 1);
            displayBooks();
        }
        cell5.appendChild(delButton);
    }
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