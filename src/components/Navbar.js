import "../style/navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav_bar">
      <div className="nav__left">
        <img src="https://www.zee5.com/images/ZEE5_logo.svg" alt="zee5" />
        <ul>
          <li>
            <a href="home"> Home</a>
          </li>
          <li>
            <a href="home"> Tv Shows</a>
          </li>
          <li>
            <a href="home"> Movies</a>
          </li>
          <li>
            <a href="home"> premium</a>
          </li>
          <li>
            <a href="home"> Web Series</a>
          </li>

          <li>
            <a href="home"> More</a>
          </li>
        </ul>
      </div>
      <div className="nav__right">
        <div className="search">
          <span className="search__icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            className="search__bar"
            placeholder="Search for Movies, Show, Channels etc."
            type="search"
          />
          <span className="mic">
            <i className="fa-solid fa-microphone"></i>
          </span>
        </div>

        <Link to="/login">
          <button className="btn__login">Login </button>
        </Link>

        <button className="btn__buy">
          <i className="fa-solid fa-crown"></i> BUY PLAN
        </button>
        <button className="btn__menu">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
