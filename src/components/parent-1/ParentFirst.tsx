import Counter from "../counter/Counter.tsx";
import {useState} from "react";


const ParentFirst = () => {
    const [count, setCount] = useState(1);
    const step = 1;

    return (
        <div>
            <div>{count}</div>
            <Counter count={count} step={step} onChangeCount={(newCount) => setCount(newCount)} />
        </div>
    );
};

export default ParentFirst;