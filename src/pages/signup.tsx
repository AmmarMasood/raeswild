import { useState } from "react";
import Layout from "../../components/Common/Layout";
import styles from "@/styles/Auth/Signup.module.scss";
import Link from "next/link";
import { message, Steps, theme, ConfigProvider } from "antd";
import Button from "../../components/Shared/Button";
import AboutYou from "../../components/Signup/AboutYou";

const itemsLength = 4;

export default function Signup() {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("submitted");
  };

  const steps = [
    {
      title: "About You",
      content: (
        <AboutYou
          buttons={
            <div className={styles["button-section"]}>
              {step < itemsLength ? (
                <Button text="Next" onClick={() => setStep(step + 1)} />
              ) : (
                <Button text="Submit" onClick={handleSubmit} />
              )}
            </div>
          }
        />
      ),
    },
    {
      title: "About Your Pet",
      content: "Second-content",
    },
    {
      title: "Your Plan",
      content: "Last-content",
    },
    {
      title: "Checkout",
      content: "Last-content",
    },
  ];
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

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
        <div className={styles["inner-container"]}>
          <Steps current={step} items={items} />
          <div className={styles["content"]}>{steps[step].content}</div>
        </div>
      </div>
    </Layout>
  );
}
