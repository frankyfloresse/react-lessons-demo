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

    const deleteUser = (id: number) => {
        // let result = users.filter(user => user.id !== id);
        // setUsers(result);

        setUsers((users) => users.filter(user => user.id !== id))
    }

    return (
        <div>
            {
                users.map(user => <UserComponent  onUserDelete={deleteUser} key={user.id} item={user} />)
            }
        </div>
    );
};

export default UsersComponent;