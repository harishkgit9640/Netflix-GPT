import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebaseAuth";
import { addUser, removeUser } from "../utils/userSlice";
const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: '',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }

    ])


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // Do any other work
                const { uid, displayName, email } = user;
                dispatch(addUser({ uid, displayName, email }))
            } else {
                // User is signed out
                dispatch(removeUser())
            }
        });
    }, [])



    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body