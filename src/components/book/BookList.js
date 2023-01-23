import Book from '../../components/book/Book';
import { useBooks } from '../../hooks/useBooks';

function BookList() {
  const { error, loading, books } = useBooks();
  if (error)
    return (
      <>
        <h1>Something went wrong :(</h1> <h2>{error}</h2>
      </>
    );
  if (loading) return <h1>Loading books...</h1>;
  return (
    <ul className="book-list" aria-label="book list">
      {books.map((book) => (
        <li key={book.book_id}>
          <Book book={book} />
        </li>
      ))}
    </ul>
  );
}

export default BookList;
