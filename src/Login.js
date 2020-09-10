import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";


function Login() {
    // useHistory allows us to programmatically change the url
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // console.log(email, password)

    //take an event because it's inside the form

    const signIn = (e) => {
        e.preventDefault();

        // firebase login logic
        auth.signInWithEmailAndPassword(email, password)
            .then(loginResponse => {
                // console.log(loginResponse);
                history.push('/');
            }).catch((error) => {
                // Handle Errors here.
                // var errorCode = error.code;
                // var errorMessage = error.message;
                alert(error.message);
            });

    }

    const register = (e) => {
        e.preventDefault();

        // firebase register logic
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //sucessfully created user 
                // console.log(auth);
                setEmail('');
                setPassword('');
                // pushing the homepage to browser history in other words redirecting users
                history.push('/');
            })
            .catch((error) => {
                // Handle Errors here.
                // var errorCode = error.code;
                // var errorMessage = error.message;
                alert(error.message)
            });
    }


    return (
        <div className="login">
            <Link to='/'>
                <img
                    className='login__logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <h5>Password</h5>
                    <input type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />

                    <button className='login__signInButton'
                        onClick={signIn}
                        type='submit'
                    >Sign In</button>

                </form>

                <p>
                    {`By signing-in you agree to Amazon Fake Clone's Conditions of Use & Sale. Plese see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.`}
                </p>
                <button
                    className='login_registerButton'
                    onClick={register}
                >Create your Amazon Account</button>
            </div>

        </div>
    );
}

export default Login;
