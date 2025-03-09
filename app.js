// importo i moduli
import { PhysicalBook, EBook } from "./model/book.js";
import User from "./model/user.js";
import PremiumUser from "./model/premium-user.js";
import Library from "./model/library.js";

// creo le istanze dalle classi definite negli altri .js
const book1 = new PhysicalBook('123415', 'iliade', 'omero', 'h27');
const book2 = new EBook('456346', 'odissea', 'omero', 'pdf');

const user1 = new User('1', 'andrea');
const user2 = new PremiumUser('2', 'hugo');

// l'user2 ha un limite esteso di prestito
user2.extendBorrowLimit(10);

// crea una biblioteca (library) e aggiunge libri e utenti
const library = new Library('berio');
library.addBook(book1);
library.addBook(book2);
library.addUser(user1);
library.addUser(user2);

// stampa le informazioni della biblioteca
console.log(library.toString());

// gestisce il prestito e la restituzione di libri
library.borrowBook(user2, book1);
library.borrowBook(user2, book2);
library.returnBook(user2, book1);

// stampa l'elenco dei libri e degli utenti
library.listBooks();
library.listUsers();