import express from "express";
import { getEvents } from "../controller/eventController.js";

const eventsRouter = express.Router();

eventsRouter.route("/").get(getEvents);

export default eventsRouter;
