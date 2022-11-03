import logo from './logo.svg';
import './App.css';
import {bookInfo} from './bookinfo';


function App({ title, author, description, cover }) {
  for(let book of bookInfo){
    <p>bookInfo.author</p>
  }
  return (<div>

      <h2>Title: {title}</h2>
      <h4>Author: {author}</h4>
      <p>Description: {description}</p>
      <img src={cover}></img>


  </div>
  );
}

export default App;
