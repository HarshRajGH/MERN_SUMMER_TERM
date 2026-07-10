import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

function Cart({ cartItems = [], onUpdateQuantity, onRemoveItem, onMoveToBuyLater, onClearCart }) {
    const [pendingRemoveItem, setPendingRemoveItem] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState("");
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });
    const [loginError, setLoginError] = useState({});
    const [loginMessage, setLoginMessage] = useState("");

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleClearCart = async () => {
        const result = await Swal.fire({
            title: "Clear Cart",
            text: "Are you sure you want to clear your cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, clear it",
            cancelButtonText: "No, keep it",
            reverseButtons: true,
        });

        if (result.isConfirmed) {
            onClearCart?.();
        }
    };

    const handleConfirmRemove = () => {
        if (!pendingRemoveItem) return;
        onRemoveItem?.(pendingRemoveItem.id);
        setPendingRemoveItem(null);
    };

    const handleMoveToBuyLater = () => {
        if (!pendingRemoveItem) return;
        onMoveToBuyLater?.(pendingRemoveItem.id);
        setPendingRemoveItem(null);
    };

    const handleCancelRemove = () => {
        setPendingRemoveItem(null);
    };

    const handleDecreaseQuantity = (item) => {
        if (item.quantity <= 1) {
            setPendingRemoveItem(item);
            return;
        }

        onUpdateQuantity?.(item.id, item.quantity - 1);
    };

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        setLoginError((prevError) => ({
            ...prevError,
            [name]: "",
        }));

        setLoginMessage("");
    };

    const validateLogin = () => {
        const errors = {};
        const trimmedUsername = loginData.username.trim();

        if (!trimmedUsername) {
            errors.username = "Username is required";
        } else if (!/^[a-zA-Z0-9]+$/.test(trimmedUsername)) {
            errors.username = "Username must be alphanumeric";
        }

        if (!loginData.password) {
            errors.password = "Password is required";
        } else if (loginData.password.length < 6) {
            errors.password = "Password must be at least 6 characters long";
        }

        setLoginError(errors);
        return errors;
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const errors = validateLogin();

        if (Object.keys(errors).length > 0) {
            return;
        }

        setIsLoggedIn(true);
        setLoggedInUser(loginData.username.trim());
        setLoginMessage("Login successful!");
        setLoginError({});
        setShowLogin(false);

        void Swal.fire({
            title: "Checkout started",
            text: `Thanks ${loginData.username.trim()}! Your order is being prepared.`,
            icon: "success",
            confirmButtonText: "Continue",
        });
    };

    const handleCheckout = () => {
        if (!isLoggedIn) {
            setShowLogin(true);
            setLoginMessage("Please log in to continue checkout.");
            return;
        }

        void Swal.fire({
            title: "Checkout started",
            text: `Thanks ${loggedInUser}! Your order is being prepared.`,
            icon: "success",
            confirmButtonText: "Continue",
        });
    };

    const handleCloseLogin = () => {
        setShowLogin(false);
        setLoginData({ username: "", password: "" });
        setLoginError({});
        setLoginMessage("");
    };

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
                    <p>{totalItems} item{totalItems > 1 ? "s" : ""} selected</p>
                </div>
                <button className="clearCartBtn" onClick={handleClearCart}>Clear Cart</button>
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
                                        <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                                </div>
                            </div>
                            <button className="removeBtn" onClick={() => setPendingRemoveItem(item)}>Remove</button>
                        </article>
                    ))}
                </div>

                <aside className="cartSummary">
                    <h2>Order Summary</h2>
                    <div className="summaryRow total">
                        <span>Total Items</span>
                        <span>{totalItems}</span>
                    </div>
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
                    <button className="checkoutBtn" onClick={handleCheckout}>
                        {isLoggedIn ? "Proceed to Checkout" : "Login to Checkout"}
                    </button>
                </aside>
            </div>

            {pendingRemoveItem && (
                <div className="confirmationOverlay">
                    <div className="confirmationModal">
                        <h3>Are you sure?</h3>
                        <p>
                            Do you want to remove <strong>{pendingRemoveItem.name}</strong> from your cart,
                            or move it to Buy Later?
                        </p>
                        <div className="confirmationActions">
                            <button className="removeBtn modalRemoveBtn" onClick={handleConfirmRemove}>
                                Remove
                            </button>
                            <button className="clearCartBtn modalMoveBtn" onClick={handleMoveToBuyLater}>
                                Buy Later
                            </button>
                            <button className="continueShoppingBtn modalCancelBtn" onClick={handleCancelRemove}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showLogin && (
                <div className="modal">
                    <div className="modalBody">
                        <div className="modalHeader">
                            <h3>Login to Checkout</h3>
                            <button type="button" className="closeBtn" onClick={handleCloseLogin}>
                                ×
                            </button>
                        </div>
                        <form onSubmit={handleLogin}>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={loginData.username}
                                onChange={handleLoginChange}
                            />
                            {loginError.username && <p className="errorText">{loginError.username}</p>}
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={loginData.password}
                                onChange={handleLoginChange}
                            />
                            {loginError.password && <p className="errorText">{loginError.password}</p>}
                            {loginMessage && <p className="loginMessage">{loginMessage}</p>}
                            <div className="modalActions">
                                <button type="submit">Login</button>
                                <button type="button" className="cancelBtn" onClick={handleCloseLogin}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Cart;
