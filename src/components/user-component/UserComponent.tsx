import {FC} from 'react';
import {IUser} from "../../models/IUser.ts";

type UserPropType = {
    item: IUser;
    onClickFake: (item: IUser) => void;
}

const UserComponent: FC<UserPropType> = ({item, onClickFake}) => {
    return (
        <>
            <div>{item.name}</div>
            <button onClick={() => {
                onClickFake(item);
            }}>details</button>
        </>
    );
};

export default UserComponent;