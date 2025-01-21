import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";

const AuthResourcesPage = () => {
    useEffect(() => {
        // Attempts to load products; if successful, logs them
        loadAuthProducts().then(products => {
            console.log(products);
            // If loading products fails (due to expired tokens), it catches the error, logs it
        }).catch(reason => {
            console.log(reason);
            // attempts to refresh tokens and retry loading products
            refresh()
                .then(() => loadAuthProducts())
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