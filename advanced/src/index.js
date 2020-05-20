import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ProductTable from './ProductTable';

const products = [
          {category:'Electronics' , name:'Phone', price:'500'},
          {category:'Electronics' , name:'Tablet', price:'800'},
          {category:'Electronics' , name:'Tv', price:'650'},
          {category:'Electronics' , name:'Microwave', price:'340'},
          {category:'Clothes' , name:'Polo', price:'80'},
          {category:'Clothes' , name:'Suite', price:'260'},
          {category:'Clothes' , name:'shoes', price:'140'},
          {category:'Clothes' , name:'T-shirt', price:'65'}]

          
ReactDOM.render(
  <React.StrictMode>
    < ProductTable item={products} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
