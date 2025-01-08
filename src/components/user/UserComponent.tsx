import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

interface IProps {
    item: IUser;
}

const UserComponent: FC<IProps> = ({ item }) => {
    return (
        <div>
            <div>{item.first_name} - {item.last_name}</div>
            <img src={item.avatar} alt={item.last_name} />
        </div>
    );
};

export default UserComponent;