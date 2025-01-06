import {useLocation} from "react-router-dom";
import {IUser} from "../../models/IUser.ts";

const DetailsComponent = () => {
    const { state } = useLocation();
    const userDetails = state as IUser;

    return (
        <div>
            { userDetails.email }
        </div>
    );
};

export default DetailsComponent;