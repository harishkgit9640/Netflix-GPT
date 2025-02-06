// import React from 'react'

import Header from "./Header"

const Login = () => {
    const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_medium.jpg"

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={BG_URL} alt="bg-image" />
            </div>
            <form className="w-3/12 bg-black absolute p-10 text-white rounded-lg bg-opacity-80 ">
                <h1 className="text-3xl font-bold py-2">Sign In</h1>
                <input type="email" placeholder="Email" className="p-2 my-4 w-full bg-gray-700" />
                <input type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-700" />
                <button className="px-4 py-2 my-2 w-full bg-red-600" >Log In</button>
                <span>error message</span>
                <h4>
                    <span className="gray">New to Netflix? </span>
                    <span className="link">Sign up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default Login