const myLibrary = [];

function Book(title, author, pageCount) {
    this.title = title,
    this.author = author,
    this.pageCount = pageCount
}

function addBookToLibrary(Book) {
    myLibrary.push(Book)
}

const testBook = Book('test', 'test author', '100')

function displayLibrary() {
    // Display the library using DOM
}