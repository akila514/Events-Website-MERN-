import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  time: {
    type: String,
    required: true,
  },

  venue: {
    type: String,
    required: true,
  },

  organizers: {
    type: String,
    required: true,
  },

  imageLink: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model("Event", eventsSchema);
export default Event;
