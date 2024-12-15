import { useState } from "react";
import { headerLogo } from "./../assets/images";
import { hamburger } from "./../assets/icons";
import { close } from "./../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        {/* Desktop Navigation */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="hidden max-lg:block z-50">
          {mobileMenu ? (
            <div className="mobile-menu-icon">
              <img
                src={close}
                alt="Close"
                onClick={() => setMobileMenu(false)}
                className="cursor-pointer"
                width={25}
                height={25}
              />
            </div>
          ) : (
            <img
              src={hamburger}
              alt="Hamburger"
              onClick={() => setMobileMenu(true)}
              className="cursor-pointer"
              width={25}
              height={25}
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute bg-white top-0 left-0 w-full h-lvh flex justify-center items-center transition-all duration-500 ${
          mobileMenu
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
      >
        <ul className="flex flex-col gap-6">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-[40px] text-black font-semibold hover:text-coral-red transition-colors"
                onClick={() => setMobileMenu(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
