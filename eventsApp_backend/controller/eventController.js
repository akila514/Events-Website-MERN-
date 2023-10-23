import asyncHandler from "../middleware/asyncHandler.js";
import Event from "../models/event.js";

const getEvents = asyncHandler(async (req, res, next) => {
  const events = await Event.find({});
  res.json(events);
});

const getEventDetailsById = asyncHandler(async (req, res, next) => {
  const event = await Event.findById(req.params.id);
  res.json(event);
});

export { getEvents, getEventDetailsById };
