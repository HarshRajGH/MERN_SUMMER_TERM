import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Home from './pages/Home';
import Products from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import './App.css';

function App() {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(product) {
        setCartItems((previousItems) => {
            const productExists = previousItems.find((item) => item.id === product.id);
            if (productExists) {
                return previousItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }

            return [...previousItems, { ...product, quantity: 1 }];
        });
    }

    function updateCartItem(id, quantity) {
        if (quantity <= 0) {
            setCartItems((previousItems) => previousItems.filter((item) => item.id !== id));
            return;
        }

        setCartItems((previousItems) =>
            previousItems.map((item) => (item.id === id ? { ...item, quantity } : item))
        );
    }

    function removeFromCart(id) {
        setCartItems((previousItems) => previousItems.filter((item) => item.id !== id));
    }

    function clearCart() {
        setCartItems([]);
    }

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <BrowserRouter>
            <div className="App">
                <Header cartItems={cartItems} cartCount={cartCount} />
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
                                    onUpdateQuantity={updateCartItem}
                                    onRemoveItem={removeFromCart}
                                    onClearCart={clearCart}
                                />
                            }
                        />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;