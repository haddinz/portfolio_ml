/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";

const navbar = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "About",
    link: "about",
  },
  {
    name: "Model",
    link: "model",
  },
  {
    name: "Contact",
    link: "contact",
  },
];

function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);

  const navbarHandler = (navbar: string) => {
    navigate(`/#${navbar}`, { state: { targetID: navbar } });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full fixed top-0 left-0 h-20 z-50 duration-300 transition-all bg-gray-100">
      <div
        className="container mx-auto flex justify-between items-center"
        onClick={() => toggleMenu}
      >
        <nav className="text-2xl font-bold ">
          <Link to={"/"}>Rutes ID</Link>
        </nav>

        <div>
          <div className="paragraf space-x-12 hidden md:flex">
            {navbar.map((navbar, index) => (
              <nav
                className="cursor-pointer"
                key={index}
                onClick={() => navbarHandler(navbar.link.toLowerCase())}
              >
                {navbar.name}
              </nav>
            ))}
          </div>

          <nav
            className="block md:hidden"
            onClick={() => setOpenNavbar(!openNavbar)}
          >
            <RxHamburgerMenu className="text-2xl " />
            <Sidebar
              openNavbar={openNavbar}
              navbar={navbar}
              navbarHandler={navbarHandler}
            />
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
