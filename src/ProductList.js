
import ProductDetails from "./ProductDetails"

export default function ProductList(products) {
    return(

<>
      <h2>The List of Products</h2>
        
      {
                    products.products.map(p => (
                        <ProductDetails key={p.id} product={p}></ProductDetails>
                    ))
                }



      </>
    ) 
        
}
