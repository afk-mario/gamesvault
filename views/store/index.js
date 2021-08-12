// import PropTypes from 'prop-types';
import { Page } from 'components/layouts';

function Store() {
  return (
    <Page>
      <div className="container page-container content-header">
        <div className="heading-container">
          <h1 className="page-header">Store</h1>
        </div>
        <div className="nav-container">
          <nav>
            <ul className="store-navigation horizontal-nav nav">
              <li>
                <a href="#" className="active">
                  Latest
                </a>
              </li>
              <li>
                <a href="#" className="inactive">
                  Top Sellers
                </a>
              </li>
              <li>
                <a href="#" className="inactive">
                  Specials
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="container page-container main-container">
        <section className="sidebar">
          <div className="search">
            <form id="search">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
            </form>
          </div>
          <nav>
            <h1>Tag</h1>
            <ul className="tag-navigation vertical-nav nav">
              <li>
                <a href="#">Action</a>
              </li>
              <li>
                <a href="#">Adventure</a>
              </li>
              <li>
                <a href="#">Indie</a>
              </li>
              <li>
                <a href="#">RPG</a>
              </li>
              <li>
                <a href="#">Strategy</a>
              </li>
              <li>
                <a href="#">Open World</a>
              </li>
              <li>
                <a href="#">Shooter</a>
              </li>
              <li>
                <a href="#">Puzzle</a>
              </li>
              <li>
                <a href="#">First Person</a>
              </li>
              <li>
                <a href="#">Narration</a>
              </li>
              <li>
                <a href="#">Simulation</a>
              </li>
              <li>
                <a href="#">Casual</a>
              </li>
              <li>
                <a href="#">Turn-Based</a>
              </li>
              <li>
                <a href="#">Exploration</a>
              </li>
              <li>
                <a href="#">Horror</a>
              </li>
              <li>
                <a href="#">Platformer</a>
              </li>
              <li>
                <a href="#">Party</a>
              </li>
              <li>
                <a href="#">Survival</a>
              </li>
              <li>
                <a href="#">Trivia</a>
              </li>
              <li>
                <a href="#">City Builder</a>
              </li>
              <li>
                <a href="#">Stealth</a>
              </li>
              <li>
                <a href="#">Fighting</a>
              </li>
              <li>
                <a href="#">Comedy</a>
              </li>
              <li>
                <a href="#">Action-Adventure</a>
              </li>
              <li>
                <a href="#">Racing</a>
              </li>
              <li>
                <a href="#">Rogue-Lite</a>
              </li>
              <li>
                <a href="#">Card Game</a>
              </li>
              <li>
                <a href="#">Sports</a>
              </li>
            </ul>
          </nav>
          <nav>
            <h1>Developer</h1>
            <ul className="developer-navigation vertical-nav nav">
              <li>
                <a href="#">Action</a>
              </li>
              <li>
                <a href="#">Adventure</a>
              </li>
              <li>
                <a href="#">Indie</a>
              </li>
              <li>
                <a href="#">RPG</a>
              </li>
              <li>
                <a href="#">Strategy</a>
              </li>
            </ul>
          </nav>
        </section>

        <main className="main">
          <div className="main-content grid">
            <div className="cell">
              <a className="game-link" href="#">
                <img
                  src="https://source.unsplash.com/174x232?random?sig=1"
                  alt="game name cover"
                  className="game-cover"
                />
                <span className="game-details">
                  <span className="game-info">
                    <h2 className="game-title">Awesome Game Title</h2>
                    <h3 className="game-developer">Developer Name</h3>
                  </span>
                  <span className="price-cell">
                    <span className="game-price eth">0.01</span>
                  </span>
                </span>
              </a>
            </div>
            <div className="cell">
              <a className="game-link" href="#">
                <img
                  src="https://source.unsplash.com/174x232?random?sig=2"
                  alt="game name cover"
                  className="game-cover"
                />
                <span className="game-details">
                  <span className="game-info">
                    <h2 className="game-title">Awesome Game Title</h2>
                    <h3 className="game-developer">Developer Name</h3>
                  </span>
                  <span className="price-cell">
                    <span className="game-price eth">0.01</span>
                  </span>
                </span>
              </a>
            </div>
            <div className="cell">
              <a className="game-link" href="#">
                <img
                  src="https://source.unsplash.com/174x232?random?sig=3"
                  alt="game name cover"
                  className="game-cover"
                />
                <span className="game-details">
                  <span className="game-info">
                    <h2 className="game-title">Awesome Game Title</h2>
                    <h3 className="game-developer">Developer Name</h3>
                  </span>
                  <span className="price-cell">
                    <span className="game-price eth">0.01</span>
                  </span>
                </span>
              </a>
            </div>
            <div className="cell">
              <a className="game-link" href="#">
                <img
                  src="https://source.unsplash.com/174x232?random?sig=4"
                  alt="game name cover"
                  className="game-cover"
                />
                <span className="game-details">
                  <span className="game-info">
                    <h2 className="game-title">Awesome Game Title</h2>
                    <h3 className="game-developer">Developer Name</h3>
                  </span>
                  <span className="price-cell">
                    <span className="game-price eth">0.01</span>
                  </span>
                </span>
              </a>
            </div>
            <div className="cell">
              <a className="game-link" href="#">
                <img
                  src="https://source.unsplash.com/174x232?random?sig=5"
                  alt="game name cover"
                  className="game-cover"
                />
                <span className="game-details">
                  <span className="game-info">
                    <h2 className="game-title">Awesome Game Title</h2>
                    <h3 className="game-developer">Developer Name</h3>
                  </span>
                  <span className="price-cell">
                    <span className="game-price eth">0.01</span>
                  </span>
                </span>
              </a>
            </div>
            <div className="cell">
              <a className="game-link" href="#">
                <img
                  src="https://source.unsplash.com/174x232?random?sig=6"
                  alt="game name cover"
                  className="game-cover"
                />
                <span className="game-details">
                  <span className="game-info">
                    <h2 className="game-title">Awesome Game Title</h2>
                    <h3 className="game-developer">Developer Name</h3>
                  </span>
                  <span className="price-cell">
                    <span className="game-price eth">0.01</span>
                  </span>
                </span>
              </a>
            </div>
            <div className="cell">
              <a className="game-link" href="#">
                <img
                  src="https://source.unsplash.com/174x232?random?sig=7"
                  alt="game name cover"
                  className="game-cover"
                />
                <span className="game-details">
                  <span className="game-info">
                    <h2 className="game-title">Awesome Game Title</h2>
                    <h3 className="game-developer">Developer Name</h3>
                  </span>
                  <span className="price-cell">
                    <span className="game-price eth">0.01</span>
                  </span>
                </span>
              </a>
            </div>
            <div className="cell">
              <a className="game-link" href="#">
                <img
                  src="https://source.unsplash.com/174x232?random?sig=8"
                  alt="game name cover"
                  className="game-cover"
                />
                <span className="game-details">
                  <span className="game-info">
                    <h2 className="game-title">Awesome Game Title</h2>
                    <h3 className="game-developer">Developer Name</h3>
                  </span>
                  <span className="price-cell">
                    <span className="game-price eth">0.01</span>
                  </span>
                </span>
              </a>
            </div>
            <div className="cell">
              <a className="game-link" href="#">
                <img
                  src="https://source.unsplash.com/174x232?random?sig=9"
                  alt="game name cover"
                  className="game-cover"
                />
                <span className="game-details">
                  <span className="game-info">
                    <h2 className="game-title">Awesome Game Title</h2>
                    <h3 className="game-developer">Developer Name</h3>
                  </span>
                  <span className="price-cell">
                    <span className="game-price eth">0.01</span>
                  </span>
                </span>
              </a>
            </div>
            <div className="cell">
              <a className="game-link" href="#">
                <img
                  src="https://source.unsplash.com/174x232?random?sig=10"
                  alt="game name cover"
                  className="game-cover"
                />
                <span className="game-details">
                  <span className="game-info">
                    <h2 className="game-title">Awesome Game Title</h2>
                    <h3 className="game-developer">Developer Name</h3>
                  </span>
                  <span className="price-cell">
                    <span className="game-price eth">0.01</span>
                  </span>
                </span>
              </a>
            </div>
            <div className="cell">
              <a className="game-link" href="#">
                <img
                  src="https://source.unsplash.com/174x232?random?sig=11"
                  alt="game name cover"
                  className="game-cover"
                />
                <span className="game-details">
                  <span className="game-info">
                    <h2 className="game-title">Awesome Game Title</h2>
                    <h3 className="game-developer">Developer Name</h3>
                  </span>
                  <span className="price-cell">
                    <span className="game-price eth">0.01</span>
                  </span>
                </span>
              </a>
            </div>
            <div className="cell">
              <a className="game-link" href="#">
                <img
                  src="https://source.unsplash.com/174x232?random?sig=12"
                  alt="game name cover"
                  className="game-cover"
                />
                <span className="game-details">
                  <span className="game-info">
                    <h2 className="game-title">Awesome Game Title</h2>
                    <h3 className="game-developer">Developer Name</h3>
                  </span>
                  <span className="price-cell">
                    <span className="game-price eth">0.01</span>
                  </span>
                </span>
              </a>
            </div>
            <div className="cell">
              <a className="game-link" href="#">
                <img
                  src="https://source.unsplash.com/174x232?random?sig=13"
                  alt="game name cover"
                  className="game-cover"
                />
                <span className="game-details">
                  <span className="game-info">
                    <h2 className="game-title">Awesome Game Title</h2>
                    <h3 className="game-developer">Developer Name</h3>
                  </span>
                  <span className="price-cell">
                    <span className="game-price eth">0.01</span>
                  </span>
                </span>
              </a>
            </div>
            <div className="cell">
              <a className="game-link" href="#">
                <img
                  src="https://source.unsplash.com/174x232?random?sig=14"
                  alt="game name cover"
                  className="game-cover"
                />
                <span className="game-details">
                  <span className="game-info">
                    <h2 className="game-title">Awesome Game Title</h2>
                    <h3 className="game-developer">Developer Name</h3>
                  </span>
                  <span className="price-cell">
                    <span className="game-price eth">0.01</span>
                  </span>
                </span>
              </a>
            </div>
            <div className="cell">
              <a className="game-link" href="#">
                <img
                  src="https://source.unsplash.com/174x232?random?sig=15"
                  alt="game name cover"
                  className="game-cover"
                />
                <span className="game-details">
                  <span className="game-info">
                    <h2 className="game-title">Awesome Game Title</h2>
                    <h3 className="game-developer">Developer Name</h3>
                  </span>
                  <span className="price-cell">
                    <span className="game-price eth">0.01</span>
                  </span>
                </span>
              </a>
            </div>
            <div className="cell">
              <a className="game-link" href="#">
                <img
                  src="https://source.unsplash.com/174x232?random?sig=16"
                  alt="game name cover"
                  className="game-cover"
                />
                <span className="game-details">
                  <span className="game-info">
                    <h2 className="game-title">Awesome Game Title</h2>
                    <h3 className="game-developer">Developer Name</h3>
                  </span>
                  <span className="price-cell">
                    <span className="game-price eth">0.01</span>
                  </span>
                </span>
              </a>
            </div>
            <div className="cell">
              <a className="game-link" href="#">
                <img
                  src="https://source.unsplash.com/174x232?random?sig=17"
                  alt="game name cover"
                  className="game-cover"
                />
                <span className="game-details">
                  <span className="game-info">
                    <h2 className="game-title">Awesome Game Title</h2>
                    <h3 className="game-developer">Developer Name</h3>
                  </span>
                  <span className="price-cell">
                    <span className="game-price eth">0.01</span>
                  </span>
                </span>
              </a>
            </div>
            <div className="cell">
              <a className="game-link" href="#">
                <img
                  src="https://source.unsplash.com/174x232?random?sig=18"
                  alt="game name cover"
                  className="game-cover"
                />
                <span className="game-details">
                  <span className="game-info">
                    <h2 className="game-title">Awesome Game Title</h2>
                    <h3 className="game-developer">Developer Name</h3>
                  </span>
                  <span className="price-cell">
                    <span className="game-price eth">0.01</span>
                  </span>
                </span>
              </a>
            </div>
            <div className="cell">
              <a className="game-link" href="#">
                <img
                  src="https://source.unsplash.com/174x232?random?sig=19"
                  alt="game name cover"
                  className="game-cover"
                />
                <span className="game-details">
                  <span className="game-info">
                    <h2 className="game-title">Awesome Game Title</h2>
                    <h3 className="game-developer">Developer Name</h3>
                  </span>
                  <span className="price-cell">
                    <span className="game-price eth">0.01</span>
                  </span>
                </span>
              </a>
            </div>
            <div className="cell">
              <a className="game-link" href="#">
                <img
                  src="https://source.unsplash.com/174x232?random?sig=20"
                  alt="game name cover"
                  className="game-cover"
                />
                <span className="game-details">
                  <span className="game-info">
                    <h2 className="game-title">Awesome Game Title</h2>
                    <h3 className="game-developer">Developer Name</h3>
                  </span>
                  <span className="price-cell">
                    <span className="game-price eth">0.01</span>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </main>
      </div>
    </Page>
  );
}

Store.propTypes = {};

export default Store;
