import express from "express";
import {
  getEventDetailsById,
  getEvents,
} from "../controller/eventController.js";
import { protect } from "../middleware/authMiddleware.js";

const eventsRouter = express.Router();

eventsRouter.route("/").get(getEvents);
eventsRouter.route("/:id").get(protect, getEventDetailsById);

export default eventsRouter;
