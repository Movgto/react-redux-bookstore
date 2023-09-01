import '../stylesheets/books.scss';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.books.data);

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
