
import { prisma } from "../../../lib/prisma";

const registerAsGuest = async (payload: any) => {
    const result = await prisma.user.create({
        data: { ...payload }
    })
    return result
}

export const UserService = {
    registerAsGuest
}