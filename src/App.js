import './App.css';
import loupe from "./images/loupe.png"
import cat_image1_mobile from "./images/cat_image1_mobile.png"
import minnows from "./images/cat_treats_fd_minnows_01 3.png"
import cat_image2_mobile from "./images/cat_image2_mobile.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="burger" onclick="this.classList.toggle('active');"></button>
        <h1 id="company-name">PUBLIC GOODS</h1>
        <div>
          <img id="loupe" src={loupe} />
        </div>
        <div id="cart-display">
          Cart 0
        </div>
      </header>
      <body>
        <img src={cat_image1_mobile}></img>
        <h2>Treat your pet (and you). It's on us!</h2>
        <p>Treat your pet to a healthy treat for <b>free</b> to kick of your Public
        Goods trial membership.</p>
        <h3>See what it's like to be a Public Goods member.</h3>
        <ul>
          <li>Included in your bundle is a free 2-week membership that gives you
            unlimited access to our entire collection of sustainable essentials.
          </li>
          <br></br>
          <li>
            Take a load off. We make it easy for you to make better choices. Always
            included: eco-friendly products you can trust.
          </li>
        </ul>
        <div id="minnows">
          <h5 id="our-treat">OUR TREAT</h5>
          <img src={minnows} />
          <h4 id="treat-name">Freeze Dried Minnows</h4>
          <p>Healthy ingredients with nothing to hide.</p>
        </div>
        <img id="cat2-mobile" src={cat_image2_mobile} />
      </body>
    </div>
  );
}

export default App;