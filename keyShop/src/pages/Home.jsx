import {useState} from 'react';
function Home() {
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
            </section>
        </div>
    );
}

export default Home;
