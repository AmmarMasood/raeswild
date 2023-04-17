import React, { useState } from "react";
import styles from "@/styles/Navbar.module.scss";
import Logo from "../../public/RAES WILD GREEN LOGO.svg";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";

interface NavbarProps {
  isLoggedIn: boolean;
}
function Navbar({ isLoggedIn }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["mobile-nav"]}>
        {mobileMenuOpen ? (
          <IoClose onClick={() => setMobileMenuOpen(false)} />
        ) : (
          <IoMenu onClick={() => setMobileMenuOpen(true)} />
        )}
        <div
          className={`${styles["mobile-nav--inner"]} ${
            mobileMenuOpen && styles["mobile-nav--inner-open"]
          }`}
        >
          <ul>
            <li>About Us</li>
            <li>Why Wild and Fresh?</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
      <Image
        src={Logo}
        alt="raeswild"
        height={24}
        width={24}
        className={styles["logo"]}
      />
      <ul>
        <li>About Us</li>
        <li>Why Wild and Fresh?</li>
        <li>Testimonials</li>
        <li>FAQ</li>
      </ul>
      <p>Log In</p>
    </nav>
  );
}

export default Navbar;
