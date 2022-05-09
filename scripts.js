let myLibrary = [];

class Book{
    constructor(title, author, pageNum, isRead){
        this.title = title;
        this.author = author;
        this.pageNum = pageNum;
        this.isRead = isRead;
    }
}

function info(book){
    let readString = (book.isRead)? "read it already": "not read yet";
    return book.title + " by " + book.author + ", " + book.pageNum + " pages, " + readString;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function iterateThroughLibrary(){
    let returnableString = "";
    for (const book of myLibrary){
        returnableString += "\n" + info(book);
    }
    return returnableString;
}

addBookToLibrary(new Book("a", "a", "a", "a"));
addBookToLibrary(new Book("b", "b", "b", "b"));
addBookToLibrary(new Book("c", "c", "c", "c"));
console.log(myLibrary);
console.log(iterateThroughLibrary());