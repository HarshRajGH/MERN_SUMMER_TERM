import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './component/header'
import Footer from './component/footer'
import Home from './pages/Home'
import Products from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

// jsx is nothing its just a javascript extension and get html as output
// and it is used in react to create components and user interfaces.

export default App;