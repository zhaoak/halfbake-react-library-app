import BookList from './components/book/BookList';
import './App.css';

import BookDetail from '../src/components/book/BookDetail.js';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';

function App() {
  // TODO: Add routes to books & views
  return (
    <BrowserRouter>
      <main className="container">
        <h1>Library Catalog</h1>
        <Switch>
          <Route path="/books/:id">
            <BookDetail />
          </Route>
          <Route exact path="/catalog">
            <BookList />
          </Route>
          <Route exact path="/">
            <h3>Welcome to the library of possibly fictional books!</h3>
            <Link to="/catalog">Enter</Link>
          </Route>
          <Route path="*">
            <h2>???what the heck??? did you doo???</h2>
            <Link to="/">Back to Home</Link>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
