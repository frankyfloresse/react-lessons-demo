import {IUserResponse} from "../models/IUserResponse.ts";

export const userService = async (page: string, limit: number): Promise<IUserResponse> => {
    const response = await fetch('https://dummyjson.com' + '/users?skip=' + ((+page - 1) * limit) + '&limit=' + limit);
    return await response.json();
}