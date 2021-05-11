import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={"https://www.nuevo.com.tr/Assets/images/nuevo_logo.png"}
          height="50"
          alt={"nuevo"}
        />
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
