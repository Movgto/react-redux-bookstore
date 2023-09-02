import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook as add, fetchBooks } from '../features/books/bookSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const addBook = (title, author, category) => {
    if (title && author && category) {
      const bookObj = {
        title,
        author,
        category,
      };
      dispatch(add(bookObj))
        .then(() => dispatch(fetchBooks()));
      setAuthor('');
      setTitle('');
    }
  };

  return (
    <div id="form-ctr">
      <h2>ADD NEW BOOK</h2>
      <form>
        <input id="title" type="text" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input id="author" type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <select id="category" onChange={(e) => setCategory(e.target.value)}>
          <option value="" selected disabled hidden>Category</option>
          <option value="horror">Horror</option>
          <option value="fantasy">Fantasy</option>
          <option value="sci-fi">Science Fiction</option>
          <option value="mystery">Mystery</option>
          <option value="romance">Romance</option>
          <option value="classic">Classic</option>
        </select>
        <button type="button" onClick={() => addBook(title, author, category)}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
