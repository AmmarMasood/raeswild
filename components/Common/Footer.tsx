import React from "react";
import styles from "@/styles/Footer.module.scss";

import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaMobileAlt,
  FaNewspaper,
} from "react-icons/fa";
import Button from "../Shared/Button";
import Input from "../Shared/Input";
import Link from "next/link";

function Footer() {
  const [email, setEmail] = React.useState("");
  return (
    <footer className={styles["footer"]}>
      <div className={styles["top-container"]}>
        <div>
          <h2>Site Map</h2>
          {/* <p>Reviews</p> */}
          <p>
            <Link href="/login">Log In</Link>
          </p>
          <p>
            <Link href="/signup">Sign Up</Link>
          </p>
          {/* <p>About Us</p>
          <p>FAQ</p> */}
          {/* <p>DIY</p>
          <p>Careers</p>
          <p>Affiliates</p>
          <p>Vet Portal</p>
          <p>Breeds</p> */}
        </div>
        <div>
          <h2>Contact</h2>

          <p>
            <FaMobileAlt /> <span>832-722-2500</span>
          </p>
          <p>
            <FaInstagram />
            <span>
              <a href="https://www.instagram.com/raeswild/" target="_blank">
                Instagram
              </a>
            </span>
          </p>
          <p>
            <FaFacebookSquare />{" "}
            <span>
              <a
                href="https://www.facebook.com/profile.php?id=100092237425382"
                target="_blank"
              >
                Facebook
              </a>
            </span>
          </p>
        </div>
        <div>
          <p>Free Health and Nutrition Tips </p>
          <div>
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
            />
            <Button
              text="Submit"
              onClick={() => console.log("submit")}
              disabled={email ? false : true}
            />
          </div>
        </div>
      </div>
      <p className={styles["mid-text"]}>
        Our food is made while playing doo-wop tunes, all with ❤ in the US
      </p>
      <div className={styles["bottom-container"]}>
        <p>© 2023 Raeswild™, Inc</p>
        <ul>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Accessibility</li>
          <li>Do Not Sell My Personal Information</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
