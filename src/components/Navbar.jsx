import { NavLink } from "react-router-dom";
import { useAuth } from "../utilities/auth";

const Navbar = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: 'none',
            fontSize: '1.5rem'
        };
    };
    const auth = useAuth();
    return (
        <nav className="primary-nav">
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink style={navLinkStyles} to='/about'>About</NavLink>
            <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
            <NavLink style={navLinkStyles} to='/users'>Users</NavLink>
            <NavLink style={navLinkStyles} to='/profile'>Profile</NavLink>
            {
                !auth.user && <NavLink style={navLinkStyles} to='/login'>Login</NavLink>
            }
        </nav>
    );
};

export default Navbar;