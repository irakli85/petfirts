import headerLogo from '../assets/headerLogo.png';


function Header() {
  return (
    
      <header>
        <div className="header-logo">
          <img src={headerLogo} alt="header-logo"/>
        </div>
        <nav>
          <a className="nav-item item1" href="/">About</a>
          <a className="nav-item" href="/">Service</a>
          <a className="nav-item" href="/">Madi-Care</a>
          <a className="nav-item" href="/">Blog</a>
        </nav>
        <button className="header-btn">Sing up</button>

      </header>
    
  );
}

export default Header;
