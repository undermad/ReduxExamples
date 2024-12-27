import {Link} from "react-router-dom";

const Header = () => {
    return <header>
            <h1>Redux blog</h1>
        <nav className={""}>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/post'}>Post</Link></li>
        </nav>
    </header>
}

export default Header;