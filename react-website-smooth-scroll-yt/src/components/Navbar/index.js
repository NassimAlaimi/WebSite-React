import React from 'react'
import { Nav, NavbarContainer, NavLogo } from './NavbarElement'

const Navbar = () => {
  return (
    <>
      <Nav>
          <NavbarContainer>
            <NavLogo to="/">Nous</NavLogo>
            <MobileIcon>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about">About</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
