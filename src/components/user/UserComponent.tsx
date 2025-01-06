import {FC} from "react";
import {IUser} from "../../models/IUser.ts";
import {Link, useNavigate} from "react-router-dom";

type UserTypeProps = {
    item: IUser;
}

const UserComponent: FC<UserTypeProps> = ({item}) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/users/details', {state: item});
    }

    return (
        <div>
            <Link to={'/users/details'} state={item}>{item.username}</Link>
            <button onClick={handleOnClick}>go to details</button>
        </div>
    );
};

export default UserComponent;