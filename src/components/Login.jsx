// import React from 'react'

import Header from "./Header"

const Login = () => {
    return (
        <div>
            <Header />
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Log In</button>
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