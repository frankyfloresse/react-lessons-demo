import axios from "axios";
import {IUser} from "../models/IUser.ts";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use((request) => {
    request.headers.set('Authorization', 'todo');//додавати додаткові хедери з ключами доступу
    console.log(request.method);
    return request;
})

axiosInstance.interceptors.response.use(
    r => r,
    (error) => {
        if (error.message) {
            alert(error.message)
        }
    }
)

export const getAllUsers = async (): Promise<IUser[]> => {
    const { data } = await axiosInstance.get<IUser[]>('/users');
    return data;
}

export const saveUser = async (user: IUser): Promise<IUser> => {
    const { data } = await axiosInstance.post<IUser>('/users', user);
    return data;
}
