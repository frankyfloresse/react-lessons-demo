import {FC} from 'react';
import {IUser} from "../../models/IUser.ts";

type UserPropType = {
    item: IUser;
}

const UserComponent: FC<UserPropType> = ({item}) => {
    return (
        <div>
            <div>{item.name}</div>
        </div>
    );
};

export default UserComponent;