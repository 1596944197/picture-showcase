import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { DarkLight } from "./DarkLight";
import { Logo } from "./Logo";
import { Nav } from "./Nav";

const Header = () => {
  return (
    <Navbar className="bg-white dark:bg-black">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent justify="center">
        <Nav />
      </NavbarContent>
      <NavbarContent justify="end">
        <DarkLight />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
