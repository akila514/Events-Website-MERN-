import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetEventDetailsByIdQuery } from "../store/eventsSlice";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaHeart, FaShare, FaComment } from "react-icons/fa";

const EventDescription = () => {
  const { id: eventId } = useParams();
  const {
    data: event,
    isLoading,
    isError,
  } = useGetEventDetailsByIdQuery(eventId);

  const userInfo = useSelector((state) => state.auth.userInfo);

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
            <span className="text-[#f3f3f3] font-bold mr-2">Held At</span>
            {event.time}
          </p>
          <p>
            <span className="font-bold text-[#f3f3f3] mr-2">Venue</span>
            {event.venue}
          </p>
          {userInfo.isAdmin && (
            <div className="justify-between flex flex-row">
              <div className="space-x-5 flex flex-row text-[#a7a7a7]">
                <FaHeart className="flex my-auto" />
                <FaComment className="flex my-auto" />
                <FaShare className="flex my-auto" />
              </div>
              <div className="flex flex-row space-x-5">
                <Link
                  to={`/events/edit/${eventId}`}
                  className="my-5 bg-[#3498db] max-w-xs text-center py-1 px-5 rounded-lg"
                >
                  Update event
                </Link>
                <Link className="my-5 bg-[#f3f3f3] text-gray-800 max-w-xs text-center py-1 px-5 rounded-lg">
                  Delete event
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EventDescription;
