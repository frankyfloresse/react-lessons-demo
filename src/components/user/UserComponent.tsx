import {FC} from "react";
import {IUser} from "../../models/IUser.ts";
import {Link} from "react-router-dom";

interface IProps {
    item: IUser;
}

const UserComponent: FC<IProps> = ({item}) => {

    return (
        <div>
            {
             <Link to={'/users/details'} state={item}>{item.username}</Link>
            }
        </div>
    );
};

export default UserComponent;