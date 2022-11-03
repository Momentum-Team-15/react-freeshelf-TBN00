import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {bookInfo} from './bookinfo';



const root = ReactDOM.createRoot(document.getElementById('root'));
for (let book of bookInfo){
root.render(
  <React.StrictMode>
    <App title={book.title} author={book.author} description={book.shortDescription} cover={book.coverImageUrl}/>
  </React.StrictMode>
);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
