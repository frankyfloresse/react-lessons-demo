import {FC} from "react";
import {ITodo} from "../../models/ITodo.ts";

interface IProps {
    item: ITodo;
}

const TodoItem: FC<IProps> = ({ item }) => {
    return (
        <div>
            {item.todo}
        </div>
    );
};

export default TodoItem;