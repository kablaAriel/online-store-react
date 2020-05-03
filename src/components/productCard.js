import React from 'react'

const ProductCard = ({ product }) => {
  return(
    <div className="card text-center" >
        <h5 className="card-title "> {product.name.toUpperCase()} </h5>
        <img className="card-img-top" src={product.img} alt="Card  cap" ></img>
      <div class="card-body">
        <p className="card-text" >{product.description}</p>
        <div className="btn btn-primary" > {product.price}₪ </div>
      </div>
    </div>
  );
}

export default ProductCard;