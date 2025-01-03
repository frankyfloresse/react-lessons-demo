import {IUserReq} from "../models/IUserReq.ts";

export const getAllUsers = async (pg: string): Promise<IUserReq> => {
    return await fetch('https://reqres.in/api/users?page=' + pg)
        .then(res => res.json()); //baseUrl ??
}