import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";


const UsersPage = () => {
    const { users, loadState } = useAppSelector(({ userSlice }) => userSlice)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceActions.loadUsers())
    }, []);

    return (
        <div>
            {!loadState && <div>Loading...</div>}
            {
                users.map((user) => {
                    return <div key={user.id}>{user.name}</div>
                })
            }
        </div>
    );
};

export default UsersPage;