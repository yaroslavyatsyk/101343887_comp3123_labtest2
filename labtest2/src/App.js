import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';
import { useState } from 'react';
import SearchProducts from './SearchProducts';

function App() {
  const [category, setCategory] = useState('')
  const [products, setProducts] = useState([])
  
  return (
    <div className="App">
    <SearchProducts category={category} setProducts={setProducts} setCategory={setCategory} />
        <ProductList products={products}/>
    </div>
  );
}

export default App;
