import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Home from './pages/Home';
import Products from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Buylater from './pages/Buylater';
import './App.css';
import toast,{ Toaster } from 'react-hot-toast';

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [buyLaterItems, setBuyLaterItems] = useState([]);

    function addToCart(product) {
        const existingItem = cartItems.find((item) => item.id === product.id);
        const currentQuantity = existingItem ? existingItem.quantity : 0;

        if (currentQuantity >= product.stock) {
            toast.error(`${product.name} is out of stock.`, { id: 'cart-toast' });
            return;
        }

        setCartItems((previousItems) => {
            const productExists = previousItems.find((item) => item.id === product.id);
            if (productExists) {
                return previousItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }

            return [...previousItems, { ...product, quantity: 1 }];
        });
        toast.success(`${product.name} added to cart!`, { id: 'cart-toast' });
    }

    function updateCartItem(id, quantity) {
        const item = cartItems.find((cartItem) => cartItem.id === id);

        if (quantity <= 0) {
            setCartItems((previousItems) => previousItems.filter((item) => item.id !== id));
            return;
        }

        if (item && quantity > item.stock) {
            toast.error(`${item.name} is out of stock.`, { id: 'cart-toast' });
            return;
        }

        setCartItems((previousItems) =>
            previousItems.map((item) => (item.id === id ? { ...item, quantity } : item))
        );
    }

    function removeFromCart(id) {
        setCartItems((previousItems) => previousItems.filter((item) => item.id !== id));
        toast.error('Item removed from cart!', { id: 'cart-toast' });
    }

    function moveToBuyLater(id) {
        setCartItems((previousItems) => {
            const itemToMove = previousItems.find((item) => item.id === id);
            if (!itemToMove) return previousItems;

            setBuyLaterItems((previousLater) => {
                const exists = previousLater.find((item) => item.id === id);
                return exists ? previousLater : [...previousLater, itemToMove];
            });

            return previousItems.filter((item) => item.id !== id);
        });
        toast.success('Item moved to buy later!', { id: 'cart-toast' });
    }

    function moveToCart(id) {
        setBuyLaterItems((previousLater) => {
            const itemToMove = previousLater.find((item) => item.id === id);
            if (!itemToMove) return previousLater;

            const existingCartItem = cartItems.find((item) => item.id === id);
            const currentQuantity = existingCartItem ? existingCartItem.quantity : 0;

            if (currentQuantity + itemToMove.quantity > itemToMove.stock) {
                toast.error(`${itemToMove.name} is out of stock.`, { id: 'cart-toast' });
                return previousLater;
            }

            setCartItems((previousItems) => {
                const exists = previousItems.find((item) => item.id === id);
                if (exists) {
                    return previousItems.map((item) =>
                        item.id === id ? { ...item, quantity: item.quantity + itemToMove.quantity } : item
                    );
                }
                return [...previousItems, itemToMove];
            });

            return previousLater.filter((item) => item.id !== id);
        });
    }

    function removeFromBuyLater(id) {
        setBuyLaterItems((previousItems) => previousItems.filter((item) => item.id !== id));
        toast.error('Item removed from buy later!', { id: 'cart-toast' });
    }

    function clearCart() {
        setCartItems([]);
        toast.success('Cart cleared!', { id: 'cart-toast' });
    }

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const buyLaterCount = buyLaterItems.length;

    return (
        <BrowserRouter>
            <div className="App">
                <Header cartCount={cartCount} buyLaterCount={buyLaterCount} />
                <main>
                    <Routes>
                        <Route path="/" element={<Home addToCart={addToCart} />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route
                            path="/cart"
                            element={
                                <Cart
                                    cartItems={cartItems}
                                    buyLaterItems={buyLaterItems}
                                    onUpdateQuantity={updateCartItem}
                                    onRemoveItem={removeFromCart}
                                    onMoveToBuyLater={moveToBuyLater}
                                    onRemoveBuyLater={removeFromBuyLater}
                                    onClearCart={clearCart}
                                />
                            }
                        />
                        <Route
                            path="/buy-later"
                            element={
                                <Buylater
                                    buyLaterItems={buyLaterItems}
                                    onRemoveItem={removeFromBuyLater}
                                    onMoveToCart={moveToCart}
                                />
                            }
                        />
                    </Routes>
                </main>
                <Toaster position="bottom-center" reverseOrder={false} />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;