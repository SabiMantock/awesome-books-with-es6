export default class StoreBookData {
  static getBooksData = () => {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook = (book) => {
    const books = StoreBookData.getBooksData();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

    static removeBook = (bookId) => {
      const books = StoreBookData.getBooksData();
      const newArray = books.filter((book) => book.id !== Number(bookId));
      localStorage.setItem('books', JSON.stringify(newArray));
    }
}
