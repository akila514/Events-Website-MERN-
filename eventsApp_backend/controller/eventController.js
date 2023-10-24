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

const updateEvent = asyncHandler(async (req, res, next) => {
  const updatedEvent = req.body;

  let availableEvent = await Event.findById(req.params.id);

  if (availableEvent) {
    availableEvent.eventName =
      updatedEvent.eventName || availableEvent.eventName;
    availableEvent.description =
      updatedEvent.description || availableEvent.description;
    availableEvent.time = updatedEvent.time || availableEvent.time;
    availableEvent.venue = updatedEvent.venue || availableEvent.venue;
    availableEvent.organizers =
      updatedEvent.organizers || availableEvent.organizers;
    availableEvent.imageLink =
      updatedEvent.imageLink || availableEvent.imageLink;

    await availableEvent.save();
    res.status(200).json(availableEvent);
  } else {
    res.status(404).json({
      message: "Event not found",
      event: updatedEvent,
      availableEvent: availableEvent,
    });
  }
});

export { getEvents, getEventDetailsById, updateEvent };
