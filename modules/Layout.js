import StoreBookData from './StoreBookData.js';

export default class Layout {
  static displayBooks() {
    const storedBooks = StoreBookData.getBooksData();
    storedBooks.map((book) => Layout.bookList(book));
  }

  static bookList(book) {
    const collection = document.getElementById('collection');
    collection.innerHTML += `
    <li id='${book.id}' class='listItem'>
      <p>"${book.title}" by ${book.author} </p>
      <button class='delete' id='${book.id}' type='button'>Remove</button>
    </li>
`;
  }

  static deleteBook(bookId) {
    const booksId = document.getElementById(bookId);
    booksId.remove();
  }
}

document.addEventListener('DOMContentLoaded', Layout.displayBooks);

document.querySelector('#collection').addEventListener('click', (e) => {
  Layout.deleteBook(e.target.id);
  StoreBookData.removeBook(e.target.id);
});