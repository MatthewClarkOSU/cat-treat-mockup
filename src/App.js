import './App.css';
// import 'font-awesome/css/font-awesome.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import loupe from "./images/loupe.png"
import cat_image1_mobile from "./images/cat_image1_mobile.png"
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button class="burger" onclick="this.classList.toggle('active');"></button>
        <h1>Public Goods</h1>
        <div>
          <img id="loupe" src={loupe} />
        </div>
        <div>
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