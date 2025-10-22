// backend/routes/userRoutes.js
import express from "express";
import { getUsers, getUser, updateUsers, deleteUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);
router.put("/:id", updateUsers);


export default router;
