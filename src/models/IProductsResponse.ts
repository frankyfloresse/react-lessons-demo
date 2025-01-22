import {IProduct} from "./IProduct.ts";

export interface IProductsResponse {
    total: number;
    skip: number;
    limit: number;
    products: IProduct[];
}