import express from "express";
import {getUsers, createUser} from "../controllers/userController.js";
import { validateUser } from "../validators/userValidator.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", validateUser, createUser);

export default router;