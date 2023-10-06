/* eslint-disable no-unused-vars */
import React from "react";
import { TimeLine } from "../components/TimeLine";

const aboutMeDesc =
  "My full name is Ridha Fahmi Junaidi, usually called Ridha. I am a final year student at Lambung Mangkurat University (ULM) majoring in Computer Science. I have good adaptability in new environment. I can also well analyze a problem and solve it as long as it's within my limits. I have a high interest in photography, programming and data analysis. However, it is possible for me to learn new things.";

const educations = [
  {
    id: 1,
    year: "2018 - present",
    title: "Lambung Mangkurat University",
    description:
      "Computer Science, Faculty of Mathematics and Natural Sciences",
  },
  {
    id: 2,
    year: "2015 - 2018",
    title: "MAN 2 Model Banjarmasin",
    description: "Mathematics and Natural Sciences",
  },
];

const experiences = [
  {
    id: 1,
    year: "January 2023 - present",
    title: "Web Developer at Digitaliz YHC",
    description:
      "Handled the development of the Hulu Talent website from PT.CDI",
  },
  {
    id: 2,
    year: "Agust 2022 – December 2022",
    title: "Intern at Digitaliz YHC (MSIB) position Web Developer ",
    description:
      "Using Laravel, Tailwind, Bootstrap frameworks to create web applications ",
  },
  {
    id: 3,
    year: "2 Months",
    title: "Intern at DISPORABUDPAR Kota Banjarbaru",
    description:
      "Create a Geographic Information System for Tourist Destinations in the city of Banjarbaru ",
  },
];

export const AboutMe = () => {
  return (
    <section className="snap-start" id="about-me">
      <div className="container">
        <div className=" lg:w-screen lg:h-screen flex m-[15px] pt-10  gap-[20px] lg:pr-[40px] flex-col">
          <div className="text-5xl xl:text-[90px] font-extrabold text-center lg:mt-[20px]">
            about me.
          </div>
          <div className="text-center mx-auto xl:w-2/3">
            <p className="text-sm xl:text-base">{aboutMeDesc}</p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-6 auto-cols-min">
            <div>
              <h2 className="text-3xl xl:text-[45px] font-extrabold lg:mt-[10px] xl:mb-[20px] xl:mt-[25px] text-center">
                education
              </h2>
              <TimeLine items={educations} />
            </div>
            <div>
              <h2 className="text-3xl xl:text-[45px] font-extrabold lg:mt-[10px] xl:mt-[25px] xl:mb-[20px] text-center">
                work experience
              </h2>
              <TimeLine items={experiences} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
