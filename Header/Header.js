import "./Header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <a className="header__link" href="./index.html">
          <img className="header__logo" src={logo} alt="Brainflix Logo" />
        </a>
      </div>
      <div className="header__container">
        <form className="header-form">
          <input
            className="header-form__search"
            type="text"
            name="search"
            placeholder="Search"
          />
        </form>
        <div className="header__img header__img--1"></div>
      </div>
      <div className="header__container">
        <button className="header__button">UPLOAD</button>
        <div className="header__img header__img--2"></div>
      </div>
    </header>
  );
};

export default Header;
