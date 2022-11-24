import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';
import { useState } from 'react';
import axios from "axios"

function App() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('')

  
  const searchProducts = (event) => {

    if (event.key === "Enter") {
      axios.get(`https://dummyjson.com/products/category/${category}`).then((res) => {
        setProducts(res.data.products)
        console.log(res.data.products)
      })
      setCategory('')
    }
  }

  
  return (
    <div className="App">

<select 
          value={category}
          onChange={event => setCategory(event.target.value)}
          onKeyPress={searchProducts}
          placeholder="Enter category"
          >
            <option value="----">Select Category</option>
            <option value="laptops">Laptops</option>
            <option value="smartphones">Smartphones</option>
            <option value="groceries">Groceries</option>
            <option value="fragrances">Fragrances</option>
            <option value="skincare">Skin Care</option>
            </select>
    
        <ProductList products={products}/>
    </div>
  );
}

export default App;
