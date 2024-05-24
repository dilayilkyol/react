import logo from "./logo.svg"


export default function Navbar() {
    return (
        <nav className="navbar-container">
            <nav className="nav">
                <a href="/" className="site-title">
                <img className="logo-navbar" src={logo} />
                </a>
                
                <ul>
                <li className="active">
                        <a href="/cart">Check Out</a>
                    </li>
                    <li className="active">
                        <a href="/signin">Sign in / Sign Up</a>
                    </li>


                </ul>
            </nav>
        </nav>
    )

}