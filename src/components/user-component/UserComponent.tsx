import {FC} from 'react';
import {IUser} from "../../models/IUser.ts";

type UserPropType = {
    item: IUser;
    onUserSelect: (item: IUser) => void;
}

const UserComponent: FC<UserPropType> = ({item, onUserSelect}) => {
    return (
        <>
            <div>{item.name}</div>
            <button onClick={() => {
                onUserSelect(item);
            }}>details</button>
        </>
    );
};

export default UserComponent;