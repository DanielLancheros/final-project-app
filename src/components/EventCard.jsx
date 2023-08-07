import { useState, useEffect } from "react";

export default function EventCard({ cardInfo }) {
  return (
    <section className="flex flex-row flex-wrap  w-[90%] mx-auto justify-center">
      {cardInfo.map((cardInfo) => (
        <div className=" p-6 mb-10 mx-7 md:w-[40%] w-50% w-[100%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {cardInfo.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Date: {cardInfo.date}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Time: {cardInfo.time}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Location: {cardInfo.location}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Address: {cardInfo.address}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Participants: {cardInfo.participants}
          </p>
          
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
      
        </div>
      ))}
    </section>
  );
}
