import {ITodoPaginated} from "../models/ITodoPaginated.ts";

export const getTodoList = async (skip: number): Promise<ITodoPaginated> => {
    const res = await fetch(`https://dummyjson.com/todos?skip=${skip}`);
    return await res.json();
}