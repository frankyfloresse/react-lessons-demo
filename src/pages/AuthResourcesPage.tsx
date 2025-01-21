import {useEffect} from "react";
import {authProducts} from "../services/api.service.ts";



const AuthResourcesPage = () => {
    useEffect(() => {
        authProducts().then(products => {
            console.log(products);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <div>
            AuthResourcesPage
        </div>
    );
};

export default AuthResourcesPage;