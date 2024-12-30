import {FC} from 'react';
import {IUser} from "../../models/IUser.ts";

type UserPropType = {
    item: IUser;
    foo: (item: IUser) => void;
}

const UserComponent: FC<UserPropType> = ({item, foo}) => {
    return (
        <>
            <div>{item.name}</div>
            <button onClick={() => {
                foo(item);
            }}>details</button>
        </>
    );
};

export default UserComponent;