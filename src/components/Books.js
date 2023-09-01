import { useEffect } from 'react';
import '../stylesheets/books.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../features/books/bookSlice';
import BookItem from './BookItem';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.books.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div id="books-ctr">
      <div id="booklist">
        {
          books.map((book) => (
            <BookItem book={book} key={book.id} />
          ))
        }
      </div>
      <Form />
    </div>
  );
};

export default Books;
