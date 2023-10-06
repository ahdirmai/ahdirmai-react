/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const CardItems = ({ title, source }) => (
  <div className="w-full  text-center bg-white border border-gray-200 rounded-lg shadow p-2 dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
      {title}
    </h5>
    <div className="items-end justify-center space-y-2 sm:flex sm:space-y-0 sm:space-x-2 ">
      <a
        href={source}
        className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        target="_blank"
      >
        <div className="text-left  ">
          <div className="-mt-1 font-sans text-sm font-semibold">
            See Credentials
          </div>
        </div>
      </a>
    </div>
  </div>
);

export const Card = ({ items }) => {
  //   console.log("sertif : ", items[0].credential);
  return (
    <div className="grid md:grid-cols-2 gap-2 lg:gap-6">
      {items.map((item) => (
        <CardItems key={item.id} title={item.title} source={item.source} />
      ))}
    </div>
  );
};
