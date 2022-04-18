import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/calender" activeStyle>
                        Calender
                    </NavLink>
                    <NavLink to="/planner" activeStyle>
                        Planner
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
