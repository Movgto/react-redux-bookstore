import { NavLink } from 'react-router-dom';
import '../stylesheets/header.scss';

const Header = () => (
  <header>
    <div id="header-ctr">
      <h1 className="Bookstore-CMS">Bookstore CMS</h1>
      <nav>
        <ul>
          <li><NavLink className="BOOKS" to="/">BOOKS</NavLink></li>
          <li><NavLink className="CATEGORIES" to="/categories">CATEGORIES</NavLink></li>
        </ul>
      </nav>
      <div className="Oval">
        <div className="Mask" />
        <div id="body" />
      </div>
    </div>
  </header>
);

export default Header;
