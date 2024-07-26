import express from "express";
import { getClub } from "../controller/club.controller.js";

const router = express.Router();

router.get("/", getClub);

export default router;