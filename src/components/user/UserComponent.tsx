import {FC} from "react";
import {IUser} from "../../models/IUser.ts";
import {Link, useNavigate} from "react-router-dom";

interface IProps {
    item: IUser;
}

const UserComponent: FC<IProps> = ({item}) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/users/posts/' + item.id, {state: item});
    }

    return (
        <div>
             <Link to={'/users/details'} state={item}>{item.username}</Link>
            <button onClick={handleOnClick}>more details</button>

        </div>
    );
};

export default UserComponent;