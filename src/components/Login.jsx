
import { useState } from "react"
import Header from "./Header"
import { useRef } from "react"
import { checkValidData } from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "../utils/firebaseAuth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
    const dispatch = useDispatch();

    const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_medium.jpg"

    const [isLoginForm, setIsLoginForm] = useState(true)
    const [error, setError] = useState("");
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const handleChange = () => {
        setIsLoginForm(!isLoginForm)
    }

    const handleSubmit = () => {
        const message = checkValidData(email.current.value, password.current.value)
        message && setError(message)
        if (message) return;
        if (!isLoginForm) {

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                    }).then(() => {
                        dispatch(addUser({ uid: user.uid, displayName: user.displayName, email: user.email, photoURL: user.photoURL }));
                    }).catch((error) => {
                        console.log("Error updating profile", error);
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(`${errorMessage} ${errorCode}`)
                });

        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // dispatch(addUser({ uid: user.uid, displayName: user.displayName, email: user.email, photoURL: user.photoURL }));
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(`${errorMessage} ${errorCode}`)

                });
        }

    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img className="w-full h-full object-cover" src={BG_URL} alt="bg-image" />
            </div>*
            <form onSubmit={e => e.preventDefault()} className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="text-3xl font-bold py-2"> {isLoginForm ? "Sign In" : "Sign Up"} </h1>
                {!isLoginForm && <input type="text" ref={name} placeholder="Full Name" autoComplete="true" className="p-2 my-4 w-full bg-gray-700" />}
                <input type="email" ref={email} placeholder="Email" autoComplete="true" className="p-2 my-4 w-full bg-gray-700" />
                <input type="password" ref={password} placeholder="Password" autoComplete="true" className="p-2 my-4 w-full bg-gray-700" />
                <button className="px-4 py-2 my-2 w-full bg-red-600" onClick={handleSubmit} >{isLoginForm ? "Sign In" : "Sign Up"}</button>
                <span className="text-red-600">{error}</span>
                <div>
                    <span className="gray" >{isLoginForm ? "New to Netflix? " : "Already have an account? "}</span>
                    <span className="link cursor-pointer" onClick={handleChange} >{isLoginForm ? "Sign Up" : "Sign In"}</span>
                </div>
            </form>
        </div>
    )
}

export default Login