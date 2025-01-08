import {useTodoList} from "./useTodoList.ts";
import TodoItem from "../todo-item/TodoItem.tsx";
import Pagination from "../pagination/Pagination.tsx";


const TodoList = () => {
    const { todos, page, setPage, totalPages } = useTodoList();

    return (
        <div>
            <div>{todos.map(item => <TodoItem key={item.id} item={item}/>)}</div>
            <Pagination page={page} maxPage={totalPages} onPageChange={(page) => setPage(page)} />
        </div>
    );
};

export default TodoList;