# Library App

## Demo

[https://alchemy-react-library-app.netlify.app](https://alchemy-react-library-app.netlify.app)

### Learning Objectives

- Create the illusion of multiple pages in a Single Page Application routes by using react-router.
- Use `props.match.params` or the `useParams` hook to get the `:id` in a path for creating a List/Detail pattern with react-router.
- Use `<Link>` to create links that navigate a Single Page Application.

### Description

[Get started](https://github.com/alchemycodelab/react-library-app)

Your local library hired a developer to build an interface for their database of books. Unfortunately, the previous developer ended up taking another job while leaving the library app unfinished. Luckily, the main page components have been created. However, there's currently no way to navigate to the different pages as the app hasn't been configured with a router!

Your task is to finish off the remaining work by adding the necessary routes to the `App.jsx` file, as well as adding links to the different pages. You need to create the following routes:

- `/books`
  - This page lists all the books in the library's database.
- `/books/:id`
  - This page shows the details for a single book, such as its author and genre.

Take a look through the `components` directory to find the existing pages. Each book title in the book list should link to the corresponding book detail view. Note that you'll have to update the book detail view to use the ID that comes from the route path to be able to view different books.

### Acceptance Criteria

- A user can view a list of books
- A user can select a book from the list and see details about that book
- A user can click a link from the book detail page to go back to the list of books

### Rubric

| Task                                              | Points |
| ------------------------------------------------- | ------ |
| `/books` route                                    | 3      |
| `/books/:id` route                                | 3      |
| `BookDetails` gets the `id` from the URL path     | 2      |
| Book titles from list view `Link` to book details | 1      |
| "Back to Catalog" `Link` added to `BookDetails`   | 1      |
