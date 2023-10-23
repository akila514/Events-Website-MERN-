import React from "react";
import { useGetEventsQuery } from "../store/eventsSlice";
import { Spinner } from "react-bootstrap";

const HomeScreen = () => {
  const { data: events, isLoading, isError } = useGetEventsQuery();

  console.log(isLoading);

  return (
    <>
      {isLoading && (
        <Spinner
          animation="border"
          role="status"
          style={{
            width: "50px",
            height: "50px",
            margin: "auto",
            display: "block",
          }}
        />
      )}
      {!isLoading && events && <div>List items</div>}
    </>
  );
};

export default HomeScreen;
