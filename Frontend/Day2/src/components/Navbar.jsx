import { Link }from "react-router-dom";
function Navbar(){
    return(
    <div id="header">
        <div id="siteinfo"></div>
        <div id="navbar">
            <Link className="navLink" to="/">
              Home
            </Link>
            <Link className="navLink" to="/about">
              About
            </Link>
            <Link className="navLink" to="/login">
              Login
            </Link>
            <Link className="navLink" to="/register">
              Register
            </Link>
        </div>
    </div>
    );
}
export default Navbar;