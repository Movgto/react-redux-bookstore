import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../features/books/bookSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const books = useSelector((state) => state.books.data);
  const dispatch = useDispatch();

  const addBook = (title, author) => {
    const newBook = {
      id: books.length,
      title,
      author,
    };
    dispatch(add(newBook));
  };

  return (
    <form>
      <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="" selected disabled hidden>-- Category --</option>
        <option value="horror">Horror</option>
        <option value="fantasy">Fantasy</option>
        <option value="sci-fi">Science Fiction</option>
        <option value="mystery">Mystery</option>
        <option value="romance">Romance</option>
        <option value="classic">Classic</option>
      </select>
      <button type="button" onClick={() => addBook(title, author, category)}>Add Book</button>
    </form>
  );
};

export default Form;
