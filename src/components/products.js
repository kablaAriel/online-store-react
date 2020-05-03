import React from 'react'
import ProductCard from './productCard'

export default class Products extends React.Component {
    state = {
        products: []
      }
      componentDidMount() {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then((data) => {
          this.setState({ products: data })
        })
        .catch(console.log)
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