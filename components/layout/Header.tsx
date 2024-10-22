import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { NextPage } from "next";
import Logo from "./Logo";
import Nav from "./Nav";

const Header: NextPage = () => {
  return (
    <Navbar className="bg-white dark:bg-black">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent justify="center">
        <Nav />
      </NavbarContent>
      <NavbarContent justify="end"></NavbarContent>
    </Navbar>
  );
};

export default Header;
