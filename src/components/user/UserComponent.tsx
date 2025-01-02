import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

interface IProps {
    item: IUser;
}

const UserComponent: FC<IProps> = ({item}) => {
    return (
        <div>
            {
                item.name
            }
        </div>
    );
};

export default UserComponent;