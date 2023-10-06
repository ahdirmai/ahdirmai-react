/* eslint-disable no-unused-vars */
import React from "react";

export const Hero = () => {
  return (
    <section className="snap-start " id="hero-section">
      <div className="container">
        <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
          <div className="flex items-stretch justify-center">
            <div className="font-extrabold text-6xl md:text-[90px] md:ml-10 self-center md:self-end">
              Portfolio.
            </div>
          </div>
          <div className="md:col-start-2 md:row-start-2 flex justify-center items-center flex-col">
            <div className="justify-items-start text-base md:text-[20px]">
              <p className="font-light">
                <span className="font-medium">Created by</span> ahdirmai
              </p>
              <p className="font-light">
                <span className="font-medium">Email</span> ahdirmai@gmail.com
              </p>
            </div>
          </div>
          <div className="md:col-span-2 md:row-start-3 mb-5 flex justify-center self-end">
            <button className="px-4 font-extrabold py-2 rounded-md flex md:items-center animate-bounce">
              scroll down
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
