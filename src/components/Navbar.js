import {Link} from "react-router-dom"
import '../css/Navbar.css';


export const Navbar = () => {
return (
<div className="container">

    <div className="logo">
        <Link to="/">Slagteren</Link>
    </div>
    <ul>
        <li> <Link to="/">Hjem</Link> </li>
        <li> <Link to="/order">Bestil</Link> </li>
        <li> <Link to="/products">Produkter</Link> </li>
        <li> <Link to="/about">Om os</Link> </li>
        <li> <Link to="/admin">Admin</Link> </li>
    </ul>

    <div className="login">
        <Link to="/">Login</Link>
    </div>
</div>
    )
}