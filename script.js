/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */

const liList = document.getElementById('li-list');
const liAdd = document.getElementById('li-add');
const liContact = document.getElementById('li-contact');
const list = document.getElementById('list');
const addNew = document.getElementById('addNew');
const contact = document.getElementById('contact');

liList.addEventListener('click', (e) => {
  e.preventDefault();
  list.style.display = 'block';
  addNew.style.display = 'none';
  contact.style.display = 'none';
});

liAdd.addEventListener('click', (e) => {
  e.preventDefault();
  addNew.style.display = 'block';
  list.style.display = 'none';
  contact.style.display = 'none';
});

liContact.addEventListener('click', (e) => {
  e.preventDefault();
  contact.style.display = 'flex';
  addNew.style.display = 'none';
  list.style.display = 'none';
});

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

class Layout {
  static displayBooks() {
    const storedBooks = StoreBookData.getBooksData();
    storedBooks.map((book) => Layout.bookList(book));
  }

  static bookList(book) {
    const collection = document.getElementById('collection');
    collection.innerHTML += `
    <li id='${book.id}' class='listItem'>
      <p>"${book.title}" by ${book.author} </p>
      <button id='delete' type='button' onclick ='Layout.deleteBook(${book.id})'>Remove</button>
    </li>
`;
  }

  static deleteBook(bookId) {
    StoreBookData.removeBook(bookId);
    const booksId = document.getElementById(bookId);
    booksId.remove();
  }
}

document.addEventListener('DOMContentLoaded', Layout.displayBooks);

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const id = new Date().getTime();
  const title = document.getElementById('book_title').value;
  const author = document.getElementById('book_author').value;

  if (title !== '' && author !== '') {
    const book = new Book(id, title, author);
    Layout.bookList(book);
    StoreBookData.addBook(book);
    document.getElementById('form').reset();
  }
});

class StoreBookData {
  static getBooksData() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = StoreBookData.getBooksData();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(bookId) {
    const books = StoreBookData.getBooksData();
    const newArray = books.filter((book) => book.id !== bookId);
    localStorage.setItem('books', JSON.stringify(newArray));
  }
}
