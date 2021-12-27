import './App.css';
import loupe from "./images/loupe.png"
import cat_image1_mobile from "./images/cat_image1_mobile.png"
import cat_image1_desktop from "./images/cat_image1_desktop.png"
import minnows from "./images/cat_treats_fd_minnows_01 3.png"
import cat_image2_mobile from "./images/cat_image2_mobile.png"
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="burger" onclick="this.classList.toggle('active');"></button>
        <h1 id="company-name">PUBLIC GOODS</h1>
        <div>
          <img id="loupe" src={loupe} alt="magnifying glass" />
        </div>
        <div id="cart-display">
          Cart 0
        </div>
      </header>

      <body>
        <div id="free-cat">
          <div id="cat-image1-mobile">
            <img src={cat_image1_mobile} alt="cat with treat" />
          </div>
          <div id="cat-image1-desktop">
            <img src={cat_image1_desktop} alt="cat with treat" />
          </div>
          <div id="treat-your-pet">
            <h2>Treat your pet (and you). It's on us!</h2>
            <p>Treat your pet to a healthy treat for <b>free</b> to kick of your Public
            Goods trial membership.</p>
            <h3 id="public-goods-member">See what it's like to be a Public Goods member.</h3>
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
            <div id="free-offer-desktop">
              Claim your free offer
          </div>
          </div>
        </div>

        <div id="minnows">
          <h5 id="our-treat-desktop">OUR TREAT</h5>
          <div id="minnows-mobile">
            <h5 id="our-treat-mobile">OUR TREAT</h5>
            <img src={minnows} alt="dried minnows treat" />
            <h4 id="treat-name">Freeze Dried Minnows</h4>
            <p>Healthy ingredients with nothing to hide.</p>
          </div>
          <div id="minnows-desktop">
            <img src={minnows} alt="dried minnows treat" />
            <h4 id="treat-name">Freeze Dried Minnows</h4>
            <p>Healthy ingredients with nothing to hide.</p>
          </div>
        </div>
          
        <div id="membership-info">
          <div>
            <img id="cat2-mobile" src={cat_image2_mobile} alt="cat high five" />
          </div>
          <div>
            <h4>PET-APPROVED</h4>
            <h4>It feels good to be a member</h4>
            <p>After your free trial, become a full-time member with
            benefits for $59 a year.</p>
            <ul id="checkmark-bullets">
              <li>Cancel anytime during your free trial.</li>
              <li>Free shipping on orders over $45.</li>
              <li>Direct-to-consumer prices on hundreds of premium products.</li>
            </ul>
          </div>
          
        </div>

        <div id="bottom-button-container">
          <div id="free-offer">
            Claim your free offer
          </div>
          <div id="bottom-buttons">
            <i class="bi bi-chevron-left"></i>
            <i class="bi bi-chevron-right"></i>
            <i class="bi bi-box-arrow-up"></i>
            <i class="bi bi-book"></i>
            <i class="bi bi-app"></i>
            <hr id="bottom-bar" />
          </div>

        </div>
      </body>
    </div>
  );
}

export default App;