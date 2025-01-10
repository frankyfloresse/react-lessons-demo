import Counter from "../counter/Counter.tsx";
import {useState} from "react";


const ParentSecond = () => {
    const [count, setCount] = useState(1);
    const step = 10;

    return (
        <div>
            <div>{count}</div>
            <Counter count={count} step={step} onChangeCount={(newCount) => setCount(newCount)} />
        </div>
    );
};

export default ParentSecond;