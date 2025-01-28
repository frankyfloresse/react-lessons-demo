import {useAppSelector, userSlice} from "../main.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";


const UsersPage = () => {
    const { users } = useAppSelector(({ userSlice }) => userSlice)
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(loadedUsers => {
                dispatch(userSlice.actions.loadUsers(loadedUsers));
                // dispatch(userSliceActions.loadUsers(loadedUsers));

                // onButtonClick Delete Button
                // dispatch(userSliceActions.deleteUser(1))
            })
    }, []);

    return (
        <div>
            {
                users.map((user) => {
                    return <div key={user.id}>{user.name}</div>
                })
            }
        </div>
    );
};

export default UsersPage;