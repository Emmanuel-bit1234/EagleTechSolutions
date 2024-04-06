import { React, useEffect } from "react";
import { Cards } from "./Cards";
import cardImg3 from "../components/img/card-img1.jpg";
import cardImg2 from "../components/img/card-img2.jpg";
import cardImg1 from "../components/img/card-img3.jpg";
import { Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
export const Whatwedo = () => {
  const cards = [
    {
      title: "Web & Mobile Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.",
      imgUrl: cardImg1,
    },

    {
      title: "Professional Email Creation",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.",
      imgUrl: cardImg2,
    },
    {
      title: "Website & Logo Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.",
      imgUrl: cardImg3,
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <section className="whatwedo" id="whatwedo">
      <div className="container">
        <h1>What we do?</h1>
        <div className="card-bx" data-aos="zoom-in-down">
          {cards.map((card, index) => {
            return <Cards key={index} {...card} />;
          })}
        </div>
      </div>
    </section>
  );
};
