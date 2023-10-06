/* eslint-disable no-unused-vars */
import React from "react";

const ToolsItems = [
  {
    id: 1,
    title: "HTML",
    source: "html.png",
  },
  {
    id: 2,
    title: "CSS",
    source: "css.png",
  },
  {
    id: 3,
    title: "Javascript",
    source: "js.png",
  },
  {
    id: 4,
    title: "PHP",
    source: "php.png",
  },
  {
    id: 5,
    title: "Laravel",
    source: "laravel.png",
  },
  {
    id: 6,
    title: "React",
    source: "react.png",
  },
  {
    id: 7,
    title: "Tailwind",
    source: "tailwind.png",
  },
  {
    id: 8,
    title: "Bootstrap",
    source: "bootstrap.png",
  },
  {
    id: 9,
    title: "MySQL",
    source: "mysql.png",
  },
  {
    id: 10,
    title: "Github",
    source: "github.png",
  },
  {
    id: 11,
    title: "Git",
    source: "git.png",
  },
  {
    id: 12,
    title: "AWS",
    source: "aws.png",
  },
  {
    id: 13,
    title: "GCP",
    source: "gcp.png",
  },
  {
    id: 14,
    title: "Azure",
    source: "azure.png",
  },
  {
    id: 15,
    title: "IBM",
    source: "ibm.png",
  },
  {
    id: 16,
    title: "Jupyter",
    source: "jupyter.png",
  },
  {
    id: 17,
    title: "Livewire",
    source: "livewire.png",
  },
  {
    id: 18,
    title: "NPM",
    source: "npm.png",
  },
  {
    id: 19,
    title: "Terminal",
    source: "terminal.png",
  },
  {
    id: 20,
    title: "Vite",
    source: "vite.png",
  },
  {
    id: 21,
    title: "VSC",
    source: "vsc.png",
  },
];

export const Tools = () => {
  return (
    <section className="snap-start" id="about-me">
      <div className="container">
        <div className=" lg:w-screen lg:h-screen flex m-[20px] pt-10  gap-[20px] lg:pr-[40px] flex-col">
          <div className="text-5xl xl:text-[90px] font-extrabold text-center lg:mt-[40px]">
            Tools
          </div>
          <div className="text-center mx-auto xl:w-2/3">
            <p className="text-sm xl:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
              cupiditate, distinctio eum earum consequuntur iure ut dolorum aut.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-[20px] mt-[20px] lg:p-10">
            {ToolsItems.map((item) => (
              <div
                key={item.id}
                className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[125px] lg:h-[125px]  bg-dark text-white rounded-full shadow-md flex items-center justify-center"
              >
                <img
                  src={`/tools/${item.source}`}
                  alt={item.title}
                  className="w-[45px] h-[45px] md:w-[90px] md:h-[90px] lg:w-[110px] lg:h-[110px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
