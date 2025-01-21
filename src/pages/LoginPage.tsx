import {useEffect} from "react";
import {login} from "../services/api.service.ts";


const LoginPage = () => {
    useEffect(() => {
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        }) //triggers a login request. On successful login, user authentication tokens are stored in localStorage
    }, []);

    return (
        <div>
            LoginPage content
        </div>
    );
};

export default LoginPage;