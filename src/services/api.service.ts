import {IUser} from "../models/IUser.ts";
import {urls} from "../constants/urls.ts";

export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        const response = await fetch(urls.users.allUsers)
        return await response.json();
    },

    getUser: async (id: number): Promise<IUser> => {
        const response = await fetch(urls.users.byId(id));
        return await response.json();
    }
}