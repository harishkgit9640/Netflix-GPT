import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebaseAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSignOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Sign Out Successful");
        }).catch((error) => {
            // An error happened.
            console.log(error);

        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Do any other work
                // const { uid, displayName, email } = user;
                // dispatch(addUser({ uid, displayName, email }))
                dispatch(addUser({ uid: user.uid, displayName: user.displayName, email: user.email, photoURL: user.photoURL }));
                navigate("/browse")

            } else {
                // User is signed out
                dispatch(removeUser())
                navigate("/")

            }
        });
        return () => unsubscribe;
    }, [])

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between align-center ">
            <img className="w-40" src={LOGO_URL} alt="logo" />
            {user && (<div className="logout-btn flex justify-end items-center">
                <img src={user?.photoURL} alt="user-profile" className="w-10 h-10 rounded-full mr-3" />
                <button onClick={handleSignOut} className="text-white font-bold px-4 py-2 bg-red-500 rounded-md">Sign Out</button>
            </div>)}
        </div>
    )
}

export default Header