import { NavLink } from "react-router-dom"

export const Headers = () =>{
    return <header>
        <div className="container">
            <div className="grid navbar-grid">
                <div className="Logo">
                    <NavLink to='/' className="nav-links">
                    <h1>WorldAtlas</h1>
                    </NavLink>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to='/' className="nav-links">Home</NavLink></li>
                        <li><NavLink to='/about' className="nav-links">About</NavLink></li>
                        <li><NavLink to='/country' className="nav-links">Country</NavLink></li>
                        <li><NavLink to='/contact' className="nav-links">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
}