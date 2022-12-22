import React, { useState } from 'react'
import Header from './Header'
import LoginForm from './LoginForm'
import SignUp from './SignUp'


const Login = ({setCurrentUser}) => {

    const [loggedIn, setLoggedIn] = useState(true)


  return (
    <div>
        {/* <Header /> */}
        <h3>Ski-Buddy Login</h3>
        { loggedIn ? (
            <>
            <LoginForm setCurrentUser={setCurrentUser}/>
            <p>Don't have an account?</p>
            <button onClick={() => setLoggedIn(false)}>SignUp</button>
            </>
        ) : (
            <>
            <SignUp />
            <p>Already have an account?</p>
            <button onClick={() => setLoggedIn(true)}>Login</button>
            </>
        )}
    </div>  
  )
}




export default Login