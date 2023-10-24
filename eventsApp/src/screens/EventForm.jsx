import React from "react";
import { useParams } from "react-router-dom";
import { useGetEventDetailsByIdQuery } from "../store/eventsSlice";

const EventForm = () => {
  const { id: eventId } = useParams();

  const {
    data: event,
    isLoading,
    isError,
  } = useGetEventDetailsByIdQuery(eventId);
  return (
    <>
      {event && (
        <form className="mx-5 md:mx-32 mt-20 space-y-5">
          <h2 className="font-bold text-2xl">Add Event</h2>
          <input
            value={event.eventName}
            onChange={() => {}}
            className="focus:outline-none text-white w-full bg-transparent py-2 px-3 rounded-lg border"
            placeholder="Enter event name"
          />
          <input
            value={event.description}
            onChange={() => {}}
            className="focus:outline-none text-white w-full bg-transparent py-2 px-3 rounded-lg border"
            placeholder="Enter event description"
          />
          <input
            value={event.time}
            onChange={() => {}}
            className="focus:outline-none text-white w-full bg-transparent py-2 px-3 rounded-lg border"
            placeholder="Enter event time"
          />
          <input
            value={event.venue}
            onChange={() => {}}
            className="focus:outline-none text-white w-full bg-transparent py-2 px-3 rounded-lg border"
            placeholder="Enter event venue"
          />
          <input
            value={event.organizers}
            onChange={() => {}}
            className="focus:outline-none text-white w-full bg-transparent py-2 px-3 rounded-lg border"
            placeholder="Enter event organizers"
          />
          <input
            value={event.imageLink}
            onChange={() => {}}
            className="focus:outline-none text-white w-full bg-transparent py-2 px-3 rounded-lg border"
            placeholder="Enter event image link"
          />
          <button className="my-5 bg-[#3498db] text-white max-w-xs text-center py-1 px-5 rounded-lg">
            Update event
          </button>
        </form>
      )}
    </>
  );
};

export default EventForm;
