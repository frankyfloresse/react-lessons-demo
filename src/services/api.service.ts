import {IUser} from "../models/IUser.ts";

// const baseUrl = import.meta.env.VITE_API_URL;

// export const getUsers = async (): Promise<IUser[]> => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     return await response.json();
// }

export const getUsers = async (): Promise<IUser[]> => {
    const response = await fetch(import.meta.env.VITE_API_URL);
    return await response.json();
}

export const getUser = async (id: string): Promise<IUser> => {
    const response = await fetch(import.meta.env.VITE_API_URL + '/' + id);
    return await response.json();
}