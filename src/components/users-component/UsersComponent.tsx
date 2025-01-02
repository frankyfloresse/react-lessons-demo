import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";

// const UsersComponent = () => {
//     const [users, setUsers] = useState<IUser[]>([]);
//
//     useEffect(() => {
//         getUsers().then(value => {
//                 setUsers(value);
//             });
//
//         return () => {
//             console.log('done');
//         }
//     }, []);
//
//     return (
//         <div>
//             {
//                 users.map(user => <UserComponent key={user.id} item={user} />)
//             }
//         </div>
//     );
// };

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const users = await getUsers();
            setUsers(users);
        }

        fetchData();

        return () => {
            console.log('done');
        }
    }, []);

    const [item, setItem] = useState<IUser | null>(null)
    const onUserClick = (user: IUser) => {
        setItem(user);
    }

    return (
        <div>
            {
                item && <div>{JSON.stringify(item)}</div>
            }
            {
                users.map(user => <UserComponent onClickFake={onUserClick} key={user.id} item={user} />)
            }
        </div>
    );
};

export default UsersComponent;