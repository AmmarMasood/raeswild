import React, { useEffect, useState } from "react";
import styles from "@/styles/Auth/AboutPets.module.scss";
import Button from "../Shared/Button";
import Input from "../Shared/Input";
import { DogNames } from "./AboutYou";
import Select from "../Shared/Select";
import Chip from "../Shared/Chip";

const healthTypes = [
  "Anxiety",
  "Bad breath",
  "Cancer",
  "Chews paws",
  "Constipation",
  "Diarrhea",
  "Ear infections",
  "Environmental allergies",
  "Food allergies",
  "Gluten sensitive",
  "Grain sensitive",
  "Hyperactive",
  "Itchiness",
  "Joints",
  "Lethargy",
  "Passes Gas",
  "Seizures",
  "Skin and Coat",
  "Tear stains",
  "Urinary tract",
  "Vomiting",
];

const prescriptionType = [
  "Diabetes",
  "Hydrolyzed Protein",
  "Joint Support",
  "Liver Support",
  "Low Fat",
  "Neoplasia Diet",
  "Renal Disease",
  "Skin Support",
  "Weight Loss",
  "Weight Management",
];
export interface DogInfo extends DogNames {
  gender: "he" | "she" | "";
  age: string;
  agePeriod: "years" | "months" | "weeks" | "";
  breed: string;
  weight: string;
  bodyType: string;
  activityLevel: string;
  mealTimeroutine: string;
  favFoodType: string;
  favFoodTypeBrand: string;
  getTreats: string;
  hasHealthIssue: string;
  healthIssueType: string[];
  needPrescriptionDiet: string;
  prescriptionDietType: string[];
}
interface IAboutPets {
  buttons: JSX.Element;
  currentStep: number;
  dogNames: DogNames[];
  savePetsInfoInformation: (dogInfo: DogInfo[]) => void;
}

