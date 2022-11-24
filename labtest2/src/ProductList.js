import React, { Component } from "react"
import axios from "axios"
import ProductDetails from "./ProductDetails"

export default class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
            
        }
    }

    componentDidMount = () => {
        this.getProducts()
    }

    getProducts = () => {
        axios.get("https://dummyjson.com/products").then(res => {
           
            const productList = res.data.products
            this.setState({...this.state, products : productList})
            console.log(this.state.products)
        })
    }
   
  render() {
    return (
      <>
      <h2>The List of Products</h2>
        
      {
                    this.state.products.map(p => (
                        <ProductDetails key={p.id} product={p}></ProductDetails>
                    ))
                }



      </>


    )
  }
}
