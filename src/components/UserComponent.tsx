import {memo} from "react";


const UserComponent = memo(() => { //не буде рендиритися, якщо не буде змінюватися
    console.log('test user');

    return (
        <div>user component</div>
    );
});

export default UserComponent;