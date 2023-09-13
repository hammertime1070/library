let bookIdCounter = 0;
const myLibrary = [];

function Book(title, author, pageCount) {
    this.id = bookIdCounter++;
    this.title = title;
    this.author = author;
    this.pageCount = pageCount
}

function addBookToLibrary(Book) {
    myLibrary.push(Book)
}

function displayLibrary() {
    const cardGrid = document.getElementById("card-grid")

    myLibrary.forEach(book => {
        // Create Card Elements
        const card = document.createElement("div")
        card.classList.add("col-lg-4", "col-md-6", "col-sm-12")

        const cardInner = document.createElement("div")
        cardInner.classList.add("card", "m-4", "p-1")

        const cardBody = document.createElement("div")
        cardBody.classList.add("card-body")

        const cardTitle = document.createElement("h5")
        cardTitle.classList.add("card-title")
        cardTitle.textContent = book.title

        const cardAuthor = document.createElement("p")
        cardAuthor.classList.add("card-text", "text-muted")
        cardAuthor.textContent = book.author

        const cardPageCount = document.createElement("p")
        cardPageCount.classList.add("card-text")
        cardPageCount.textContent = book.pageCount

        const removeButton = document.createElement("button")
        removeButton.classList.add("btn", "btn-danger")
        removeButton.textContent = "Remove"
        removeButton.addEventListener("click", () => {removeBookFromLibrary(book.id)})

        // Append content elements to card
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardAuthor)
        cardBody.appendChild(cardPageCount)
        cardBody.appendChild(removeButton)

        cardInner.appendChild(cardBody)
        card.appendChild(cardInner)

        // append Card to Card Grid
        cardGrid.appendChild(card)
    })
}


function  removeBookFromLibrary(bookId) {
    // TODO: Currently removing wrong book lol
    // Remove from Array
    myLibrary.splice(bookId, 1)
    // Clear Card Grid
    const cardGrid = document.getElementById("card-grid")
    cardGrid.innerHTML = ""
    // Display Card Grid again
    displayLibrary()
    
}

const testBooka = new Book('test', 'test author', '100')
const testBookb = new Book('test', 'test author', '100')
const testBookc = new Book('test', 'test author', '100')
const testBookd = new Book('test', 'test author', '100')
const testBook = new Book('test', 'test author', '100')

addBookToLibrary(testBook)
addBookToLibrary(testBooka)
addBookToLibrary(testBookb)
addBookToLibrary(testBookc)
addBookToLibrary(testBookd)

displayLibrary()