import Menu from "../components/menu/Menu.tsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Menu />
            <Outlet />
        </div>
    );
};

export default MainLayout;