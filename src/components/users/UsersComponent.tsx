import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {IUser} from "../../models/IUser.ts";
import {getAllUsers} from "../../services/api.service.ts";
import UserComponent from "../user/UserComponent.tsx";


const UsersComponent = () => {
   const [query]  = useSearchParams();
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        // const page = query.get('page');
        getAllUsers(query.get('page') || '1')
            .then(value => setUsers(value.data))

    }, [query]);

    return (
        <div>
            {
                users.map(value =>
                    (<UserComponent
                        key={value.id}
                        item={value} />)
                )
            }
        </div>
    );
};

export default UsersComponent;