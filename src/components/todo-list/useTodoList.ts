import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";
import {getTodoList} from "../../services/todo.sevices.ts";

export const useTodoList = () => {
    const [page, setPage] = useState(1);

    const [todos, setTodos] = useState<ITodo[]>([]);
    const [totalPages, setTotalPages] = useState(0)

    const LIMIT = 30

    useEffect(() => {
        const fetchData = async () => {
            const { todos, total } = await getTodoList((page - 1) * LIMIT);
            setTodos(todos);
            setTotalPages(Math.ceil(total / LIMIT));
        }

        fetchData();
    }, [page]);

    return {
        todos,
        totalPages,
        page,
        setPage,
    }
}