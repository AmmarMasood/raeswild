import React, { useState } from "react";
import styles from "@/styles/Auth/AboutYou.module.scss";
import Button from "../Shared/Button";
import Input from "../Shared/Input";

export interface DogNames {
  id: number;
  name: string;
}
export interface UserInfo {
  name: string;
  zip: string;
  emailAddress: string;
  phoneNumber: string;
}

interface AboutYou {
  buttons: JSX.Element;
  currentStep: number;
  saveAboutYouInformation: (dogNames: DogNames[], userInfo: UserInfo) => void;
}

function AboutYou(props: AboutYou) {
  const { buttons, currentStep, saveAboutYouInformation } = props;
  const [numberOfDogs, setNumberOfDogs] = useState<DogNames[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    emailAddress: "",
    zip: "",
    phoneNumber: "",
  });
  // case 1
  const showIntroMessage = () => (
    <div className={styles["aboutus--intro-section"]}>
      <h1>
        Let’s determine your meal plan, recommended recipes, and weekly price!
      </h1>
      {buttons}
    </div>
  );
  // case 2
  const handleDogNameChange = (e: any, id: number) => {
    const newNumberOfDogs = numberOfDogs.map((d) => {
      if (d.id === id) {
        d.name = e.target.value;
      }
      return d;
    });
    setNumberOfDogs(newNumberOfDogs);
  };
  const showDogCount = () => (
    <div className={styles["aboutus--dogs-count"]}>
      I have{" "}
      <Input
        placeholder=""
        name="Dogs"
        value={numberOfDogs.length}
        onChange={(e) => {
          const input = e.target.value;
          if (!isNaN(input as any)) {
            if ((input as any) > 6) return;
            const dogNames: DogNames[] = Array.from(
              { length: Number(input) },
              () => ({ id: Math.random(), name: "" })
            );
            setNumberOfDogs(dogNames);
          }
        }}
        type="number"
        style={{
          width: "100px",
          margin: "0 10px",
        }}
      />
      dogs.{" "}
      {numberOfDogs.length >= 1 && (
        <span>
          And they are called{" "}
          {numberOfDogs.map((dog, index) => (
            <>
              <span> {index - 2 === 0 ? "and" : index === 0 ? "" : ","}</span>
              <Input
                key={dog.id}
                type="text"
                name="dog"
                value={dog.name}
                onChange={(e) => handleDogNameChange(e, dog.id)}
                placeholder=""
                style={{
                  width: "150px",
                  margin: "10px",
                }}
              />
              <span> {index === numberOfDogs.length - 1 && "."}</span>
            </>
          ))}
        </span>
      )}
      {numberOfDogs.length > 0 &&
        numberOfDogs.filter((d) => d.name.length <= 0).length <= 0 &&
        buttons}
    </div>
  );
  // case 3

  const onChangeUserValue = (e: any, key: string) => {
    setUserInfo((prevState) => ({ ...prevState, [key]: e.target.value }));
  };
  const userInfoComponent = () => (
    <div className={styles["aboutus--user-info"]}>
      My name is{" "}
      <Input
        style={{ width: "200px", margin: "10px" }}
        type="text"
        name="name"
        value={userInfo.name}
        onChange={(e) => onChangeUserValue(e, "name")}
        placeholder=""
      />
      {userInfo.name && (
        <>
          .My zip
          <Input
            style={{ width: "100px", margin: "10px" }}
            type="text"
            name="zip"
            value={userInfo.zip}
            onChange={(e) => onChangeUserValue(e, "zip")}
            placeholder=""
          />
        </>
      )}
      {userInfo.zip && (
        <>
          , email address{" "}
          <Input
            style={{ width: "200px", margin: "10px" }}
            type="text"
            name="emailAddress"
            value={userInfo.emailAddress}
            onChange={(e) => onChangeUserValue(e, "emailAddress")}
            placeholder=""
          />
        </>
      )}
      {userInfo.emailAddress && (
        <>
          and phone number is{" "}
          <Input
            style={{ width: "200px", margin: "10px" }}
            type="text"
            name="phoneNumber"
            value={userInfo.phoneNumber}
            onChange={(e) => onChangeUserValue(e, "phoneNumber")}
            placeholder="(Optional)"
          />
          .
        </>
      )}
      {userInfo.name.length > 0 &&
        userInfo.emailAddress.length > 0 &&
        userInfo.zip.length > 0 &&
        buttons}
    </div>
  );

  const getComponentDependingOnStep = (step: number) => {
    switch (step) {
      case 0:
        return showIntroMessage();
      case 1:
        return showDogCount();
      case 2:
        return userInfoComponent();
      case 3:
        saveAboutYouInformation(numberOfDogs, userInfo);
        return <div>Info saved</div>;
      default:
        return <div>Nothing here</div>;
    }
  };

  return (
    <div className={styles["container"]}>
      <div>{getComponentDependingOnStep(currentStep)}</div>
    </div>
  );
}

export default AboutYou;
