let toRead = [];
let read = []

class Book{
    constructor(title, author, summary, dateRead){
        this.title = (typeof title !== 'undefined') ?  title : "unknown title";
        this.author = (typeof author !== 'undefined') ? author : "unknown author";
        this.summary = (typeof summary !== 'undefined') ? summary : "unkown summary";
        this.dateRead = (typeof dateRead !== 'undefined') ? dateRead : "unknown date read";
    }

}

function addBook(){
    toRead.push('hi');
    console.log(toRead)
}