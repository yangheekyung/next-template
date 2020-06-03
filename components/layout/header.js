import React from 'react';
import {Navbar, NavbarBrand} from "react-bootstrap";

const Header = () => (
  <Navbar>
    <NavbarBrand>
      <img
          src="/image/logo.png"
          width={50}
          height={50}
      />
      {' '}
      SocialBox
    </NavbarBrand>
  </Navbar>
);

export default Header;