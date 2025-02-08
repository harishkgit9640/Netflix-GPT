// import React from 'react'

import { useState } from "react"
import Header from "./Header"
import { useRef } from "react"

const Login = () => {
    const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_medium.jpg"

    const [isLoginForm, setIsLoginForm] = useState(false)
    const [error, setError] = useState("");
    const name = useRef("")
    const email = useRef("")
    const password = useRef("")

    const handleChange = () => {
        setIsLoginForm(!isLoginForm)
    }

    const handleSubmit = () => {
        const [email, password, name] = [email.current.value, password.current.value, name.current.value]

        if (!email || !password) {
            setError("Please enter email and password")
            return
        }

        if (isLoginForm) {
            console.log("Login")
        } else {
            console.log("Sign Up")
        }

    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={BG_URL} alt="bg-image" />
            </div>*
            <form onSubmit={e => e.preventDefault()} className="w-3/12 bg-black absolute p-10 text-white rounded-lg bg-opacity-80">
                <h1 className="text-3xl font-bold py-2"> {isLoginForm ? "Sign In" : "Sign Up"} </h1>
                {!isLoginForm && <input type="text" ref={name} placeholder="Full Name" className="p-2 my-4 w-full bg-gray-700" />}
                <input type="email" ref={email} placeholder="Email" className="p-2 my-4 w-full bg-gray-700" />
                <input type="password" ref={password} placeholder="Password" className="p-2 my-4 w-full bg-gray-700" />
                <button className="px-4 py-2 my-2 w-full bg-red-600" onClick={handleSubmit} >{isLoginForm ? "Sign In" : "Sign Up"}</button>
                <span>{error}</span>
                <div>
                    <span className="gray" >{isLoginForm ? "New to Netflix? " : "Already have an account? "}</span>
                    <span className="link cursor-pointer" onClick={handleChange} >{isLoginForm ? "Sign Up" : "Sign In"}</span>
                </div>
            </form>
        </div>
    )
}

export default Login