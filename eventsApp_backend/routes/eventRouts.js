import express from "express";
import {
  getEventDetailsById,
  getEvents,
  updateEvent,
} from "../controller/eventController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const eventsRouter = express.Router();

eventsRouter.route("/").get(getEvents);
eventsRouter.route("/:id").get(getEventDetailsById);
eventsRouter.route("/edit/:id").post(protect, admin, updateEvent);

export default eventsRouter;
