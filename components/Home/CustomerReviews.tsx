import React from "react";
import styles from "@/styles/Home/CustomerReviews.module.scss";
import Image from "next/image";
import star from "../../public/imgs/star.png";
import HorizontalScroller from "../Shared/HorizontalScroller";
import DogImage from "../../public/imgs/user-review-1.jpg";
import DogImage2 from "../../public/imgs/karsten-winegeart-Z-rSM6yKgxo-unsplash.jpg";
import DogImage3 from "../../public/imgs/karsten-winegeart-BJaqPaH6AGQ-unsplash.jpg";
import {
  IoChatbubbleOutline,
  IoPaperPlaneSharp,
  IoHeartSharp,
} from "react-icons/io5";
import { BsPatchCheckFill } from "react-icons/bs";
import Button from "../Shared/Button";

const dummyData = [
  {
    name: "Molly",
    review:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",
    img: DogImage,
  },
  {
    name: "John Doe",
    stars: 5,
    overview:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    details:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    name: "Molly",
    review:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",
    img: DogImage2,
  },
  {
    name: "John Doe",
    stars: 5,
    overview:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    details:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    name: "Molly",
    review:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",
    img: DogImage3,
  },
  {
    name: "John Doe",
    stars: 5,
    overview:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
    details:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

interface InstagramCardProps {
  img: string;
  name: string;
  review: string;
  itemId?: number;
}
function InstagramCard({ img, name, review, itemId }: InstagramCardProps) {
  return (
    <div className={styles["instagram-card"]}>
      <Image src={img} alt="instagram" height={280} width={320} />

      <div className={styles["instagram-card--content"]}>
        <div className={styles["instagram-card--icons"]}>
          <IoHeartSharp />
          <IoChatbubbleOutline />
          <IoPaperPlaneSharp />
        </div>
        <p>
          <b>{name} </b>
          {review}
        </p>
      </div>
    </div>
  );
}
interface ReviewCardProps {
  name: string;
  stars: number;
  overview: string;
  details: string;
  itemId?: number;
}

function ReviewCard({ name, stars, overview, details }: ReviewCardProps) {
  return (
    <div className={styles["review-card"]}>
      {[...Array(stars)].map((_, i) => (
        <Image src={star} alt="star" height={16} width={16} key={i} />
      ))}
      <div className={styles["review-card--content"]}>
        <h3>
          <span>{name}</span>
          <BsPatchCheckFill />
        </h3>
        <p>{overview}</p>
        <p>{details}</p>
      </div>
    </div>
  );
}

function CustomerReviews() {
  return (
    <>
      <section className={styles["customer-reviews"]}>
        <h1>Over 100,000,000 meals delivered.</h1>
        <p>What Customers Are Saying</p>
        <div
          style={{
            width: "121px",
            height: "3px",
            marginTop: "8px",
            backgroundColor: "#f2674b",
            margin: "0 auto",
          }}
        ></div>
        <ul>
          <li>
            Fewer <br /> Vet Visits
          </li>
          <li>
            Increased <br /> Vitality
          </li>
          <li>
            Clear Skin & <br /> Shiny Coat
          </li>
          <li>
            Less <br /> “Dog Odor”
          </li>
          <li>
            Better <br /> # 2
          </li>
        </ul>

        <div className={styles["customer-reviews--cards"]}>
          <HorizontalScroller>
            {dummyData.map((data, i) =>
              data.stars ? (
                <ReviewCard
                  itemId={i}
                  key={i}
                  details={data.details}
                  stars={data.stars}
                  overview={data.overview}
                  name={data.name}
                />
              ) : (
                <InstagramCard
                  key={i}
                  itemId={i}
                  name={data.name}
                  review={data.review || ""}
                  img={(data.img as any) || ""}
                />
              )
            )}
          </HorizontalScroller>
        </div>
      </section>
      <section className={styles["recom-plan"]}>
        <div className={styles["recom-plan--inner"]}>
          <h1>See your dog’s recommended plan!</h1>
          <p>
            Get fresh food conveniently delivered with our personalized meal
            plans.
          </p>
          <Button
            text="Create your plan"
            onClick={() => {
              console.log("create plan");
            }}
          />
        </div>
      </section>
    </>
  );
}

export default CustomerReviews;
