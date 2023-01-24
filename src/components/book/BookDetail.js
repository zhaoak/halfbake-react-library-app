import Book from './Book';
import { useBookDetail } from '../../hooks/useBookDetail';
import { useParams, Link } from 'react-router-dom';

function BookDetail() {
  const id = useParams();
  const { book, loading, error } = useBookDetail(id);

  if (error)
    return (
      <>
        <h1>Something went wrong :(</h1> <h2>{error}</h2>
        <Link to="/catalog">Go to catalog?</Link>
      </>
    );

  if (loading) return <h3>Loading book...</h3>;

  return (
    <>
      <Book book={book} showDetail />
      <Link to="/catalog">Back to Catalog</Link>
    </>
  );
}

export default BookDetail;
