

export default function Navbar() {
    return (
        <nav className="navbar-container">
            <nav className="nav">
                <a href="/" className="site-title">Site Name</a>
                <ul>
                    <li className="active">
                        <a href="/signin">Sign in / Sign Up</a>
                    </li>

                </ul>
            </nav>
        </nav>
    )

}