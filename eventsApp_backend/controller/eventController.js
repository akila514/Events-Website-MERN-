import asyncHandler from "../middleware/asyncHandler.js";
import Event from "../models/event.js";

const getEvents = asyncHandler(async (req, res, next) => {
  const events = await Event.find({});
  res.json(events);
});

export { getEvents };
