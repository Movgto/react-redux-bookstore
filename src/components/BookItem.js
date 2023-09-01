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
    <div className="Lesson-Panel" key={book.id} id={(`book${book.id}`)}>
      <div className="book-info">
        <h3 className="School-of">{book.category}</h3>
        <h3 className="Title Text-Style-5">{book.title}</h3>
        <h3 className="Suzanne-Collins Text-Style-8">{book.author}</h3>
        <button type="button" onClick={() => removeBook(book.id)}>Delete</button>
      </div>
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
