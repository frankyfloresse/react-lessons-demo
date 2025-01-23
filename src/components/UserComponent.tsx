import {FC, memo} from "react";


const UserComponent: FC<{ foo: () => void, arrNums: number[] }> = memo(({ arrNums }) => { //не буде рендиритися, якщо не буде змінюватися
    console.log('user');
    console.log(arrNums);

    return (
        <div>user component</div>
    );
});

export default UserComponent;