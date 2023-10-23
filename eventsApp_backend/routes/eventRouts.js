import express from "express";
import {
  getEventDetailsById,
  getEvents,
} from "../controller/eventController.js";

const eventsRouter = express.Router();

eventsRouter.route("/").get(getEvents);
eventsRouter.route("/:id").get(getEventDetailsById);

export default eventsRouter;
