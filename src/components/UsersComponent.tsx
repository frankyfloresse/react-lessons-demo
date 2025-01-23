import UserComponent from "./UserComponent.tsx";
import {useCallback, useEffect, useState} from "react";


const UsersComponent = () => {
    console.log('users')

    const foo = useCallback(() => { //кешувати пропси userComponent
        console.log('foo')
    }, [])

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))

        return () => {
            console.log('unsubscribe');
        }

    }, []);
    return (
        <div>
            users component
            <UserComponent foo={foo} />
        </div>
    );
};

export default UsersComponent;