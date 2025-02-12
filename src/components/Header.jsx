import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseAuth";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const LOGO_URL = 'https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'

    const handleSignOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Sign Out Successful");
            navigate("/")
        }).catch((error) => {
            // An error happened.
            console.log(error);

        });
    }

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between align-center ">
            <img className="w-40" src={LOGO_URL} alt="logo" />
            <div className="logout-btn">
                <button onClick={handleSignOut} className="text-white font-bold px-4 py-2 bg-red-500 rounded-md">Sign Out</button>
            </div>
        </div>
    )
}

export default Header