import {useEffect} from "react";
import {authProducts, refresh} from "../services/api.service.ts";

const AuthResourcesPage = () => {
    useEffect(() => {
        authProducts().then(products => {
            console.log(products);
        }).catch(error => {
            console.log(error);

            refresh()
                .then(() => authProducts())
                .then(value => console.log(value));
        })
    }, []);

    return (
        <div>
            AuthResourcesPage
        </div>
    );
};

export default AuthResourcesPage;