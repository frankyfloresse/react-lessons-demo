import {FC, memo} from "react";


const UserComponent: FC<{foo: () => void}> = memo(() => { //не буде рендиритися, якщо не буде змінюватися
    console.log('user');

    return (
        <div>user component</div>
    );
});

export default UserComponent;