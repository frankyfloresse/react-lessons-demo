import UserComponent from "./UserComponent.tsx";
import {useCallback, useMemo} from "react";
import {useFetch} from "../hooks/useFetch.tsx";


const UsersComponent = () => {
    console.log('users')
    const users = useFetch();

    const foo = useCallback(() => { //кешувати пропси userComponent
        console.log('foo')
    }, [])

    const arr: number[] = useMemo(() => {
        return [11, 22, 33];
    }, []);


    return (
        <div>
            users component
            {
                users.map(value => <UserComponent item={value} foo={foo} arrNums={arr} /> )
            }
        </div>
    );
};

export default UsersComponent;