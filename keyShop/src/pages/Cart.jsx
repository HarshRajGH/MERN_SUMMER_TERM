import {Link} from "react-router-dom";
function Cart({cartItems = []})
{
   const totalAmount = cartItems.reduce((total,item)=>total + item.price * item.quantity, 0);

   if (cartItems.length === 0){
    return (
        <section className="cartPage emptyCart">
            <h1>Empty</h1>
            <p>no items</p>
            <Link to="/" className="continueShoppingBtn">Continue Shopping</Link>
        </section>
    );
    }

    return (
        <section className="cartPage">
            <h1>Your Cart</h1>
            <p>Total: ${totalAmount.toFixed(2)}</p>
        </section>
    );
   }

export default Cart;
