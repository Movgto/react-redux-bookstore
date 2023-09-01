import { NavLink } from 'react-router-dom';
import '../stylesheets/header.scss';

const Header = () => (
  <header>
    <h1 className="Bookstore-CMS">Bookstore CMS</h1>
    <nav>
      <ul>
        <li><NavLink className="BOOKS" to="/">Books</NavLink></li>
        <li><NavLink className="CATEGORIES" to="/categories">Categories</NavLink></li>
      </ul>
    </nav>
    <div className="Oval">
      <div className="Mask" />
    </div>
  </header>
);

export default Header;
