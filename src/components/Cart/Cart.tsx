import React, { ChangeEvent } from 'react'
import { CartProducts, cartProducts, removeFromCart } from '../../slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import './Cart.css'
export const Cart = () => {
    const cartItems = useSelector(cartProducts)
    const dispatch = useDispatch()
    const onQuantityChange = (event: ChangeEvent<HTMLInputElement>, id: number) => {
        console.log(id, event.target.value)

    }
    return (
        <>





            <h1>Shopping Cart</h1>

            <div className="shopping-cart">

                <div className="column-labels">
                    <label className="product-image">Image</label>
                    <label className="product-details">Product</label>
                    <label className="product-price">Price</label>
                    <label className="product-quantity">Quantity</label>
                    <label className="product-removal">Remove</label>
                    <label className="product-line-price">Total</label>
                </div>


                {cartItems.map((cartItem) => (
                    <div className="product">
                        <div className="product-image">
                            <img src={cartItem.image} />
                        </div>
                        <div className="product-details">
                            <div className="product-title">{cartItem.name}</div>

                        </div>
                        <div className="product-price">{cartItem.price}</div>
                        <div className="product-quantity">
                            <input type="number" value={cartItem.quantity} min={1} onChange={(e) => onQuantityChange(e, cartItem.id)} />
                        </div>
                        <div className="product-removal">
                            <button className="remove-product" onClick={() => {
                                dispatch(removeFromCart(cartItem.id))
                                console.log('first')
                            }}>
                                Remove
                            </button>
                        </div>
                        <div className="product-line-price">{cartItem.quantity! * cartItem.price}</div>
                    </div>
                ))}




                <div className="totals">
                    <div className="totals-item">
                        <label>Subtotal</label>
                        <div className="totals-value" id="cart-subtotal">71.97</div>
                    </div>
                    <div className="totals-item">
                        <label>Tax (5%)</label>
                        <div className="totals-value" id="cart-tax">3.60</div>
                    </div>
                    <div className="totals-item">
                        <label>Shipping</label>
                        <div className="totals-value" id="cart-shipping">15.00</div>
                    </div>
                    <div className="totals-item totals-item-total">
                        <label>Grand Total</label>
                        <div className="totals-value" id="cart-total">90.57</div>
                    </div>
                </div>

                <button className="checkout">Checkout</button>

            </div>


        </>
    )
}
