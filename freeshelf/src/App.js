import logo from './logo.svg';
import './App.css';
import { bookInfo } from './bookinfo';
import { useState } from 'react'




function App() {
  const [expanded, setExpanded] = useState(false)
  const handleClick = (event) => {
    setExpanded(!expanded)
  }

  const bookList = bookInfo.map((book) => {
    return (
      <section id="books">
        <div>
          <h2>{book.title}</h2>
          <h4>{book.author}</h4>
          <p>{book.shortDescription}</p>
          <button onClick={handleClick}>{expanded ? 'Less' : 'More'} information</button>
          {expanded && (
            <div>{book.detailedDescription}</div>
          )}
        </div>
        <img className="cover" src={book.coverImageUrl}></img>
      </section>
    )
  })

  return <div>
    {bookList}
  </div>
}

export default App;
