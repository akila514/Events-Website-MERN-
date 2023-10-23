import React from "react";
import { useGetEventsQuery } from "../store/eventsSlice";
import { Spinner } from "react-bootstrap";
import EventCard from "../components/EventCard";

const EventsContainer = () => {
  const { data: events, isLoading, isError } = useGetEventsQuery();

  return (
    <>
      {isLoading && (
        <div className="20">
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
        </div>
      )}
      {!isLoading && events && (
        <div className="space-y-2 mt-20">
          {events.map((event) => (
            <EventCard key={Math.random()} event={event} />
          ))}
        </div>
      )}
    </>
  );
};

export default EventsContainer;
