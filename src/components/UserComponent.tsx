import {FC, memo} from "react";


const UserComponent: FC<{ foo: () => void, arrNums: number[], item: {name: string} }> = memo(({ arrNums, item }) => { //не буде рендиритися, якщо не буде змінюватися
    console.log('user');
    console.log(arrNums);

    return (
        <div>{item.name}</div>
    );
});

export default UserComponent;