import { createBrowserRouter } from "react-router-dom"
import AddTask from "../AddTask/AddTask";
import Main from "../Layout/Main"
import Home from './../Home/Home';
import Login from './../Login';
import MyTask from './../MyTask/MyTask';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addTask',
                element:<AddTask></AddTask>
            },
            {
                path: '/myTask',
                element:<MyTask></MyTask>
            },
        ]
    }
])

export default router;