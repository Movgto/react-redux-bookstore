import { useState, useEffect } from 'react';
import '../stylesheets/books.scss';

const Books = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBook = (title, author) => {
    const newBook = {
      id: data.length,
      title,
      author,
    }
    setData(
      [
        ...data,
        newBook,
      ]
    );
    console.log(data);
  };

  const removeBook = (id) => {
    setData(
      data.filter((book) => book.id !== id)
    );
  };

  useEffect(() => {
    setData(
      data.map((book, id) => {
        return ({
          ...book,
          id,
        });
      })
    );
  }, [data, setData])

  return (
    <div id="books-ctr">
      <div id="booklist">
        {
          data.map((book) => {
            return (
              <div class="book-item" id={("book" + book.id)}>
                <h3>{book.title}</h3>
                <h3>{book.author}</h3>
                <button type='button' onClick={() => removeBook(book.id)}>Delete</button>
              </div>
            );
          })
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