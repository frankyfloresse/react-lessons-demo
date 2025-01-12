import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {IUser} from "../../models/IUserReq.ts";
import {getAllUsers} from "../../services/api.service.ts";
import UserComponent from "../user/UserComponent.tsx";
import PaginationComponent from "../pagination/PaginationComponent.tsx";

const UsersComponent = () => {
    const [query] = useSearchParams();
    const [users, setUsers] = useState<IUser[]>([]);
    const [maxPage, setMaxPage] = useState(0);

    useEffect(() => {
        getAllUsers(query.get('pg') || '1')
            .then(value => {
                setMaxPage(value.total_pages);
                setUsers(value.data);
            });
    }, [query]);

    return (
        <div>
            {
                users.map(value => <UserComponent key={value.id} item={value} />)
            }
            <PaginationComponent maxPage={maxPage} />
        </div>
    );
};

export default UsersComponent;