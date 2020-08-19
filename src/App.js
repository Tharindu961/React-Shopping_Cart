import React, { useState } from 'react';
import './App.css';

function App() {
    const [products] = useState([
      
    ])

  return (
    <div className="App">
      <h1>Products</h1>
      <div>
        <h3>AA Battery</h3>
        <h4>$2.99</h4>
        <img src="https://exposupplies.co.uk/wp-content/uploads/100494.jpg" />
        <button>Add to Cart</button>
      </div>

      <div>
        <h3>Blanket</h3>
        <h4>$19.99</h4>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQca4lKnePlg7EvPz5t1IDMQUltjBTGyjVIEA&usqp=CAU" />
        <button>Add to Cart</button>
      </div>
      
      
    </div>
  );
}

export default App;
