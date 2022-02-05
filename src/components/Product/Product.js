import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, stock, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="half-side">
                <h3 className="product-name">Product Name: {name}</h3>
                <p>By : {seller}</p>
                <h4>Price : {price}</h4>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-colour"
                    fullSymbol="fas fa-star icon-colour"
                    readonly></Rating>
                <h5>only {stock} left in stock - order soon</h5>
                <button onClick={() => props.handleAddToCart(props.product)}
                    className="btn-regular">{cartIcon} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;