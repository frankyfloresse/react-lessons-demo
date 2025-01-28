import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider} from "react-router-dom";
import {routes} from "./router/routes.tsx";
import {Provider, useSelector} from "react-redux";
import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "./models/IUser.ts";

type UserSliceType = {
    users: IUser[];
    // counter: number
}

const initialState: UserSliceType = {
    users: [],
    // counter: 0,
};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        loadUsers: (state, action: PayloadAction<IUser[]> ) => {
            state.users = action.payload;
        },
        // deleteUser: (state, action: PayloadAction<number>) => {
        //     state.users = state.users.filter(user => user.id !== action.payload)
        // }
    }
});

// export const postsSlice = createSlice({
//     name: 'postsSlice',
//     initialState: { posts: [] },
//     reducers: {}
// })


// export const userSliceActions = {
//     ...userSlice.actions
// }

const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        // postsSlice: postsSlice.reducer,
    }
})

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

createRoot(document.getElementById('root')!)
    .render(<Provider store={store}>
        <RouterProvider router={routes}/>
    </Provider>)
