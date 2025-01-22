import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import DetailsPage from "../pages/DetailsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Layout />,
        children: [
            {index: true, element: <HomePage />},
            {
                path: 'users', element: <UsersPage/>,
                children: [
                    {path: 'posts/:userId', element: <PostsPage />}
                ]},
            {path: 'users/details', element: <DetailsPage />},
            {path: 'posts', element: <PostsPage />},
        ]
    }
])