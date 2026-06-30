import { useState } from 'react';

function Home({ addToCart }) {
    const [counter, setCounter] = useState(0);
    const [btnText, setBtnText] = useState('Shop Now');

    const products = [
        {
            id: 1,
            name: 'Traditional Key Chain',
            description: 'Colorful and cute design.',
            price: 99,
            image: '/images/product1.png',
            badge: 'New',
        },
        {
            id: 2,
            name: 'Smart Key Chain',
            description: 'Customized with your name.',
            price: 149,
            image: '/images/product2.png',
            badge: 'Popular',
        },
        {
            id: 3,
            name: 'Key Accessories',
            description: 'Premium and classy look.',
            price: 199,
            image: '/images/product3.png',
            badge: 'Sale',
        },
        {
            id: 4,
            name: 'Vintage Brass Key Set',
            description: 'Antique finish with rich detailing.',
            price: 249,
            image: '/images/product4.png',
            badge: 'Best Seller',
        },
        {
            id: 5,
            name: 'Luxury Leather Key Pouch',
            description: 'Royal leather pouch for safe storage.',
            price: 179,
            image: '/images/product5.png',
            badge: 'Premium',
        },
        {
            id: 6,
            name: 'Crystal Key Charm',
            description: 'Elegant crystal charm for your keys.',
            price: 129,
            image: '/images/product6.png',
            badge: 'Limited',
        },
        {
            id: 7,
            name: 'Metallic Heart Keychain',
            description: 'Stylish heart-shaped keychain with a polished finish.',
            price: 89,
            image: '/images/product7.png',
            badge: 'Trending',
        },
        {
            id: 8,
            name: 'Mini Cartoon Keychain',
            description: 'Cute cartoon design perfect for everyday use.',
            price: 69,
            image: '/images/product8.png',
            badge: 'Fresh',
        },
    ];

    return (
        <div className="page">
            <section className="hero">
                <div className="herotext">
                    <h1>Welcome to KeyShop</h1>
                    <p>Your one-stop shop for all your key needs. We offer a wide range of keys, from traditional to smart keys, and provide expert key cutting and replacement services.</p>
                    <button
                        onClick={() => {
                            setCounter(counter + 1);
                            setBtnText(`Clicked ${counter + 1} times`);
                        }}
                    >
                        {btnText}
                    </button>
                </div>

                <div className="heroimage">
                    <img src="/images/hero-keychain.png" alt="Key Shop" />
                </div>
            </section>

            <section className="products-section">
                <div className="products-header">
                    <h2>Our Popular Products</h2>
                    <p>Explore our wide selection of keys and accessories.</p>
                </div>
                <div className="productGrid">
                    {products.map((product) => (
                        <div className="product-card" key={product.id}>
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                                <span className="badge">{product.badge}</span>
                            </div>
                            <div className="product-content">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <div className="product-footer">
                                    <strong className="price">${product.price.toFixed(2)}</strong>
                                    <button className="add-btn" onClick={() => addToCart(product)}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="about-section">
                <div className="about-content">
                    <h2>Why Choose KeyShop</h2>
                    <p>At KeyShop, we are dedicated to providing our customers with the best key products and services. Our team of experts is always ready to assist you with your key needs, whether it's cutting a new key or replacing a lost one.</p>
                    <p>We pride ourselves on our commitment to quality and customer satisfaction. Visit us today and experience the KeyShop difference!</p>
                </div>
                <div className="about-image">
                    <img src="/images/about-keychain.png" alt="About Key Shop" />
                </div>
            </section>
        </div>
    );
}

export default Home;
