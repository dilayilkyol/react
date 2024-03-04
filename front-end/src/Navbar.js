export default function Navbar() {
    return <nav className ="nav">
        <a href="/" className="site-title">Site Name</a>
        <ul>
            <li className="active">
                <a href="/signin">Sign in</a>
            </li>
            <li>
                <a href="/signup">Sign up</a>
            </li>
        </ul>
    </nav>
}