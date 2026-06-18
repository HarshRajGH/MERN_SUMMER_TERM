import {useState} from 'react';
function Home({addToCart}) {
    const [counter, setCounter] = useState(0);
    const [btnText, setBtnText] = useState("Shop Now");
    return (
        <div className="page">
            <section className="hero">
                <div className="herotext">
                    <h1>Welcome to KeyShop</h1>
                    <p>Your one-stop shop for all your key needs. We offer a wide range of keys, from traditional to smart keys, and provide expert key cutting and replacement services.</p>
                    <button onClick={() => {
                        setCounter(counter + 1);
                        setBtnText("Clicked " + (counter + 1) + " times");
                    }}>{btnText}</button>
                </div>

                <div className="heroimage">
                    <img src="/images/image.png"  alt="Key Shop" />
                </div>

                {/*Product section */}
            </section>
            <section className="products-section">
                <div className="products-header">
                    <h2>Our Popular Products</h2>
                    <p>Explore our wide selection of keys and accessories.</p>
                </div>
                <div className="productGrid">
                    <div className="product-card">
                        <div className="product-image">
                            <img src="/images/product1.jpg" alt="Traditional Key" />
                            <span className="badge">Best Seller</span>
                        </div>
                        <div className="product-content">
                            <h3>Traditional Key</h3>
                            <p>High-quality traditional keys for your home and office.</p>
                            <div className="product-footer">
                                <strong className="price">$5.99</strong>
                                <button className="add-btn" onClick={addToCart}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <img src="/images/product2.jpg" alt="Smart Key" />
                            <span className="badge badge-premium">Premium</span>
                        </div>
                        <div className="product-content">
                            <h3>Smart Key</h3>
                            <p>Advanced smart keys with enhanced security features.</p>
                            <div className="product-footer">
                                <strong className="price">$19.99</strong>
                                <button className="add-btn" onClick={addToCart}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-image">
                            <img src="/images/product3.jpg" alt="Key Accessories" />
                            <span className="badge badge-new">New</span>
                        </div>
                        <div className="product-content">
                            <h3>Key Accessories</h3>
                            <p>Stylish keychains and accessories to complement your keys.</p>
                            <div className="product-footer">
                                <strong className="price">$9.99</strong>
                                <button className="add-btn" onClick={addToCart}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About section */}
            <section className="about-section">
                <div className="about-content">
                    <h2>Why Choose KeyShop</h2>
                    <p>At KeyShop, we are dedicated to providing our customers with the best key products and services. Our team of experts is always ready to assist you with your key needs, whether it's cutting a new key or replacing a lost one.</p>
                    <p>We pride ourselves on our commitment to quality and customer satisfaction. Visit us today and experience the KeyShop difference!</p>
                </div>
                <div className="about-image">
                    <img src="/images/product1.jpg" alt="About Key Shop" />
                </div>
            </section>
        </div>
    );
}

export default Home;
