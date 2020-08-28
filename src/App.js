import React, { useState } from 'react';
import './App.css';

function App() {
    const [products] = useState([
      {
        name: 'AA Battery',
        cost: '$2.99',
        image: 'https://exposupplies.co.uk/wp-content/uploads/100494.jpg',
      },
      {
        name: 'Blanket',
        cost: '$19.99',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQca4lKnePlg7EvPz5t1IDMQUltjBTGyjVIEA&usqp=CAU',

      },
      {
        name: 'Blanket',
        cost: '$19.99',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQca4lKnePlg7EvPz5t1IDMQUltjBTGyjVIEA&usqp=CAU',

      },
    ]);

  return (
    <div className="App">
      <h1>Products</h1>
      <div className="products">
      {
        products.map((product) => (
          <div>
        <h3>{product.name}</h3>
        <h4>{product.cost}</h4>
        <img src={product.image} alt={product.name} />
        <button>Add to Cart</button>
      </div> 
        )) 
      }
      </div>
    </div>
  );
}

export default App;
