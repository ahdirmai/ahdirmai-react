/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
const TimeLineItem = ({ year, title, description }) => (
  <li>
    <div className="flex-start flex items-center pt-3">
      <div className="ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
      <p className="text-sm text-neutral-500 dark:text-neutral-300">{year}</p>
    </div>
    <div className="mb-6 ml-4 mt-2">
      <h4 className="mb-1.5 text-xl font-semibold">{title}</h4>
      <p className="mb-3 text-neutral-500 dark:text-neutral-300">
        {description}
      </p>
    </div>
  </li>
);
export const TimeLine = ({ items }) => {
  return (
    <ol className="border-l border-neutral-300 dark:border-neutral-500">
      {items.map((item) => (
        <TimeLineItem
          key={item.id}
          year={item.year}
          title={item.title}
          description={item.description}
        />
      ))}
    </ol>
  );
};
