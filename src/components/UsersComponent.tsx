import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";
import {getUsers} from "../services/api.service.ts";
import {IUserResponse} from "../models/IUserResponse.ts";
import UserComponent from "./UserComponent.tsx";
import {useSearchParams} from "react-router-dom";


const UsersComponent = () => {
    const [searchParams] = useSearchParams({page: '1'});
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        getUsers(currentPage).then(({users}: IUserResponse)  => {
            console.log(users);
            setUsers(users)
        })
    }, [searchParams]);

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user} />)
            }
        </div>
    );
};

export default UsersComponent;