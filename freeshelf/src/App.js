import './App.css';
import { useState } from 'react'




const App = ({ bookInfo }) => {
  return (
    <section className="book-information">
      {bookInfo.map((detail) => (
        <div className='book-card'>
          <div>
            <h2>{detail.title}</h2>
            <h3>{detail.author}</h3>
            <p>{detail.shortDescription}</p>
            <BookSection
              publisher={detail.publisher}
              pubDate={detail.publicationDate}
              description={detail.detailedDescription}
              url={detail.url} />
          </div>
          <div className='cover-container'>
            <img className='cover' src={detail.coverImageUrl} />
          </div>
        </div>
      ))}
    </section>
  )
}

const BookSection = ({ publisher, pubDate, description, url }) => {
  const [expanded, setExpanded] = useState(false)
  const handleClick = (event) => {
    setExpanded(!expanded)
  }

  return (
    <div className='descriptions'>
      <div className='button'>
        <button onClick={handleClick}>
          {expanded ? '▼ Less' : '▶ More'} Info
        </button>
      </div>
      {expanded && 
      <div>
        <br></br>
        URL: <a href={url}>{url}</a>
        <p>Publisher: {publisher}</p>
        <p>Publication Date: {pubDate}</p>
        <p>Full description: {description}</p>
      </div>
        }


    </div>
  )
}



export default App;