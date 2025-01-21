import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProductsResponseModel} from "../models/IProductsResponseModel.ts";
import {IProduct} from "../models/IProduct.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

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
        request.headers.Authorization = 'Bearer ' + localStorage.getItem('access_token');
    }
    return request;
})

const saveTokens = (tokens: ITokenPair) => {
    localStorage.setItem('access_token', tokens.accessToken);
    localStorage.setItem('refresh_token', tokens.refreshToken);
}

export const login = async (payload: IPayload): Promise<IUserWithTokens> => {
    const { data } = await axiosInstance.post<IUserWithTokens>('/login', payload);
    saveTokens(data);
    return data;
}

export const authProducts = async (): Promise<IProduct[]> => {
    const { data } =  await axiosInstance.get<IProductsResponseModel>('/products');
    return data.products;
}

export const refresh = async () => {
    const { data } = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: localStorage.getItem('access_token'),
        expiresInMins: 1
    });

    saveTokens(data);
}

