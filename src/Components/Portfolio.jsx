/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Cancer Detection: Detecting cancer using ultrasound by Deep Learning Techniques",
    description:
      "The model we develop is designed to handle images from various sources and classify them according to their clinical significance. The first model aims to distinguish between ultrasound images and non-ultrasound images, thereby filtering out irrelevant images and focusing on those that may indicate the presence of cancer. The second model classifies images based on their relevance to breast and gallbladder cancer, further narrowing down the scope of analysis.",
    url: "https://github.com/Siddhartha127/Cancer_Detection_Using_Ultrasounds",
  },
  {
    title: "Spam SMS detection",
    description:
      "A Spam SMS Detection project involves creating a system to identify and filter out unsolicited or harmful text messages. Heres a brief description:",
    url: "https://github.com/Siddhartha127/ML-Projects/blob/main/Spam_SMS.ipynb",
  },
  {
    title: "Todo List using React",
    description:
      "Created a Todo List using React.js.",
    url: "https://github.com/Siddhartha127/ToDo",
  },
  {
    title: "React Projects",
    description:
      "Project for learning and practicing React Js",
    url: "https://github.com/Siddhartha127/React_Projects",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
