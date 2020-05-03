import React from 'react'
import ProductCard from './productCard'

export default class cartProducts extends React.Component {
    state = {
        products: []
      }
    render() {
        return <ProductsList products={this.state.products}/>
    }
}

function ProductsList({ products }) {
    return(
        <div className="col" >
          {products.map((product) => (
            <ProductCard product={product} />))}
        </div>
    );
}