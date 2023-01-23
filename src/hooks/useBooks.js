import { useEffect, useState } from 'react';
import { getBooks } from '../services/books';

export function useBooks() {
  const [error, setError] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBooks();
        setBooks(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);

  return { error, books, loading };
}
