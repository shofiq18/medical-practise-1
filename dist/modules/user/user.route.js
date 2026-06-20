import { Router } from "express";
import { UserController } from "./user.controller.js";
import validateRequest from "../../app/middlewares/validateRequest.js";
import { createUserSchema } from "./user.schema.js";
const router = Router();
router.post("/", validateRequest(createUserSchema), UserController.createUser);
router.get("/", UserController.getUsers);
export const UserRoutes = router;
