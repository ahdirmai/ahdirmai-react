/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Card } from "../components/Card";

const sertifications = [
  {
    id: 1,
    title: "Google IT Support - Google",
    source:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/5Y9G3T9J3KQG",
  },
  {
    id: 2,
    title: "Google IT Automation With Python – Google",
    source:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/5Y9G3T9J3KQG",
  },
  {
    id: 3,
    title: "IBM DevOps and Software Engineering Professional Certificate",
    source:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/5Y9G3T9J3KQG",
  },
  {
    id: 4,
    title: "Belajar Dasar Pemrograman Web – Dicoding Indonesia",
    source:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/5Y9G3T9J3KQG",
  },
  {
    id: 5,
    title: "Junior Web Developer – Digitalent Kominfo",
    source:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/5Y9G3T9J3KQG",
  },
  {
    id: 6,
    title: "Build a Website on Google Cloud",
    source:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/5Y9G3T9J3KQG",
  },
];

const services = [
  {
    id: 1,
    title: "System Analyst",
    desc: "Abble to assist in analyzing and designing effective information technology solutions to enhance your business efficiency.",
  },
  {
    id: 2,
    title: "Web Development",
    desc: "Abble to development a web services to bring your online vision to life, creating responsive and user-friendly websites tailored to your unique needs.",
  },
  {
    id: 3,
    title: "Web Deployment and Monitoring",
    desc: "Specialize in seamless web deployment, ensuring your website or application goes live smoothly, securely, and efficiently to reach your audience.",
  },
];

const ServicesItems = ({ title, desc }) => (
  <div className="flex space-x-2 sm:space-x-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 512 512"
      className="flex-shrink w-6 h-6"
    >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
    <div className="space-y-2">
      <p className="text-lg font-medium leadi">{title}</p>
      <p className="leadi"> {desc}</p>
    </div>
  </div>
);
export const ServiceAndSertif = () => {
  return (
    <section className="snap-start" id="about-me">
      <div className="container">
        <div className=" lg:w-screen lg:h-screen flex m-[15px] pt-10  gap-[20px] lg:pr-[40px] flex-col">
          <div className="text-5xl xl:text-[90px] font-extrabold text-center lg:mt-[20px]">
            services and sertification
          </div>
          <div className="text-center mx-auto xl:w-2/3">
            <p className="text-sm xl:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
              cupiditate, distinctio eum earum consequuntur iure ut dolorum aut.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:grid-rows-2 auto-cols-min">
            <div>
              <h2 className="text-3xl xl:text-[45px] font-extrabold lg:mt-[10px] xl:mb-[20px] xl:mt-[25px] text-center">
                Services
              </h2>
              <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12  dark:bg-violet-400 dark:text-gray-900">
                  {services.map((item) => (
                    <ServicesItems
                      key={item.id}
                      title={item.title}
                      desc={item.desc}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl xl:text-[45px] font-extrabold lg:mt-[10px] xl:mt-[25px] xl:mb-[20px] text-center">
                Sertification
              </h2>
              <Card items={sertifications} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
