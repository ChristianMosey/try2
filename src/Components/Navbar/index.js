import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/login" activeStyle>
                        Login
                    </NavLink>
                    <NavLink to="/calender" activeStyle>
                        Home
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
