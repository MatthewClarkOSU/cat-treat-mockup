import './App.css';
import loupe from "./images/loupe.png"
import cat_image1_mobile from "./images/cat_image1_mobile.png"

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
      </body>
    </div>
  );
}

export default App;