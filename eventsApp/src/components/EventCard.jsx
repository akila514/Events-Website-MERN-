import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <Link to={`/events/${event._id}`}>
      <div className="flex flex-row mb-2 space-y-2 px-10 shadow-md w-full p-5 rounded-lg bg-[#1d1d1d] hover:cursor-pointer hover:scale-105 transform duration-150 ease-in-out">
        <div className="flex flex-col">
          <h2 className="font-bold">{event.eventName}</h2>
          <p className="text-[#adadad]">{event.time}</p>
        </div>
        <div className="flex-grow" />
        <FaArrowRight className="text-[#adadad]" size={20} />
      </div>
    </Link>
  );
};

export default EventCard;
