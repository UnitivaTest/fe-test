import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Product } from './service';

function App() {
  const [ products, setProducts] = React.useState<Product[]>([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>Your exercise here!</p>
    </div>
  );
}

export default App;
