import logo from './logo.svg';
import './App.css';
import { bookInfo } from './bookinfo';

console.log(bookInfo.length)

function App() {
  const bookList = bookInfo.map((book) => {
    return (
      <div>
        <h2>Title: {book.title}</h2>
        <h4>Author: {book.author}</h4>
        <p>Description: {book.shortDescription}</p>
        <img src={book.coverImageUrl}></img>
      </div>
    )
  })

  return (<div>{bookList}</div>)
}

export default App;
