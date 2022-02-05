import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [cart, setCart] = useCart();
    const history = useHistory();
    const handleRemove = key => {
        const newCart = cart.filter(products => products.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }
    const handleProccedToShipping = () => {
        // setCart([]);
        // clearTheCart()
        history.push('/shipping')
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleProccedToShipping} className="btn-regular">Procced to Shipping</button>
                </Cart>
            </div>

        </div>

    );
};

export default OrderReview;