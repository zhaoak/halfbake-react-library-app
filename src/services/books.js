import { client, checkError } from './client';

export async function getBooks(query) {
  let request = client.from('books').select(`*, authors (*)`).order('title').limit(100);
  if (query) {
    request = request.ilike('title', `%${query}%`);
  }
  const resp = await request;
  return checkError(resp);
}

export async function getBookById(id) {
  const resp = await client.from('books').select(`*, authors (*)`).match({ book_id: id }).single();
  return checkError(resp);
}
