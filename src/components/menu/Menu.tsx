import './menu.css'
import {Link} from "react-router-dom";
import {FC} from "react";

const Menu: FC = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>home</Link></li>
                <li><Link to={'users'}>users</Link></li>
                <li><Link to={'posts'}>posts</Link></li>
            </ul>
        </div>
    );
};

export default Menu;