import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid"><b>
             Urban Tadka🍽️, we believe food is not just a meal — it’s an experience.
              Inspired by the simplicity and strength of Lord Shiva, our kitchen serves dishes that are rich in tradition,
              packed with flavor, and made with devotion.
              From hearty thalis and tandoori favorites to regional delicacies that remind you of home,
              every plate we serve carries warmth, authenticity,
              and a touch of divine taste.
           </b> </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
