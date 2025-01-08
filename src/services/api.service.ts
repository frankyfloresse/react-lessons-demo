import {IUserReqres} from "../models/IUserReqres.ts";

export const getAllUsers = async (page: string): Promise<IUserReqres> => {
    return await fetch('https://reqres.in/api/users?page=' + page)
        .then(res => res.json())
}

