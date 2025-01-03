import {IUser} from "../models/IUser.ts";
import {urls} from "../constants/urls.ts";
import {IPost} from "../models/IPost.ts";

export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.allUsers)
            .then((response) => response.json())
    },
    getUser: async (id: number): Promise<IUser> => {
        return await fetch(urls.users.byId(id))
            .then((response) => response.json())
    }
}

export const postServices = {
    getAllPostsOfUserById: async (id: number): Promise<IPost[]> => {
        return await fetch(urls.posts.userPostsById(id))
            .then((response) => response.json())
    }
}