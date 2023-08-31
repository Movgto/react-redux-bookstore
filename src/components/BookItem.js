import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBooks, deleteBook as remove } from '../features/books/bookSlice';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  const removeBook = (id) => {
    dispatch(remove(id))
      .then(() => dispatch(fetchBooks()));
  };

  return (
    <div className="book-item" key={book.id} id={(`book${book.id}`)}>
      <h3>{book.title}</h3>
      <h3>{book.author}</h3>
      <button type="button" onClick={() => removeBook(book.id)}>Delete</button>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
