import { useState } from 'react';
import '../stylesheets/books.scss';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../features/books/bookSlice';

const Books = () => {
  const books = useSelector((state) => state.books.data);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBook = (title, author) => {
    const newBook = {
      id: books.length,
      title,
      author,
    };
    dispatch(add(newBook));
  };

  const removeBook = (id) => {
    dispatch(remove(id));
  };

  return (
    <div id="books-ctr">
      <div id="booklist">
        {
          books.map((book) => (
            <div className="book-item" key={book.id} id={(`book${book.id}`)}>
              <h3>{book.title}</h3>
              <h3>{book.author}</h3>
              <button type="button" onClick={() => removeBook(book.id)}>Delete</button>
            </div>
          ))
        }
      </div>
      <form>
        <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button type="button" onClick={() => addBook(title, author)}>Add Book</button>
      </form>
    </div>
  );
};

export default Books;
