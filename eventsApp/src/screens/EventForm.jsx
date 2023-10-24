import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetEventDetailsByIdQuery,
  useUpdateEventMutation,
} from "../store/eventsSlice";

const EventForm = () => {
  const { id: eventId } = useParams();

  const navigate = useNavigate();

  const {
    data: event,
    isLoading,
    isError,
    refetch,
  } = useGetEventDetailsByIdQuery(eventId);

  const [updateEvent] = useUpdateEventMutation();

  const [eventName, setEventName] = useState(event?.eventName || "");
  const [description, setDescription] = useState(event?.description || "");
  const [time, setTime] = useState(event?.time || "");
  const [venue, setVenue] = useState(event?.venue || "");
  const [organizers, setOrganizers] = useState(event?.organizers || "");
  const [imageLink, setImageLink] = useState(event?.imageLink || "");

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      await updateEvent({
        _id: eventId,
        eventName,
        description,
        time,
        venue,
        organizers,
        imageLink,
      });

      await refetch();

      navigate(`/events/${eventId}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {event && (
        <form
          className="mx-5 md:mx-32 mt-20 space-y-5"
          onSubmit={submitHandler}
        >
          <h2 className="font-bold text-2xl">Add Event</h2>
          <input
            value={eventName}
            onChange={(e) => {
              setEventName(e.target.value);
            }}
            className="focus:outline-none text-white w-full bg-transparent py-2 px-3 rounded-lg border"
            placeholder="Enter event name"
          />
          <input
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="focus:outline-none text-white w-full bg-transparent py-2 px-3 rounded-lg border"
            placeholder="Enter event description"
          />
          <input
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
            className="focus:outline-none text-white w-full bg-transparent py-2 px-3 rounded-lg border"
            placeholder="Enter event time"
          />
          <input
            value={venue}
            onChange={(e) => {
              setVenue(e.target.value);
            }}
            className="focus:outline-none text-white w-full bg-transparent py-2 px-3 rounded-lg border"
            placeholder="Enter event venue"
          />
          <input
            value={organizers}
            onChange={(e) => {
              setOrganizers(e.target.value);
            }}
            className="focus:outline-none text-white w-full bg-transparent py-2 px-3 rounded-lg border"
            placeholder="Enter event organizers"
          />
          <input
            value={imageLink}
            onChange={(e) => {
              setImageLink(e.target.value);
            }}
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