function AboutPets(props: IAboutPets) {
  const { buttons, currentStep, dogNames, savePetsInfoInformation } = props;
  const [dogInfo, setDogInfo] = useState<DogInfo[]>([]);
  const [innerStep, setInnerStep] = useState(0);

  useEffect(() => {
    setInnerStep(0);
    if (currentStep > dogNames.length - 1) {
      savePetsInfoInformation(dogInfo);
    }
  }, [currentStep]);
  useEffect(() => {
    const dogInfos: DogInfo[] = dogNames.map((d: DogNames) => ({
      ...d,
      gender: "",
      age: "",
      agePeriod: "",
      breed: "",
      weight: "",
      bodyType: "",
      activityLevel: "",
      mealTimeroutine: "",
      favFoodType: "",
      favFoodTypeBrand: "",
      getTreats: "",
      hasHealthIssue: "",
      healthIssueType: [],
      needPrescriptionDiet: "",
      prescriptionDietType: [],
    }));
    setDogInfo(dogInfos);
  }, [dogNames]);

  const handleSelectDogInfoChange = (value: any, key: string, step: number) => {
    const newDogInfo = dogInfo.map((d, i) => {
      if (i === step) {
        (d as any)[key] = value;
      }
      return d;
    });
    setDogInfo(newDogInfo);
  };
  const handleInputDogInfoChange = (e: any, key: string, step: number) => {
    const newDogInfo = dogInfo.map((d, i) => {
      if (i === step) {
        (d as any)[key] = e.target.value;
      }
      return d;
    });
    setDogInfo(newDogInfo);
  };
  const handleChipSelect = (e: any, key: string, step: number) => {
    if ((dogInfo[step] as any)[key].includes(e)) {
      const newDogInfo = dogInfo.map((d, i) => {
        if (i === step) {
          (d as any)[key] = (d as any)[key].filter((d: any) => d !== e);
        }
        return d;
      });
      setDogInfo(newDogInfo);
    } else {
      const newDogInfo = dogInfo.map((d, i) => {
        if (i === step) {
          (d as any)[key] = [...(d as any)[key], e];
        }
        return d;
      });
      setDogInfo(newDogInfo);
    }
  };
  const isChipSelected = (e: any, key: string, step: number) =>
    (dogInfo[step] as any)[key].includes(e);

  const getDogInfoForm = (step: number) => {
    return (
      dogInfo[step] && (
        <div className={styles["aboutpets--petinfo"]}>
          {innerStep === 0 && (
            <>
              <div>
                About <b>{dogInfo[step].name}</b>,
                <Select
                  defaultValue={dogInfo[step].gender}
                  style={{
                    width: "150px",
                    margin: "10px",
                  }}
                  handleChange={(v) =>
                    handleSelectDogInfoChange(v, "gender", step)
                  }
                  options={[
                    { label: "He", value: "he" },
                    { label: "She", value: "she" },
                  ]}
                />
                Is
                <Input
                  value={dogInfo[step].age}
                  onChange={(e) => handleInputDogInfoChange(e, "age", step)}
                  placeholder=""
                  type="number"
                  name="age"
                  style={{ width: "100px", margin: "10px" }}
                />
                <Select
                  size="large"
                  defaultValue={dogInfo[step].agePeriod}
                  style={{
                    width: "150px",
                    margin: "10px",
                  }}
                  handleChange={(v) =>
                    handleSelectDogInfoChange(v, "agePeriod", step)
                  }
                  options={[
                    { label: "years", value: "years" },
                    { label: "months", value: "months" },
                    { label: "weeks", value: "weeks" },
                  ]}
                />
                .
              </div>
              {dogInfo[step].gender &&
                dogInfo[step].age &&
                dogInfo[step].agePeriod && (
                  <div>
                    {dogInfo[step].gender} has a breed of
                    <Select
                      defaultValue={dogInfo[step].breed}
                      style={{
                        width: "200px",
                        margin: "10px",
                      }}
                      handleChange={(v) =>
                        handleSelectDogInfoChange(v, "breed", step)
                      }
                      options={[
                        { label: "Breed 1", value: "breed1" },
                        { label: "Breed 2", value: "breed2" },
                        { label: "Breed 3", value: "breed3" },
                        { label: "Breed 4", value: "breed4" },
                      ]}
                    />
                    .
                  </div>
                )}
              {dogInfo[step].gender &&
                dogInfo[step].age &&
                dogInfo[step].agePeriod &&
                dogInfo[step].breed && (
                  <div className={styles["innerbuttons"]}>
                    {innerStep >= 1 && (
                      <p onClick={() => setInnerStep(innerStep - 1)}>Back ←</p>
                    )}
                    <p onClick={() => setInnerStep(innerStep + 1)}>Next →</p>
                  </div>
                )}
            </>
          )}
          {innerStep === 1 && (
            <>
              <div>
                <b>{dogInfo[step].name}</b> weights{" "}
                <Input
                  value={dogInfo[step].weight}
                  onChange={(e) => handleInputDogInfoChange(e, "weight", step)}
                  placeholder=""
                  type="number"
                  name="weight"
                  style={{ width: "100px", margin: "10px" }}
                />{" "}
                lbs
              </div>
              <div>
                And {dogInfo[step].gender} body condition is...
                <Select
                  defaultValue={dogInfo[step].bodyType}
                  style={{
                    width: "200px",
                    margin: "10px",
                  }}
                  handleChange={(v) =>
                    handleSelectDogInfoChange(v, "bodyType", step)
                  }
                  options={[
                    { label: "Too Skinny", value: "too-skinny" },
                    { label: "Just Right", value: "just-right" },
                    { label: "Rounded", value: "rounded" },
                    { label: "Chunky", value: "chunky" },
                  ]}
                />
                .
              </div>
              {dogInfo[step].weight && dogInfo[step].bodyType && (
                <div>
                  {dogInfo[step].gender} has activity level of{" "}
                  <Select
                    defaultValue={dogInfo[step].activityLevel}
                    style={{
                      width: "200px",
                      margin: "10px",
                    }}
                    handleChange={(v) =>
                      handleSelectDogInfoChange(v, "activityLevel", step)
                    }
                    options={[
                      { label: "Not very active", value: "not-active" },
                      { label: "Active", value: "active" },
                      { label: "Very Active", value: "very-active" },
                      { label: "Pro Athlete", value: "pro-athlete" },
                    ]}
                  />
                  .
                </div>
              )}
              {dogInfo[step].weight && dogInfo[step].bodyType && (
                <div className={styles["innerbuttons"]}>
                  {innerStep >= 1 && (
                    <p onClick={() => setInnerStep(innerStep - 1)}>Back ←</p>
                  )}
                  <p onClick={() => setInnerStep(innerStep + 1)}>Next →</p>
                </div>
              )}
            </>
          )}
          {innerStep === 2 && (
            <>
              <div>
                At mealtimes <b>{dogInfo[step].name}</b> is
                <Select
                  defaultValue={dogInfo[step].mealTimeroutine}
                  style={{
                    width: "200px",
                    margin: "10px",
                  }}
                  handleChange={(v) =>
                    handleSelectDogInfoChange(v, "mealTimeroutine", step)
                  }
                  options={[
                    { label: "Very picky", value: "very-picky" },
                    { label: "Can be Picky", value: "picky" },
                    { label: "Good eater", value: "rounded" },
                    { label: "Will eat anything", value: "anything" },
                  ]}
                />
                .
              </div>
              {dogInfo[step].mealTimeroutine && (
                <div>
                  {dogInfo[step].gender} mainly eats{" "}
                  <Select
                    defaultValue={dogInfo[step].favFoodType}
                    style={{
                      width: "200px",
                      margin: "10px",
                    }}
                    handleChange={(v) =>
                      handleSelectDogInfoChange(v, "favFoodType", step)
                    }
                    options={[
                      { label: "dry food", value: "dry" },
                      { label: "wet food", value: "we" },
                      { label: "raw food", value: "raw" },
                      { label: "dehydrated food", value: "dehydrated" },
                      { label: "fresh food", value: "fresh" },
                      { label: "homemade food", value: "homemade" },
                    ]}
                  />
                  by{" "}
                  <Input
                    value={dogInfo[step].favFoodTypeBrand}
                    onChange={(e) =>
                      handleInputDogInfoChange(e, "favFoodTypeBrand", step)
                    }
                    placeholder=""
                    type="text"
                    name="favFoodTypeBrand"
                    style={{ width: "200px", margin: "10px" }}
                  />{" "}
                  and gets{" "}
                  <Select
                    defaultValue={dogInfo[step].getTreats}
                    style={{
                      width: "150px",

                      margin: "10px",
                    }}
                    handleChange={(v) =>
                      handleSelectDogInfoChange(v, "getTreats", step)
                    }
                    options={[
                      { label: "some", value: "some" },
                      { label: "no", value: "no" },
                      { label: "alot", value: "alot" },
                    ]}
                  />{" "}
                  treats or scraps.
                </div>
              )}
              {dogInfo[step].mealTimeroutine &&
                dogInfo[step].favFoodType &&
                dogInfo[step].getTreats &&
                dogInfo[step].favFoodTypeBrand && (
                  <div className={styles["innerbuttons"]}>
                    {innerStep >= 1 && (
                      <p onClick={() => setInnerStep(innerStep - 1)}>Back ←</p>
                    )}
                    <p onClick={() => setInnerStep(innerStep + 1)}>Next →</p>
                  </div>
                )}
            </>
          )}
          {innerStep === 3 && (
            <>
              <div>
                <b>{dogInfo[step].name}</b>
                <Select
                  defaultValue={dogInfo[step].hasHealthIssue}
                  style={{
                    width: "200px",
                    margin: "10px",
                  }}
                  handleChange={(v) =>
                    handleSelectDogInfoChange(v, "hasHealthIssue", step)
                  }
                  options={[
                    { label: "has", value: "has" },
                    { label: "doesn't have", value: "doesnt" },
                  ]}
                />
                health issues.
                {dogInfo[step].hasHealthIssue === "has" && (
                  <>
                    <p
                      style={{
                        fontSize: "14px",
                        fontStyle: "italic",
                        marginTop: "10px",
                      }}
                    >
                      Select all that apply
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexFlow: "wrap",
                        marginTop: "10px",
                        marginBottom: "20px",
                      }}
                    >
                      {healthTypes.map((p, i) => (
                        <Chip
                          key={i}
                          style={{ margin: "10px" }}
                          text={p}
                          onClick={(e) =>
                            handleChipSelect(p, "healthIssueType", step)
                          }
                          selected={isChipSelected(p, "healthIssueType", step)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div>
                and
                <Select
                  defaultValue={dogInfo[step].needPrescriptionDiet}
                  style={{
                    width: "200px",

                    margin: "10px",
                  }}
                  handleChange={(v) =>
                    handleSelectDogInfoChange(v, "needPrescriptionDiet", step)
                  }
                  options={[
                    { label: "does", value: "does" },
                    { label: "doesn't", value: "doesnt" },
                  ]}
                />
                require a prescription diet.
                {dogInfo[step].needPrescriptionDiet === "does" && (
                  <>
                    <p
                      style={{
                        fontSize: "14px",
                        fontStyle: "italic",
                        marginTop: "10px",
                      }}
                    >
                      Select all that apply
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexFlow: "wrap",
                        marginTop: "10px",
                        marginBottom: "20px",
                      }}
                    >
                      {prescriptionType.map((p, i) => (
                        <Chip
                          key={i}
                          style={{ margin: "10px" }}
                          text={p}
                          onClick={(e) =>
                            handleChipSelect(p, "prescriptionDietType", step)
                          }
                          selected={isChipSelected(
                            p,
                            "prescriptionDietType",
                            step
                          )}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              {dogInfo[step].hasHealthIssue &&
                dogInfo[step].needPrescriptionDiet &&
                buttons}
            </>
          )}
        </div>
      )
    );
  };

  const getAllDogNames = (currentStep: any) => {
    return dogInfo.map((d, i) => (
      <p
        key={i}
        style={{
          borderBottom:
            i === currentStep ? "2px solid #1de783" : "2px solid transparent",
        }}
      >
        {d.name}
      </p>
    ));
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["aboutpets--topnames"]}>
        {getAllDogNames(currentStep)}
      </div>
      <div>{getDogInfoForm(currentStep)}</div>
    </div>
  );
}

export default AboutPets;
