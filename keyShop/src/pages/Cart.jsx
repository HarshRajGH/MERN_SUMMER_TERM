import { Link } from "react-router-dom";

function Cart({ cartItems = [], onUpdateQuantity, onRemoveItem, onClearCart }) {
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    if (cartItems.length === 0) {
        return (
            <section className="cartPage emptyCart">
                <h1>Your cart is empty</h1>
                <p>Add a few key accessories to get started.</p>
                <Link to="/" className="continueShoppingBtn">Continue Shopping</Link>
            </section>
        );
    }

    return (
        <section className="cartPage">
            <div className="cartHeader">
                <div>
                    <h1>Your Cart</h1>
                    <p>{cartItems.length} item{cartItems.length > 1 ? "s" : ""} selected</p>
                </div>
                <button className="clearCartBtn" onClick={onClearCart}>Clear Cart</button>
            </div>

            <div className="cartLayout">
                <div className="cartItems">
                    {cartItems.map((item) => (
                        <article className="cartItem" key={item.id}>
                            <img src={item.image} alt={item.name} className="cartItemImage" />
                            <div className="cartItemInfo">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <div className="cartItemFooter">
                                    <div className="quantityControls">
                                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                                </div>
                            </div>
                            <button className="removeBtn" onClick={() => onRemoveItem(item.id)}>Remove</button>
                        </article>
                    ))}
                </div>

                <aside className="cartSummary">
                    <h2>Order Summary</h2>
                    <div className="summaryRow">
                        <span>Subtotal</span>
                        <span>${totalAmount.toFixed(2)}</span>
                    </div>
                    <div className="summaryRow">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="summaryRow total">
                        <span>Total</span>
                        <span>${totalAmount.toFixed(2)}</span>
                    </div>
                    <button className="checkoutBtn">Checkout</button>
                </aside>
            </div>
        </section>
    );
}

export default Cart;
