import Book from './modules/Book.js';
import dateTime from './modules/date.js';
import Layout from './modules/Layout.js';
import StoreBookData from './modules/StoreBookData.js';

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

window.onload = dateTime();