import React, { Component } from 'react'
import {Container ,Card, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  

export default class ProductDetails extends Component {
  render() {
   const product = this.props.product
   return (
      <div className="App">
<Container className='p-4'>
<Col md="8">
<Card>
<Card.Img vaiant="top" src={product.thumbnail}/>
<Card.Body>
<Card.Title>{product.title}</Card.Title>
<Card.Text>
    Price - {"$" + product.price}
</Card.Text>

<Card.Text>Description - {product.description}</Card.Text>
<Card.Text style={{color: 'red'}}>Discount - {product.discountPercentage + "%"}</Card.Text>
<Card.Text>Rating - {product.rating}</Card.Text>
<Card.Text>{product.stock} in Stock</Card.Text>
</Card.Body>
</Card>
</Col>
</Container>
</div>
    )
  }
}

