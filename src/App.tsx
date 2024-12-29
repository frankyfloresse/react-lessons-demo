import UsersComponent from "./components/users-component/UsersComponent.tsx";

// function App() {
//     const [users, setUsers] = useState<any[]>([]);
//
//     console.log('app');
//
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json())
//         .then(value => {
//             setUsers(value);
//         });
//
//
//   return (
//       <>
//           {users.map(value => <div key={value.id}>{value.name}</div>)}
//       </>
//   )
// }

// function App() {
//     console.log('app');
//     const [users, setUsers] = useState<IUser[]>([]);
//
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then((response) => response.json())
//             .then(value => {
//                 setUsers(value);
//             });
//
//         return () => {
//             console.log('done');
//         }
//     }, []);
//
//     return (
//         <>
//             {
//                 users.map(user => <UserComponent key={user.id} item={user} />)
//             }
//         </>
//     )
// }

function App() {

    return (
        <>
            <UsersComponent />
        </>
    )
}

export default App
