import "../style/navbar.css";
const Navbar = () => {
  return (
    <div className="nav_bar">
      <div className="nav__left">
        <img
          src="https://www.zee5.com/images/ZEE5_logo.svg?ver=3.12.13"
          alt="zee5"
        />
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
            <a href="home"> News</a>
          </li>
          <li>
            <a href="home"> Live TV</a>
          </li>
          <li>
            <a href="home"> Music</a>
          </li>
          <li>
            <a href="home"> More</a>
          </li>
        </ul>
      </div>
      <div className="nav__right">
        <div className="search">
          <span className="search__icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          <input className="search__bar" type="search" />
          <span className="mic">
            <i class="fa-solid fa-microphone"></i>
          </span>
        </div>

        <button className="btn__login">Login</button>
        <button className="btn__buy">
          <i class="fa-solid fa-crown"></i>Buy Plan
        </button>
        <button className="btn__menu">Menu</button>
      </div>
    </div>
  );
};
export default Navbar;
