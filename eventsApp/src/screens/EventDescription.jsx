import React from "react";
import { useParams } from "react-router-dom";
import { useGetEventDetailsByIdQuery } from "../store/eventsSlice";
import { Spinner } from "react-bootstrap";

const EventDescription = () => {
  const { id: eventId } = useParams();
  const {
    data: event,
    isLoading,
    isError,
  } = useGetEventDetailsByIdQuery(eventId);

  return (
    <div className="mt-20">
      {isLoading && (
        <Spinner
          animation="border"
          role="status"
          style={{
            color: "white",
            width: "50px",
            height: "50px",
            margin: "auto",
            display: "block",
          }}
        />
      )}
      {event && !isLoading && (
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl">{event.eventName}</h2>
          <p className="mb-10 text-[#999999] text-lg">
            <span className="font-bold mr-2">Organized by</span>
            {event.organizers}
          </p>
          <img src={event.imageLink} className="object-cover h-[300px]" />
          <p className="text-lg my-4">{event.description}</p>
          <p>
            <span className="text-[#3498db] font-bold mr-2">Held At</span>
            {event.time}
            <span className="mx-1 text-[#3498db]">in</span>
            {event.venue}
          </p>
        </div>
      )}
    </div>
  );
};

export default EventDescription;
