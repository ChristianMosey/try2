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
                    <NavLink to="/planner" activeStyle>
                        Add Events
                    </NavLink>
                    <NavLink to="/calender" activeStyle>
                        View Schedule
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
