import {FC} from "react";

interface IProps {
    count: number;
    step: number;
    onChangeCount: (num: number) => void;
}

const Counter: FC<IProps> = ({ count, step, onChangeCount }) => {
    return (
        <div>
            <button onClick={() => {
                onChangeCount(count + step);
            }}>+</button>

            <button onClick={() => {
                onChangeCount(count - step);
            }}>-</button>
        </div>
    );
};

export default Counter;