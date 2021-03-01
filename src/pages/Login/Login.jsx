import React from 'react';
import styles from "./Login.module.css"

const Login = () => {
    return (  
        <main className={`${styles.form_signin} pt-5 text-center`}>
            <form>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
                <input type="email" id="inputEmail" className="form-control mb-2" placeholder="Email address" required="" autoFocus=""></input>
                <label htmlFor="inputPassword" className="visually-hidden">Password</label>
                <input type="password" id="inputPassword" className="form-control mb-2" placeholder="Password" required=""></input>
                <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"></input> Remember me
                </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
            </form>
        </main>
    )
}

export default Login;