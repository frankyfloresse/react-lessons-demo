import {useLocation} from "react-router-dom";
import {IUser} from "../models/IUser.ts";

const SingleUserDetailsPage = () => {
    const {state} = useLocation();
    const user = state as IUser;

    return (
        <div>
            {/*{JSON.stringify(state)}*/}
            {/*{state.email}*/}

            {user.email}
        </div>
    );
};

export default SingleUserDetailsPage;