import { EVENTS_URL } from "../constants";
import apiSlice from "./apiSlice";

const eventsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => ({
        url: EVENTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),

    getEventDetailsById: builder.query({
      query: (eventId) => ({
        url: `${EVENTS_URL}/${eventId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetEventsQuery, useGetEventDetailsByIdQuery } = eventsSlice;
