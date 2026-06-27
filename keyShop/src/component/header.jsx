import {Link} from 'react-router-dom';
function Header({cartCount, buyLaterCount}) {
    return (
        <header>
            <h1>Key Shop</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart🛒({cartCount})</Link></li>
                    <li>
                        <Link to="/buy-later">
                            Buy Later🕒
                            {buyLaterCount > 0 && <span className="notifyDot" />}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;