import { UserService } from "./user.service.js";
const createUser = async (req, res) => {
    const result = await UserService.createUser(req.body);
    res.status(201).json({
        success: true,
        data: result,
    });
};
const getUsers = async (req, res) => {
    const result = await UserService.getUsers();
    res.json({
        success: true,
        data: result,
    });
};
export const UserController = {
    createUser,
    getUsers,
};
