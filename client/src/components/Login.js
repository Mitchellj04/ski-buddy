import { Button } from '@mui/material'
import React, { useState } from 'react'
import Header from './Header'
import LoginForm from './LoginForm'
import SignUp from './SignUp'


const Login = ({setCurrentUser, currentUser}) => {

    const [loggedIn, setLoggedIn] = useState(true)


  return (
    <div>
        {/* <Header /> */}
        {/* <h3>Ski-Buddy Login</h3> */}
        { loggedIn ? (
            <>
            <LoginForm setCurrentUser={setCurrentUser}/>
            <p>Don't have an account?</p>
            <Button onClick={() => setLoggedIn(false)}>SignUp</Button>
            </>
        ) : (
            <>
            <SignUp setCurrentUser={setCurrentUser} currentUser={currentUser}/>
            <p>Already have an account?</p>
            <Button onClick={() => setLoggedIn(true)}>Login</Button>
            </>
        )}
    </div>  
  )
}




export default Login