import { Router } from "express";
import { UserRoutes } from "../../modules/user/user.route.js";

const router = Router();

router.use("/users", UserRoutes);

export default router;

