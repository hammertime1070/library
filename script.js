class Book {
    constructor(id, title, author, pageCount) {
        this.id = id
        this.title = title
        this.author = author
        this.pageCount = pageCount
    }
}

class Library {
    constructor() {
        this.collection = []
        this.bookIdCounter = 0
    }

    addBookToLibrary(title, author, pageCount) {
        const newBook = new Book(this.bookIdCounter++, title, author, pageCount)
        this.collection.push(newBook)
    }

    removeBookFromLibrary(bookId) {
        const index = this.collection.findIndex(book => book.id === bookId)
        if (index != -1) {
            this.collection.splice(index, 1)
            const cardGrid = document.getElementById("card-grid")
            cardGrid.innerHTML = ""
            this.displayLibrary()
        }  
    }

    displayLibrary() {
        const cardGrid = document.getElementById("card-grid")
        // Clear cards
        cardGrid.innerHTML = ""
        // Loop through library, displaying cards for each book
        this.collection.forEach(book => {
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
            removeButton.addEventListener("click", () => {this.removeBookFromLibrary(book.id)})
        
    
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
}

const myLibrary = new Library()

myLibrary.addBookToLibrary('The 5 Rules of Gold', 'Ben Hogan', '100')
myLibrary.addBookToLibrary('The Lord of the Rings', 'J.R.R. Tolkein', '100')
myLibrary.addBookToLibrary('Mistborn', 'Brandon Sanderson', '100')
myLibrary.addBookToLibrary('On the Heresies', 'Saint Ignatius', '100')
myLibrary.addBookToLibrary('The Wheel of Time', 'Robert Jordan', '100')
myLibrary.displayLibrary()

const addBookForm = document.getElementById("addBookForm")
addBookForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const addBookModal = document.getElementById("addBookModal")
    const title = document.getElementById("bookTitle").value
    const author = document.getElementById("bookAuthor").value
    const pageCount = document.getElementById("bookPageCount").value
    myLibrary.addBookToLibrary(title, author, pageCount)
    myLibrary.displayLibrary()
})
