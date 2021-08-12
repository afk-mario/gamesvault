function StoreNavigation() {
  return (
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
  );
}

StoreNavigation.propTypes = {};

StoreNavigation.defaultProps = {};

export default StoreNavigation;
