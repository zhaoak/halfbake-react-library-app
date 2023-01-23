import './Author.css';

function Author({
  author: { first_name: firstName, middle_name: middleName, last_name: lastName },
}) {
  return (
    <span className="author">
      {firstName} {middleName} {lastName}
    </span>
  );
}

export default Author;
