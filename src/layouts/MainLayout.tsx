import {Outlet} from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            main page
            <Outlet />
        </div>
    );
};

export default MainLayout;