import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductsResponseModel} from "../models/IProductsResponseModel.ts";
import {retrieveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

type LoginData = {
    username: string;
    password: string;
    expiresInMins: number;
}

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})

// 2. Function modifies the requests before they are sent to the server
axiosInstance.interceptors.request.use(request => {
    // Condition checks if HTTP method of request is 'GET'
    // Elvis (?.) ensures the code doesn't throw error if method is undefined
    if (request.method?.toUpperCase() === 'GET') {
        // Adds Auth header to the request.
        // Retrieves user's access token from localStorage (using retrieveLocalStorage function from helpers)
        request.headers.Authorization = 'Bearer ' + retrieveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return request;
})

// 1.From login page - payload: LoginData - an argument which is an object with user's login info (username and password)
export const login = async (payload: LoginData): Promise<IUserWithTokens> => {
    // HTTP POST request to '/login' endpoint with the user's login info
    // Expects a response - object userWithTokens of type IUserWithTokens with user info and auth tokens
    const { data: userWithTokens } = await axiosInstance.post<IUserWithTokens>('/login', payload);

    //Stores userWithTokens object in the browser's localStorage after converting it to JSON
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}

// 3. Returns the array of products
// This function is used to load data that requires user authentication,
// Presence of a valid access token in Axios Headers (set via interceptors) is crucial for success
export const loadAuthProducts = async (): Promise<IProduct[]> => {
    // Sends an HTTP GET request to '/products' endpoint
    // Expects a response - array of products of type IProductsResponseModel
    const { data: {products} } = await axiosInstance.get<IProductsResponseModel>('/products');
    return products;
}

export const refresh = async () => {
    // Retrieves the current user token details from localStorage to get the refreshToken needed for the request
    const userWithTokens = retrieveLocalStorage<IUserWithTokens>('user');

    //Sends POST request to '/refresh' endpoint with current refreshToken to obtain new tokens
    const { data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: userWithTokens.refreshToken,
        expiresInMins: 1
    });

    userWithTokens.accessToken = accessToken;
    userWithTokens.refreshToken = refreshToken;

    //Updates localStorage with the new token details
    localStorage.setItem('user', JSON.stringify(userWithTokens));
}