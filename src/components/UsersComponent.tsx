import UserComponent from "./UserComponent.tsx";
import {useEffect, useState} from "react";


const UsersComponent = () => {
    console.log('test users')
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
            <UserComponent />
        </div>
    );
};

export default UsersComponent;