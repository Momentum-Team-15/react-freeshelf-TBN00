import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import books from './bookinfo'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App bookInfo={books.books}/>
  </React.StrictMode>
);

