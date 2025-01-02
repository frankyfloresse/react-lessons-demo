import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import UserComponent from "../user/UserComponent.tsx";
import {userService} from "../../services/api.service.ts";


const UsersComponent = () => {
    const [users, setUser] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getUsers().then((value) => {
            setUser(value);
        })
    }, []);

    return (
        <div>
            {
              users.map(user => <UserComponent key={user.id} item={user} />)
            }
        </div>
    );
};

export default UsersComponent;