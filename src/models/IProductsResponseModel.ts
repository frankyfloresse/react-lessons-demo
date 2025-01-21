import {IProduct} from "./IProduct.ts";

export interface IProductsResponseModel {
    total: number;
    skip: number;
    limit: number;
    products: IProduct[];
}