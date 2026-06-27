import { Link } from "react-router-dom";

function Buylater({ buyLaterItems = [], onRemoveItem, onMoveToCart }) {
    return (
        <section className="buyLaterPage">
            <div className="buyLaterHeader">
                <div>
                    <h1>Buy Later</h1>
                    <p className="buyLaterIntro">
                        Items you want to save for later are listed here. You can move them back to the cart or remove them entirely.
                    </p>
                </div>
            </div>

            {buyLaterItems.length === 0 ? (
                <div className="buyLaterEmpty">
                    <h1>No items saved for later</h1>
                    <p>Browse our store and move items to Buy Later when you're not ready to purchase yet.</p>
                    <Link to="/" className="continueShoppingBtn">Continue Shopping</Link>
                </div>
            ) : (
                <div className="buyLaterGrid">
                    {buyLaterItems.map((item) => (
                        <article className="buyLaterItem" key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <div className="buyLaterInfo">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                            <div className="buyLaterActions">
                                <button className="add-btn" onClick={() => onMoveToCart(item.id)}>
                                    Move to Cart
                                </button>
                                <button className="removeBtn" onClick={() => onRemoveItem(item.id)}>
                                    Remove
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Buylater;
