import {Link} from "react-router-dom"
import '../css/Layout.css';

export const Navbar = () => {
return (
<div className="container">
    <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/products">Products</Link> </li>
        <li> <Link to="/about">About</Link> </li>
    </ul>
</div>
    )
}