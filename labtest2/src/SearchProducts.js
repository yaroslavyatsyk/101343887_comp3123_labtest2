
import React from 'react'
import axios from 'axios'

export default function SearchProducts({ category, setCategory, setProducts }) {
  const url = `https://dummyjson.com/products/?category = ${category}`

  const searchProducts = e => {
    if (e.key === "Enter") {
      axios.get(url).then(res => {
        setProducts(res.data)
        console.log(res.data)
      })
      setCategory('')
    }
  }

  return (
    <div className="search">
      <input
        type="text"
        onKeyDown={searchProducts}
        onChange={e => setCategory(e.target.value)}
        placeholder="Enter Category of Products"
        value={category}
      />
    </div>
  )
}