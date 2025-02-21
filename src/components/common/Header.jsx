import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebaseAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../store/userSlice";
import { useEffect, useState } from "react";
import { LANGUAGE, LOGO_URL } from "../../utils/constants";
import { setGptMode, setLanguage, toggleDarkMode } from "../../store/settingSlice";

const Header = () => {
    const user = useSelector(state => state.user)
    const setting = useSelector(state => state.setting)
    const [show, setShow] = useState(false);
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
                // User is signed in
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

    const handleGptBtn = () => {
        dispatch(setGptMode())
    }
    const handleChangeMode = () => {
        dispatch(toggleDarkMode())
    }
    const handleChangeLanguage = (e) => {
        dispatch(setLanguage(e.target.value))
    }

    return (
        <div className="absolute w-screen px-3 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between align-center ">
            <img className="w-40" src={LOGO_URL} alt="logo" />
            {user && (
                <div className="logout-btn flex justify-end items-center">
                    <select name="language" id="language" className="px-4 py-2 mr-3 rounded-md hidden md:block" onChange={handleChangeLanguage}>
                        {LANGUAGE.map((lan) =>
                            <option key={lan.identity} defaultValue={setting.language === lan.identity ? "selected" : ""} value={lan.identity}>{lan.name}</option>
                        )}
                    </select>
                    <img src={user?.photoURL} alt="user-profile" className="relative w-10 h-10 rounded-full cursor-pointer" onClick={() => setShow(!show)} title={user?.displayName} referrerPolicy="no-referrer" />
                    <ul className={`absolute top-16 md:top-20 right-5 md:right-8 w-[140px] md:w-[170px] text-right bg-slate-100 p-2 rounded-md ${show ? "" : "hidden"}`}>
                        <li className="text-black font-bold mb-1 cursor-pointer hover:bg-slate-300 py-2 px-4 rounded-sm">{user?.displayName.toUpperCase()}</li>
                        <li className="text-black font-bold mb-1 cursor-pointer hover:bg-slate-300 py-2 px-4 rounded-sm" onClick={handleChangeMode} > {setting.isDarkMode ? "Dark Mode" : "Light Mode"}  </li>
                        <li className="text-black font-bold mb-1 cursor-pointer hover:bg-slate-300 py-2 px-4 rounded-sm" onClick={handleGptBtn} > {setting.isGptMode ? "Normal Mode" : "GPT Mode"} </li>
                        <li className="text-black font-bold mb-1 cursor-pointer hover:bg-slate-300 py-2 px-4 rounded-sm" onClick={handleSignOut} > Sign Out </li>
                    </ul>
                </div>)
            }
        </div>
    )
}

export default Header