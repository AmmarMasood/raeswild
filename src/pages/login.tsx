import { useEffect, useState } from "react";
import Layout from "../../components/Common/Layout";
import styles from "@/styles/Auth/Login.module.scss";
import Link from "next/link";
import { Alert } from "antd";
export default function Login() {
  useEffect(() => {}, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
  };

  const verifyEmail = (email: string) => {
    const emailRegex = new RegExp(
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"
      ),
      isValid = emailRegex.test(email);
    return isValid;
  };

  return (
    <Layout>
      <div className={styles["container"]}>
        <div style={{ margin: "0 auto", width: "80vw", marginBottom: "20px" }}>
          <Alert
            message="Coming Sooon"
            type="success"
            style={{ fontSize: "32px", textAlign: "center", fontWeight: "800" }}
          />
        </div>
        {/* <div className={styles["inner-container"]}>
          <h1>Login</h1>

          <div className={styles["form-container"]}>
            <form onSubmit={handleFormSubmit}>
              <div className={styles["form-container--group"]}>
                <label htmlFor="email">Email</label>
                <input
                  placeholder="Type your email..."
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className={styles["form-container--group"]}>
                <label htmlFor="password">Password</label>
                <input
                  placeholder="Type your password..."
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className={styles["form-container--group"]}>
                <button
                  type="submit"
                  disabled={
                    email.length > 0 &&
                    password.length > 0 &&
                    verifyEmail(email)
                      ? false
                      : true
                  }
                >
                  Login
                </button>
              </div>
            </form>
            <p>
              <Link href={"/forgot-password"}> Forgot password?</Link>
            </p>
            <p>
              Not already a member?{" "}
              <span>
                <Link href={"/signup"}>
                  {" "}
                  Get started by building your own plan.
                </Link>
              </span>
            </p>
          </div>
        </div> */}
      </div>
    </Layout>
  );
}
