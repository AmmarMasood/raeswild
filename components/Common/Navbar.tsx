import React, { useState } from "react";
import styles from "@/styles/Navbar.module.scss";
import Logo from "../../public/RAES WILD BLACK LOGO.svg";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";

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
            {/* <li>About Us</li>
            <li>Why Wild and Fresh?</li>
            <li>Testimonials</li>
            <li>FAQ</li> */}
          </ul>
        </div>
      </div>
      <Link href={"/"}>
        <Image
          src={Logo}
          alt="raeswild"
          height={42}
          width={42}
          className={styles["logo"]}
        />
      </Link>
      <ul>
        {/* <li>About Us</li>
        <li>Why Wild and Fresh?</li>
        <li>Testimonials</li>
        <li>FAQ</li> */}
      </ul>
      <p>
        <Link href={"/login"}>Log In</Link>
      </p>
    </nav>
  );
}

export default Navbar;
