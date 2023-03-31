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

function Footer() {
  const [email, setEmail] = React.useState("");
  return (
    <footer className={styles["footer"]}>
      <div className={styles["top-container"]}>
        <div>
          <h2>Site Map</h2>
          <p>Reviews</p>
          <p>About Us</p>
          <p>FAQ</p>
          <p>Log In</p>
          <p>Sign Up</p>
          <p>Digest</p>
          <p>DIY</p>
          <p>Careers</p>
          <p>Affiliates</p>
          <p>Vet Portal</p>
          <p>Breeds</p>
        </div>
        <div>
          <h2>Contact</h2>
          <p>
            {" "}
            <FaEnvelope /> <span>help@placeholder.com</span>
          </p>
          <p>
            <FaMobileAlt /> <span>(646)-780-7957</span>
          </p>
          <p>
            <FaInstagram />
            <span>Instagram</span>
          </p>
          <p>
            <FaFacebookSquare /> <span>Facebook</span>
          </p>
          <p>
            <FaNewspaper /> <span>Media Inqueries</span>
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
        <p>© 2023 Placeholder, Inc.Long | Live Dogs™</p>
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
