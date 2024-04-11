import { NavLink } from "react-router-dom";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
  } from "reactstrap";


const Header = () => {
    return (
        <Navbar sticky='top' className='header'>
            <NavbarBrand className='logo' href='/'>MICAELA FAMILANT</NavbarBrand>

        </Navbar>
    );
};

export default Header;
