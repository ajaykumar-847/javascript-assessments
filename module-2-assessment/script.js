// Available books
let books = [
    { id: 1, title: "spiderman", author: "stanley", type: "fiction", available: true },
    { id: 2, title: 'batman', author: 'james cameron', type: 'fiction', available: true }
];
let bookId = 3;
displayBooks();



function displayBooks() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "<h2>Library Books</h2>";
    if (books.length === 0) {
        bookList.innerHTML += "<p>No books available.</p>";
    } else {
        books.forEach(book => {
            const status = book.available ? "Available" : "Not Available";
            bookList.innerHTML += `<div>ID: ${book.id} | Title: ${book.title} | Author: ${book.author} | Type: ${book.type} | Status: ${status}</div>`;
        });
    }
}

// function removeElement() {
//     const element = document.getElementsByClassName("book-list-1");
//     element.remove;
// }

// Function to add a new book
function addBook(title, author, type) {
    const newBook = {id: bookId++, title: title, author: author, type: type, available: true};
    books.push(newBook);
    // console.log("working");
    displayBooks();
}

// Function to handle borrow or return operations
function borrowOrReturnBook(bookId, authorName, action) {
    const book = books.find(book => book.id === parseInt(bookId));
    console.log("book = "+book);
    if (!book) {
        showError("Book not found.");
        return;
    }
    if (action === "borrow") {
        if (!book.available) {
            showError("Sorry! book cannot be borrowed.");
            return;
        }
        book.available = false;
    } 
    else if (action === "return") {
        if (book.available) {
            showError("Book is not borrowed.");
            return;
        }
        book.available = true;
    }
    // removeElement();
    displayBooks();
    showMessage(`Book ${action === "borrow" ? "borrowed" : "returned"} successfully.`);
}

// Function to show error message
function showError(message) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = message;
}

// Function to show success message
function showMessage(message) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = message;
}

// Event listener for adding a book
document.getElementById("book-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const type = document.getElementById("type").value;
    addBook(title, author, type);
    // console.log("value = ", title, author, type);
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
});

// Event listener for borrowing or returning a book
document.getElementById("borrow-return-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const bookId = document.getElementById("bookId").value;
    const authorName = document.getElementById("authorName").value;
    const action = document.getElementById("action").value;
    console.log("value = ", title, author, type);
    borrowOrReturnBook(bookId, authorName, action);
    // document.getElementById('bookId').value = '';
    // document.getElementById('authorName').value = '';
});

