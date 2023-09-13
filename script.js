let bookIdCounter = 0;
const myLibrary = [];

function Book(title, author, pageCount) {
    this.id = bookIdCounter++;
    this.title = title;
    this.author = author;
    this.pageCount = pageCount
    this.readBool = false
}

function addBookToLibrary(Book) {
    myLibrary.push(Book)
}

function displayLibrary() {
    const cardGrid = document.getElementById("card-grid")
    // Clear cards
    cardGrid.innerHTML = ""
    // Loop through library, displaying cards for each book
    myLibrary.forEach(book => {
        // Create Card Eleormments
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

        const cardReadBool = document.createElement("input")
        cardReadBool.type = "checkbox"
        cardReadBool.classList.add("form-check-input")
        cardReadBool.checked = book.readBool
        cardReadBool.addEventListener("change", () => {book.readBool = cardReadBool.checked})
        const cardReadBoolLabel = document.createElement("label")
        cardReadBoolLabel.classList.add("form-check-label")
        cardReadBoolLabel.textContent = "Read?"
        const cardReadBoolDiv = document.createElement("div")
        cardReadBoolDiv.classList.add("form-check")
        cardReadBoolDiv.appendChild(cardReadBool)
        cardReadBoolDiv.appendChild(cardReadBoolLabel)

        const removeButton = document.createElement("button")
        removeButton.classList.add("btn", "btn-danger")
        removeButton.textContent = "Remove"
        removeButton.addEventListener("click", () => {removeBookFromLibrary(book.id)})
    

        // Append content elements to card
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardAuthor)
        cardBody.appendChild(cardPageCount)
        cardBody.appendChild(cardReadBoolDiv)
        cardBody.appendChild(removeButton)

        cardInner.appendChild(cardBody)
        card.appendChild(cardInner)

        // append Card to Card Grid
        cardGrid.appendChild(card)
    })
}


function  removeBookFromLibrary(bookId) {
    const index = myLibrary.findIndex(book => book.id === bookId)
    if (index != -1) {
        myLibrary.splice(index, 1)
        const cardGrid = document.getElementById("card-grid")
        cardGrid.innerHTML = ""
        displayLibrary()
    }  
}

const testBooka = new Book('The 5 Rules of Gold', 'Ben Hogan', '100')
const testBookb = new Book('The Lord of the Rings', 'J.R.R. Tolkein', '100')
const testBookc = new Book('Mistborn', 'Brandon Sanderson', '100')
const testBookd = new Book('On the Heresies', 'Saint Ignatius', '100')
const testBook = new Book('The Wheel of Time', 'Robert Jordan', '100')

addBookToLibrary(testBook)
addBookToLibrary(testBooka)
addBookToLibrary(testBookb)
addBookToLibrary(testBookc)
addBookToLibrary(testBookd)

displayLibrary()

const addBookForm = document.getElementById("addBookForm")
addBookForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const addBookModal = document.getElementById("addBookModal")
    const title = document.getElementById("bookTitle").value
    const author = document.getElementById("bookAuthor").value
    const pageCount = document.getElementById("bookPageCount").value
    const newBook = new Book(title, author, pageCount)
    addBookToLibrary(newBook)
    displayLibrary()
})