import './App.css';
import loupe from "./images/loupe.png"
import cat_image1_mobile from "./images/cat_image1_mobile.png"
import cat_image1_desktop from "./images/cat_image1_desktop.png"
import minnows from "./images/cat_treats_fd_minnows_01 3.png"
import cat_image2_mobile from "./images/cat_image2_mobile.png"
import cat_image2_desktop from "./images/cat_image2_desktop.png"
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="burger" onclick="this.classList.toggle('active');"></button>
        <h1 className="company-name">PUBLIC GOODS</h1>
        <div>
          <img className="loupe" src={loupe} alt="magnifying glass" />
        </div>
        <div className="cart-display">
          Cart 0
        </div>
      </header>

      <body>
        <div className="free-cat">
          <div className="cat-image1-mobile">
            <img src={cat_image1_mobile} alt="cat with treat" />
          </div>
          <div>
            <img className="cat-image1-desktop" src={cat_image1_desktop} alt="cat with treat" />
          </div>
          <div className="treat-your-pet">
            <h2>Treat your pet (and you). <br></br> It's on us!</h2>
            <p>Treat your pet to a healthy treat for <b>free</b> to kick of your Public
            Goods trial membership.</p>
            <h3 className="public-goods-member">See what it's like to be a Public Goods member.</h3>
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
            <div className="free-offer-desktop">
              Claim your free offer
          </div>
          </div>
        </div>

        <div className="minnows">
          <h5 className="our-treat-desktop">OUR TREAT</h5>
          <div className="minnows-mobile">
            <h5 className="our-treat-mobile">OUR TREAT</h5>
            <img src={minnows} alt="dried minnows treat" />
            <h4 className="treat-name">Freeze Dried Minnows</h4>
            <p>Healthy ingredients with nothing to hclassNamee.</p>
          </div>
          <div className="minnows-desktop">
            <img src={minnows} alt="dried minnows treat" />
            <h4 className="treat-name">Freeze Dried Minnows</h4>
            <p>Healthy ingredients with nothing to hclassNamee.</p>
          </div>
        </div>
          
        <div className="membership-info">
          <div className="cat-image2-mobile">
            <img  src={cat_image2_mobile} alt="cat high five" />
          </div>
          <div>
            <img className="cat-image2-desktop" src={cat_image2_desktop} alt="cat high five" />
          </div>
          <div className="pet-approved">
            <h4>PET-APPROVED</h4>
            <h4>It feels good to be a member</h4>
            <p>After your free trial, become a full-time member with
            benefits for $59 a year.</p>
            <ul className="checkmark-bullets">
              <li>Cancel anytime during your free trial.</li>
              <li>Free shipping on orders over $45.</li>
              <li>Direct-to-consumer prices on hundreds of premium products.</li>
            </ul>
          </div>
        </div>

        <div className="bottom-button-container">
          <div className="free-offer">
            Claim your free offer
          </div>
          <div className="bottom-buttons">
            <i class="bi bi-chevron-left"></i>
            <i class="bi bi-chevron-right"></i>
            <i class="bi bi-box-arrow-up"></i>
            <i class="bi bi-book"></i>
            <i class="bi bi-app"></i>
            <hr className="bottom-bar" />
          </div>

        </div>
      </body>
    </div>
  );
}

export default App;