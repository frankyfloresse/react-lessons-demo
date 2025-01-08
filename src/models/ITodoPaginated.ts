import {ITodo} from "./ITodo.ts";

export interface ITodoPaginated {
  todos: ITodo[];
  total: number;
  skip: number;
  limit: number;
}