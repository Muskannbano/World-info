import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Headers = () => {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => {
    return setShow(!show);
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/" className="navlink">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>

          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/" className="navlink">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="navlink">About</NavLink>
              </li>
              <li>
                <NavLink to="/country" className="navlink">Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="navlink">Contact</NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};