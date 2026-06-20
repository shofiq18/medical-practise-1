import { prisma } from "../../config/prisma.js";
const createUser = async (payload) => {
    const result = await prisma.user.create({
        data: payload,
    });
    return result;
};
const getUsers = async () => {
    return prisma.user.findMany();
};
export const UserService = {
    createUser,
    getUsers,
};
