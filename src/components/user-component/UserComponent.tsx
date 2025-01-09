import {FC} from 'react';
import {IUser} from "../../models/IUser.ts";

type UserPropType = {
    item: IUser;
    onUserDelete: (id: number) => void;
}

const UserComponent: FC<UserPropType> = ({item, onUserDelete}) => {
    return (
        <>
            <div>{item.name}</div>

            <button onClick={() => {
                onUserDelete(item.id);
            }}>delete</button>
        </>
    );
};

export default UserComponent;