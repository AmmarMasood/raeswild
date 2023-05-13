import { useState } from "react";
import Layout from "../../components/Common/Layout";
import styles from "@/styles/Auth/Signup.module.scss";
import Link from "next/link";
import { message, Steps, theme, ConfigProvider } from "antd";
import Button from "../../components/Shared/Button";
import AboutYou, { DogNames, UserInfo } from "../../components/Signup/AboutYou";
import AboutPets, { DogInfo } from "../../components/Signup/AboutPets";

const itemsLength = 4;

const verifyEmail = (email: string) => {
  const emailRegex = new RegExp(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$"
    ),
    isValid = emailRegex.test(email);
  return isValid;
};

export default function Signup() {
  const [overallStep, setoverallStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [allInfo, setAllInfo] = useState<any>({
    dogNames: [],
    userInfo: null,
  });

  const handleSubmit = () => {
    console.log("submitted");
  };

  const handleStepNext = () => {
    if (overallStep === 0 && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
    if (overallStep === 1 && currentStep <= allInfo.dogNames.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleStepBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAboutYouInfoSave = (dogNames: DogNames[], userInfo: UserInfo) => {
    setAllInfo({
      dogNames,
      userInfo,
    });
    setoverallStep(1);
    setCurrentStep(0);
  };

  const handlePetsInfoSave = (dogInfo: DogInfo[]) => {
    setAllInfo({
      dogNames: dogInfo,
    });
    setoverallStep(2);
    setCurrentStep(0);
  };
  const overallSteps = [
    {
      title: "About You",
      content: (
        <AboutYou
          saveAboutYouInformation={handleAboutYouInfoSave}
          currentStep={currentStep}
          buttons={
            <div
              className={styles["button-section"]}
              style={{
                justifyContent: currentStep >= 1 ? "flex-end" : "center",
              }}
            >
              {currentStep >= 1 && (
                <Button text="Back" onClick={handleStepBack} />
              )}
              <Button text="Next" onClick={handleStepNext} />
            </div>
          }
        />
      ),
    },
    {
      title: "About Your Pet",
      content: (
        <AboutPets
          savePetsInfoInformation={handlePetsInfoSave}
          dogNames={allInfo.dogNames}
          currentStep={currentStep}
          buttons={
            <div
              className={styles["button-section"]}
              style={{
                justifyContent: currentStep >= 1 ? "flex-end" : "center",
              }}
            >
              {currentStep >= 1 && (
                <Button text="Back" onClick={handleStepBack} />
              )}
              <Button text="Next" onClick={handleStepNext} />
            </div>
          }
        />
      ),
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
  const items = overallSteps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <Layout>
      <div className={styles["container"]}>
        <div className={styles["inner-container"]}>
          <Steps current={overallStep} items={items} />
          <div className={styles["content"]}>
            {overallSteps[overallStep].content}
          </div>
        </div>
      </div>
    </Layout>
  );
}
