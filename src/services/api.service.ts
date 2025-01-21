import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {retrieveLocalStorage} from "./helpers.ts";
import {IProductsResponseModel} from "../models/IProductsResponseModel.ts";
import {IProduct} from "../models/IProduct.ts";

interface IPayload {
    username: string;
    password: string;
    expiresInMins: number;
}

export const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})

axiosInstance.interceptors.request.use(request => {
    if (request.method?.toUpperCase() === 'GET') {
        request.headers.Authorization = 'Bearer ' + retrieveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return request;
})

export const login = async (payload: IPayload): Promise<IUserWithTokens> => {
    const { data } = await axiosInstance.post<IUserWithTokens>('/login', payload);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
}

export const authProducts = async (): Promise<IProduct[]> => {
    const { data } =  await axiosInstance.get<IProductsResponseModel>('/products');
    return data.products;
}

