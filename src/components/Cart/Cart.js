import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        product.quantity = !product.quantity ? 1 : product.quantity;
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * .10;
    const grandTotal = total + tax + shipping;

    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <h3>Items Orders : {totalQuantity}</h3>
            <br />
            <p>Total {total.toFixed(2)}</p>
            <p>Shipping : {shipping}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            <p>Grand Total : {grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;