import logo from "../../../images/header-logo.svg";

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Logo Around the U.S."
        className="header__logo"
      />
    </header>
  );
}

export default Header;