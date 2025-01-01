import UsersComponent from "./components/users-component/UsersComponent.tsx";

//useState - делает переменную реактивной и запускает ререндер страницы
//counter - only readonly value
// const App = () => {
//     const [counter, setCounter] = useState<number>(0);
//
//     return (
//         <div>
//             <h2>{counter}</h2>
//             <button onClick={() => setCounter(counter + 1)}>Increment</button>
//             <button onClick={() => setCounter(counter - 1)}>Decrement</button>
//         </div>
//     );
// };


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
